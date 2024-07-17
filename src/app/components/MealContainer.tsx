import Meal from "./Meal"



  
export default function MealContainer () {
  
    return (
        <div className="overflow-y-scroll h-[75vh]">
            <Meal title="Breakfast"/>
            <Meal title="Lunch"/>
            <Meal title="Dinner"/>
            <Meal title="Snack"/>
        </div>
    )
}