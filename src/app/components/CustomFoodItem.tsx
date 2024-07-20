import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

 interface CustomFoodItemProps  {
    name: string;
    calories: string;
    protein: string;
    carbs: string;
    fats: string;
    onDelete: (index:number) => void
}


export default function CustomFoodItem ({name, calories, protein, carbs, fats, onDelete}: CustomFoodItemProps) {

    return (
        <>
            <div className="w-12/12 h-12 m-auto border-b border-zinc-300 flex justify-between items-center px-2">
                <div className="flex flex-col">
                    <h3 className="capitalize">{name}</h3>
                </div>
                <div className="flex  items-center">
                    <FontAwesomeIcon onClick={() => onDelete(0)}  className="mx-2" icon={faTrashCan}/>

                    {/* <p>{protein + ' protein'}</p>
                    <p>{carbs + ' carbs'}</p>
                    <p>{fats + ' fats'}</p> */}
                    <p>{calories}</p>
                </div>
            </div>
        </>
    )
}