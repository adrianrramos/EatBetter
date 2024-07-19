"use client"
import { NewFoodEntry } from "./Meal"



interface CustomFoodInputsProps {
    newFoodEntry: NewFoodEntry;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleAddFood: () => void;
    handleToggle: () => void;
    handleProteinCount: () => void;
}

 

export default function CustomFoodInputs ({ newFoodEntry, handleAddFood, handleInputChange, handleToggle , handleProteinCount }: CustomFoodInputsProps) {


    return (
        <>
            
            <aside className="w-11/12 m-auto">
                    <div className="flex justify-between">
                        <label htmlFor="food">Food</label>
                        <input className="rounded border border-zinc-300" value={newFoodEntry.food} onChange={handleInputChange} type="text" id="food" name="food" />
                    </div>
                    <div className="flex justify-between">
                        <label htmlFor="calories">Calories</label>
                        <input className="rounded border border-zinc-300" value={newFoodEntry.calories} onChange={handleInputChange} type="text" id="calories" name="calories" />
                    </div>
                    <div className="flex justify-between">
                        <label htmlFor="protien">Protein</label>
                        <input className="rounded border border-zinc-300" value={newFoodEntry.protein} onChange={handleInputChange} type="text" name="protein" />
                    </div>
                    <div className="flex justify-between">
                        <label htmlFor="carbs">Carbs</label>
                        <input className="rounded border border-zinc-300" value={newFoodEntry.carbs} onChange={handleInputChange} type="text" id="carbs" name="carbs" />
                    </div>
                    <div className="flex justify-between">
                        <label htmlFor="fat">Fats</label>
                        <input className="rounded border border-zinc-300" value={newFoodEntry.fats} onChange={handleInputChange} type="text" id="fats" name="fats" />
                    </div>
                    <button onClick={() => {
                        handleProteinCount()
                        handleToggle()
                        handleAddFood()
                    }}  className="mx-4 my-2 w-12 rounded border border-green-400 bg-green-200">Add+</button>
            </aside>
        </>
    );

}