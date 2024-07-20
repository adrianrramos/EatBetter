"use client"
import { faPlus, faUtensils } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { SetStateAction, useState, useContext } from "react";
import { Food } from "../track/page";
import { CalorieBarContext } from "./context/CalorieBarContext";
import CustomFoodInputs from "./CustomFoodInputs";
import CustomFoodItem from "./CustomFoodItem";
import MacroMeter from "./MacroMeter";

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
    

export default function Meal ({title, mealArr, setMealArr}: MealProps) {
    const [newFoodEntry, setNewFoodEntry] = useState<NewFoodEntry>({ food: '', calories: '', protein: '', carbs: '', fats: ''});
    const [macroCounts, setMacroCounts] = useState({ protein: 0, carbs: 0, fats: 0, calories: 0});
    const [showInputs, setShowInputs] = useState(false);
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

    const handleProteinCount = () => {
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
        handleCalorieBar.handleCalorieBarCounts(Number(protein), Number(carbs), Number(fats), Number(calories))
    }

    const handleDeleteFood = (index: number) => {
        setMealArr(currentMeal => currentMeal.filter((_,i) => i !== index));
    }


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
                    <MacroMeter bgColor="bg-green-300" macroType={macroCounts.protein} initial="p"/>
                    <MacroMeter bgColor="bg-amber-300" macroType={macroCounts.carbs} initial="c"/>
                    <MacroMeter bgColor="bg-red-300" macroType={macroCounts.fats} initial="f"/>
                </div>
            </div>
            <ul>
                {
                    mealArr.map((food, index) => (
                        <CustomFoodItem key={index} onDelete={handleDeleteFood} name={food.macros.food} calories={food.macros.calories} protein={food.macros.protein} carbs={food.macros.carbs} fats={food.macros.fats} />
                    ))
                }
                {showInputs? <CustomFoodInputs newFoodEntry={newFoodEntry} handleProteinCount={handleProteinCount}  handleAddFood={handleAddFood} handleToggle={handleToggle} handleInputChange={handleInputChange} /> : null}
                <button onClick={handleToggle} className="flex items-center p-0.5 font-bold">
                    <FontAwesomeIcon className="w-4 h-4" icon={faPlus}/>
                    ADD FOOD
                </button>
            </ul>
        </div>
    )
};
