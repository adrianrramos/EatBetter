

 interface CustomFoodItemProps  {
    name: string;
    calories: string;
    protein: string;
    carbs: string;
    fats: string;
}


export default function CustomFoodItem ({name, calories, protein, carbs, fats}: CustomFoodItemProps) {

    return (
        <>
            <div className="w-36 h-24 border border-green-300 rounded">
                <h3>{name}</h3>
                <p>{calories}</p>
            </div>
        </>
    )
}