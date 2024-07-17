"use client"
import { Macro } from "./Meal"
import CustomFoodItem from "./CustomFoodItem";


interface CustomFoodProps {
    macros: Macro;
    handleCalories: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleAddFood: () => void;
    handleInputs: () => void;
}

 

export default function CustomFood ({ macros, handleAddFood, handleCalories, handleInputs }: CustomFoodProps) {


    return (
        <>
            
            <aside className="w-11/12 m-auto">
                    <div className="flex flex-col">
                        <label htmlFor="food">food</label>
                        <input value={macros.food} onChange={handleCalories} type="text" id="food" name="food" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="calories">calories</label>
                        <input value={macros.calories} onChange={handleCalories} type="text" id="calories" name="calories" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="protien">protein</label>
                        <input value={macros.protein} onChange={handleCalories} type="text" name="protein" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="carbs">carbs</label>
                        <input value={macros.carbs} onChange={handleCalories} type="text" id="carbs" name="carbs" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="fat">fats</label>
                        <input value={macros.fats} onChange={handleCalories} type="text" id="fats" name="fats" />
                    </div>
                    <button onClick={() => {
                        handleAddFood()
                        handleInputs()
                    }}  className="mx-4 my-2 w-12 rounded border border-green-400 bg-green-200">Add+</button>
            </aside>
        </>
    );

}