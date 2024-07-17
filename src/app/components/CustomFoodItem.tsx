

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
            <div className="w-11/12 h-12 m-auto border border-green-300 rounded flex justify-between items-center px-2">
                <h3 className="capitalize">{name}</h3>
                <p>{calories + ' cals'}</p>
                <p>{protein + ' protein'}</p>
                <p>{carbs + ' carbs'}</p>
                <p>{fats + ' fats'}</p>
            </div>
        </>
    )
}