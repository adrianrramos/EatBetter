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
                    <div className="flex flex-col">
                        <label htmlFor="food">food</label>
                        <input value={newFoodEntry.food} onChange={handleInputChange} type="text" id="food" name="food" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="calories">calories</label>
                        <input value={newFoodEntry.calories} onChange={handleInputChange} type="text" id="calories" name="calories" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="protien">protein</label>
                        <input value={newFoodEntry.protein} onChange={handleInputChange} type="text" name="protein" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="carbs">carbs</label>
                        <input value={newFoodEntry.carbs} onChange={handleInputChange} type="text" id="carbs" name="carbs" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="fat">fats</label>
                        <input value={newFoodEntry.fats} onChange={handleInputChange} type="text" id="fats" name="fats" />
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