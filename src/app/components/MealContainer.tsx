import Meal from "./Meal"
import { Food } from "../track/page";
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
            <Meal newFood={breakfastFoods} setNewFoods={setBreakfastFood} title="Breakfast"/>
            <Meal newFood={lunchFoods} setNewFoods={setLunchFood} title="Lunch"/>
            <Meal newFood={dinnerFoods} setNewFoods={setDinnerFood} title="Dinner"/>
            <Meal newFood={snackFoods} setNewFoods={setSnackFood} title="Snack"/>
        </div>
    )
}