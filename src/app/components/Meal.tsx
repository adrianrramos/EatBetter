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
    newFood: Food[];
    setNewFoods: React.Dispatch<SetStateAction<Food[]>>;
    title: string;
}
    

export default function Meal ({title, newFood, setNewFoods}: MealProps) {
    const [newFoodEntry, setNewFoodEntry] = useState<NewFoodEntry>({ food: '', calories: '', protein: '', carbs: '', fats: ''});
    const [macroCounts, setMacroCounts] = useState({ protein: 0, carbs: 0, fats: 0});
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
        newFood.forEach((food) => {
           let { protein, carbs, fats } = food.macros
           proSum += Number(protein);
           carbSum += Number(carbs);
           fatSum += Number(fats)
        })
        proSum += Number(addNewFood.newFood.protein)
        carbSum += Number(addNewFood.newFood.carbs)
        fatSum += Number(addNewFood.newFood.fats)
        setMacroCounts({protein: proSum, carbs: carbSum, fats: fatSum})
    }

    const handleAddFood = () => {
        const addNewFood = { macros: {...newFoodEntry} } 
        setNewFoods(prev => [...prev, addNewFood])
        setNewFoodEntry({ food: '', calories: '', protein: '', carbs: '', fats: ''})
        const { protein, carbs, fats } = addNewFood.macros;
        handleCalorieBar.handleCalorieBarCounts(Number(protein), Number(carbs), Number(fats))

    }


    return (
        <div className="bg-neutral-200 w-11/12 m-auto my-4 pb-2 border border-green-300 rounded">
            <div className="flex flex-col m-1">
                <div className="flex">
                    <FontAwesomeIcon className="w-4 h-4 my-auto" icon={faUtensils}/>
                    <h3>{title}</h3>
                </div>
                <div className="flex">
                    <MacroMeter bgColor="bg-green-300" macroType={macroCounts.protein} initial="p"/>
                    <MacroMeter bgColor="bg-amber-300" macroType={macroCounts.carbs} initial="c"/>
                    <MacroMeter bgColor="bg-red-300" macroType={macroCounts.fats} initial="f"/>
                </div>
            </div>
            <ul>
                <button onClick={handleToggle} className="flex items-center mx-1 font-bold">
                    <FontAwesomeIcon className="w-4 h-4" icon={faPlus}/>
                    ADD FOOD
                </button>
                {showInputs? <CustomFoodInputs newFoodEntry={newFoodEntry} handleProteinCount={handleProteinCount}  handleAddFood={handleAddFood} handleToggle={handleToggle} handleInputChange={handleInputChange} /> : null}
                {
                    newFood.map((food, index) => (
                        <CustomFoodItem key={index} name={food.macros.food} calories={food.macros.calories} protein={food.macros.protein} carbs={food.macros.carbs} fats={food.macros.fats} />
                    ))
                }
            </ul>
        </div>
    )
};
