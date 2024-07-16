"use client"
import { faPlus, faUtensils } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";
import CustomFood from "./CustomFood";
import CustomFoodItem from "./CustomFoodItem";


export interface Macro {
    food: string;
    calories: string;
    protein: string;
    carbs: string;
    fats: string;
}
  
export interface Food {
    macros: Macro;
}
    

export default function BreakfastMeal () {
    let [foods, setFoods] = useState<Food[]>([]);
    let [macros, setMacros] = useState<Macro>({ food: '', calories: '', protein: '', carbs: '', fats: ''});
    let [showInputs, setShowInputs] = useState(false);

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
        setFoods(prev => ([...prev, { macros: {...macros} }]))
    }


    return (
        <div className="bg-neutral-200 w-11/12 m-auto my-4 border border-green-300 rounded">
            <div className="flex flex-col m-1">
                <div className="flex">
                    <FontAwesomeIcon className="w-4 h-4 my-auto" icon={faUtensils}/>
                    <h3>Breakfast</h3>
                </div>
                <div className="flex">
                    <div className="flex text-sm justify-center items-center border border-green-400 w-1/3 rounded">20/25p</div>
                    <div className="flex text-sm justify-center items-center border border-green-400 w-1/3 rounded mx-2">10/50c</div>
                    <div className="flex text-sm justify-center items-center border border-green-400 w-1/3 rounded">10/20f</div>
                </div>
            </div>
            <ul>
                <button onClick={handleInputs} className="flex items-center mx-1">
                    <FontAwesomeIcon className="w-4 h-4" icon={faPlus}/>
                    add food
                </button>
                {showInputs? <CustomFood macros={macros} handleInputs={handleInputs} handleAddFood={handleAddFood} handleCalories={handleCalories} /> : null}
                {
                    foods.map((food, index) => (
                        <CustomFoodItem key={index} name={food.macros.food} calories={food.macros.calories} protein={food.macros.protein} carbs={food.macros.carbs} fats={food.macros.fats} />
                    ))
                }
            </ul>
        </div>
    )
};