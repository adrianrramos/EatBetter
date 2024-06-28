import { faUtensils } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"



export default function BreakfastMeal () {
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
                <li className="border-t-zinc-300 border">temp item</li>
                <li className="border-t-zinc-300 border">temp item</li>
                <li className="border-t-zinc-300 border">temp item</li>
            
            </ul>
        </div>
    )
};