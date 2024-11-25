import Meal from "./Meal"
import { Food } from "../dashboard/page";
import { SetStateAction } from "react";

interface MealContainerProps {
    breakfastFoods: Food[];
    setBreakfastFood: React.Dispatch<SetStateAction<Food[]>>;
    lunchFoods: Food[];
    setLunchFood: React.Dispatch<SetStateAction<Food[]>>;
    dinnerFoods: Food[];
    setDinnerFood: React.Dispatch<SetStateAction<Food[]>>;
    snackFoods: Food[];
    setSnackFood: React.Dispatch<SetStateAction<Food[]>>;
}
  
export default function MealContainer ({
    breakfastFoods,
    setBreakfastFood,
    lunchFoods,
    setLunchFood,
    dinnerFoods,
    setDinnerFood,
    snackFoods,
    setSnackFood,

}: MealContainerProps) {
  
    return (
        <div className="overflow-y-scroll h-[75vh]">
            <Meal mealArr={breakfastFoods} setMealArr={setBreakfastFood} title="Breakfast"/>
            <Meal mealArr={lunchFoods} setMealArr={setLunchFood} title="Lunch"/>
            <Meal mealArr={dinnerFoods} setMealArr={setDinnerFood} title="Dinner"/>
            <Meal mealArr={snackFoods} setMealArr={setSnackFood} title="Snack"/>
        </div>
    )
}