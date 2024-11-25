"use client"
import { faPlus, faUtensils } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { SetStateAction, useState, useContext } from "react";
import { Food } from "../dashboard/page";
import { CalorieBarContext } from "./context/CalorieBarContext";
import CustomFoodInputs from "./CustomFoodInputs";
import CustomFoodItem from "./CustomFoodItem";
import MacroMeter from "./MacroMeter";
import { useEffect } from "react";
import { createClient } from "@/utils/supabase/client";

export interface NewFoodEntry {
    food: string;
    calories: string;
    protein: string;
    carbs: string;
    fats: string;
}


interface MealProps {
    mealArr: Food[];
    setMealArr: React.Dispatch<SetStateAction<Food[]>>;
    title: string;
}

type diet = {
    daily_proteins: number,
    daily_carbs: number,
    daily_fats: number
  }
  
    

export default function Meal ({title, mealArr, setMealArr}: MealProps) {
    const [newFoodEntry, setNewFoodEntry] = useState<NewFoodEntry>({ food: '', calories: '', protein: '', carbs: '', fats: ''});
    const [macroCounts, setMacroCounts] = useState({ protein: 0, carbs: 0, fats: 0, calories: 0});
    const [showInputs, setShowInputs] = useState(false);
    const [mealMacros, setMealMacros] = useState({ protein: 0, carbs: 0, fats: 0})

    const handleCalorieBar = useContext(CalorieBarContext)

    const handleToggle = () => {
        !showInputs? setShowInputs(true): setShowInputs(false);
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewFoodEntry({
            ...newFoodEntry,
            [e.target.name]: e.target.value
        })
    }

    const handleAddMacros = () => {
        const addNewFood = { newFood: {...newFoodEntry} } 
        let proSum = 0;
        let carbSum = 0;
        let fatSum = 0;
        let caloriesSum = 0;
        mealArr.forEach((food) => {
           let { protein, carbs, fats, calories } = food.macros
           proSum += Number(protein);
           carbSum += Number(carbs);
           fatSum += Number(fats)
           caloriesSum += Number(calories)
        })
        proSum += Number(addNewFood.newFood.protein)
        carbSum += Number(addNewFood.newFood.carbs)
        fatSum += Number(addNewFood.newFood.fats)
        caloriesSum += Number(addNewFood.newFood.calories)
        setMacroCounts({protein: proSum, carbs: carbSum, fats: fatSum, calories: caloriesSum})
    }

    const handleAddFood = () => {
        const addNewFood = { macros: {...newFoodEntry} } 
        setMealArr(prev => [...prev, addNewFood])
        setNewFoodEntry({ food: '', calories: '', protein: '', carbs: '', fats: ''})
        const { protein, carbs, fats , calories } = addNewFood.macros;
        handleCalorieBar.handleAddBarCounts(Number(protein), Number(carbs), Number(fats), Number(calories))
    }

    const handleDeleteFood = (index: number) => {
        setMealArr(currentMeal => currentMeal.filter((_,i) => i !== index));
        let oldPro = 0;
        let oldCarbs = 0;
        let oldFats = 0;
        let oldCals = 0;
        mealArr.forEach((food, i) => {
            if(i == index) {
                oldPro = Number(food.macros.protein);
                oldCarbs = Number(food.macros.carbs)
                oldFats = Number(food.macros.fats)
                oldCals = Number(food.macros.calories)
            }
            
        })
    
       handleCalorieBar.handleSubBarCounts(Number(oldPro), Number(oldCarbs), Number(oldFats), Number(oldCals))
    }

    const handleSubMacros = (index: number) => {
        let subPro = macroCounts.protein;
        let subCarb = macroCounts.carbs;
        let subFat = macroCounts.fats;
        let subCal = macroCounts.calories
        mealArr.forEach((food,i) => {
            if(i === index) {
                subPro -= Number(food.macros.protein);
                subCarb -= Number(food.macros.carbs);
                subFat -= Number(food.macros.fats)
                subCal -= Number(food.macros.calories)
            }
        })
        setMacroCounts({protein: subPro, carbs: subCarb, fats: subFat, calories: subCal})
    }
    



    useEffect(() => {
        const supabase = createClient();
        const fetchDiet  = async() => {
          const { data: { user }} = await supabase.auth.getUser();
          const {data, error } = await supabase
          .from("macro_goals")
          .select()
          .eq('user_id', user?.id)
          if(data && data.length > 0) {
            const diet: diet = data[0]
            console.log(diet)
            setMealMacros({ protein: diet.daily_proteins, carbs: diet.daily_carbs, fats: diet.daily_fats })
          } else {
            console.log('the data is null')
          }
        }
        fetchDiet()
    },[])

    
    return (
        <div className="bg-neutral-200 w-11/12 m-auto my-4 border border-green-300 rounded">
            <div className="flex flex-col m-1">
                <div className="flex justify-between">
                    <div className="flex">
                        <FontAwesomeIcon className="w-4 h-4 my-auto" icon={faUtensils}/>
                        <h3>{title}</h3>
                    </div>
                    <h3 className="pr-2">
                        {macroCounts.calories}
                    </h3>
                </div>
                <div className="flex">
                    <MacroMeter bgColor="bg-green-300" initialMacro={macroCounts.protein} dailyMacroGoal={mealMacros.protein / 4} macroType="p"  />
                    <MacroMeter bgColor="bg-amber-300" initialMacro={macroCounts.carbs} dailyMacroGoal={mealMacros.carbs / 4} macroType="c"  />
                    <MacroMeter bgColor="bg-red-300" initialMacro={macroCounts.fats} dailyMacroGoal={mealMacros.fats / 4} macroType="f" />
                </div>
            </div>
            <ul>
                {
                    mealArr.map((food, index) => (
                        <CustomFoodItem key={index} subMacros={handleSubMacros} onDelete={handleDeleteFood} name={food.macros.food} calories={food.macros.calories} protein={food.macros.protein} carbs={food.macros.carbs} fats={food.macros.fats} />
                    ))
                }
                {showInputs? <CustomFoodInputs newFoodEntry={newFoodEntry} handleProteinCount={handleAddMacros}  handleAddFood={handleAddFood} handleToggle={handleToggle} handleInputChange={handleInputChange} /> : null}
                <button onClick={handleToggle} className="flex items-center p-0.5 font-bold">
                    <FontAwesomeIcon className="w-4 h-4" icon={faPlus}/>
                    ADD FOOD
                </button>
            </ul>
        </div>
    )
};
