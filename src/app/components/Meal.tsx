"use client"
import { faPlus, faUtensils } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";
import CustomFood from "./CustomFood";
import CustomFoodItem from "./CustomFoodItem";
import MacroMeter from "./MacroMeter";


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

interface MealProps {
    title: string;
}
    

export default function Meal ({title}: MealProps) {
    const [foods, setFoods] = useState<Food[]>([]);
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
        let proNum  = Number(macros.protein)
        let carbNum = Number(macros.carbs)
        let fatNum = Number(macros.fats)
        setProtein(proNum)
        setCarbs(carbNum)
        setFats(fatNum)
        setMacros({ food: '', calories: '', protein: '', carbs: '', fats: ''})
        setFoods(prev => ([...prev, { macros: {...macros} }]))
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
                    foods.map((food, index) => (
                        <CustomFoodItem key={index} name={food.macros.food} calories={food.macros.calories} protein={food.macros.protein} carbs={food.macros.carbs} fats={food.macros.fats} />
                    ))
                }
            </ul>
        </div>
    )
};