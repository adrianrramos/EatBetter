
import BreakfastMeal from "../components/BreakfastMeal"
import LunchMeal from "../components/LunchMeal"
import DinnerMeal from "../components/DinnerMeal"
import SnackMeal from "../components/SnackMeal"



  
export default function MealContainer () {
  
   
    return (
        <div className="overflow-y-scroll h-[75vh]">
            <BreakfastMeal/>
            <LunchMeal/>
            <DinnerMeal/>
            <SnackMeal/>
        </div>
    )
}