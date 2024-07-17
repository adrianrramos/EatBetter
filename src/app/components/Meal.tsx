"use client"
import { faPlus, faUtensils } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { SetStateAction, useState } from "react";
import CustomFood from "./CustomFood";
import CustomFoodItem from "./CustomFoodItem";
import MacroMeter from "./MacroMeter";
import { Food } from "../track/page";

export interface Macro {
    food: string;
    calories: string;
    protein: string;
    carbs: string;
    fats: string;
}
  
// export interface Food {
//     macros: Macro;
// }

interface MealProps {
    newFood: Food[];
    setNewFoods: React.Dispatch<SetStateAction<Food[]>>;
    title: string;
}
    

export default function Meal ({title, newFood, setNewFoods}: MealProps) {
    // const [foods, setFoods] = useState<Food[]>([]);
    const [macros, setMacros] = useState<Macro>({ food: '', calories: '', protein: '', carbs: '', fats: ''});
    const [protein, setProtein] = useState(0);
    const [carbs, setCarbs] = useState(0);
    const [fats, setFats] = useState(0);
    const [showInputs, setShowInputs] = useState(false);

    const handleInputs = () => {
        !showInputs? setShowInputs(true): setShowInputs(false);
    }

    const handleCalories = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMacros({
            ...macros,
            [e.target.name]: e.target.value
        })
    }

    const handleAddFood = () => {
        const addNewFood = { macros: {...macros} } 
        setNewFoods(prev => [...prev, addNewFood])
        let proSum = 0;
        let carbSum = 0;
        let fatSum = 0;
        newFood.forEach((food) => {
            let pro =  Number(food.macros.protein);
            let carb = Number(food.macros.carbs);
            let fat = Number(food.macros.fats);
            proSum += pro
            carbSum += carb
            fatSum += fat
        })
        proSum += Number(addNewFood.macros.protein)
        carbSum += Number(addNewFood.macros.carbs)
        fatSum += Number(addNewFood.macros.fats)
        setProtein(proSum)
        setCarbs(carbSum)
        setFats(fatSum)
        setMacros({ food: '', calories: '', protein: '', carbs: '', fats: ''})
    }

   


    return (
        <div className="bg-neutral-200 w-11/12 m-auto my-4 pb-2 border border-green-300 rounded">
            <div className="flex flex-col m-1">
                <div className="flex">
                    <FontAwesomeIcon className="w-4 h-4 my-auto" icon={faUtensils}/>
                    <h3>{title}</h3>
                </div>
                <div className="flex">
                    <MacroMeter macroType={protein} initial="p"/>
                    <MacroMeter macroType={carbs} initial="c"/>
                    <MacroMeter macroType={fats} initial="f"/>
                </div>
            </div>
            <ul>
                <button onClick={handleInputs} className="flex items-center mx-1">
                    <FontAwesomeIcon className="w-4 h-4" icon={faPlus}/>
                    add food
                </button>
                {showInputs? <CustomFood macros={macros} handleInputs={handleInputs} handleAddFood={handleAddFood} handleCalories={handleCalories} /> : null}
                {
                    newFood.map((food, index) => (
                        <CustomFoodItem key={index} name={food.macros.food} calories={food.macros.calories} protein={food.macros.protein} carbs={food.macros.carbs} fats={food.macros.fats} />
                    ))
                }
            </ul>
        </div>
    )
};