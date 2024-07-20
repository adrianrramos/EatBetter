"use client"
import CalorieBar from "../components/CalorieBar"
import BottomTabs from "../components/BottomTabs"
import MealContainer from "../components/MealContainer"
import { useState } from "react"
import { NewFoodEntry } from "../components/Meal"
import { CalorieBarContext } from "../components/context/CalorieBarContext"


export interface Food {
  macros: NewFoodEntry;
}


export default function TrackPage() {
  const [breakFastFoods, setBreakfastFood] = useState<Food[]>([]);
  const [lunchFoods, setLunchFoods] = useState<Food[]>([]);
  const [dinnerFoods, setDinnerFoods] = useState<Food[]>([]);
  const [snackFoods, setSnackFoods] = useState<Food[]>([]);
  const [macroCounts, setMacroCounts] = useState({protein: 0, carbs: 0, fats: 0, calories: 0})

  
  const handleAddBarCounts = (newProtein = 0, newCarbs = 0, newFats = 0, newCalories = 0) => {
    let proteins = newProtein;
    let carbs = newCarbs;
    let fats = newFats;
    let calories = newCalories;
    [breakFastFoods, lunchFoods, dinnerFoods, snackFoods].forEach((meal) => {
      meal.forEach((food) => {
        proteins += Number(food.macros.protein)
        carbs += Number(food.macros.carbs)
        fats += Number(food.macros.fats)
        calories += Number(food.macros.calories)
      });
    });
    setMacroCounts({protein: proteins, carbs: carbs, fats: fats, calories: calories})
  };

  const handleSubBarCounts = (deletedPro: number, deletedCarb:number, deletedFat:number, deletedCals: number) => {
    let currentPro = macroCounts.protein;
    let currentCarbs = macroCounts.carbs;
    let currentFat = macroCounts.fats;
    let currentCals = macroCounts.calories;

    currentPro -= deletedPro;
    currentCarbs -= deletedCarb;
    currentFat -= deletedFat;
    currentCals -= deletedCals;
   
    setMacroCounts({ protein: currentPro, carbs: currentCarbs, fats: currentFat, calories: currentCals})
  };




  return (
    
     <>
     <CalorieBarContext.Provider value={{handleAddBarCounts, handleSubBarCounts}}>
        <CalorieBar calorieCount={macroCounts.calories} calorieCarb={macroCounts.carbs} calorieFat={macroCounts.fats} calorieProtein={macroCounts.protein}/>
          <MealContainer
            breakfastFoods={breakFastFoods}
            setBreakfastFood={setBreakfastFood}
            lunchFoods={lunchFoods}
            setLunchFood={setLunchFoods}
            dinnerFoods={dinnerFoods}
            setDinnerFood={setDinnerFoods}
            snackFoods={snackFoods}
            setSnackFood={setSnackFoods}
          />
        <BottomTabs/>
     </CalorieBarContext.Provider>
     </>

    
  )
}
