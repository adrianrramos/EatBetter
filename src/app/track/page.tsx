"use client"
import CalorieBar from "../components/CalorieBar"
import BottomTabs from "../components/BottomTabs"
import MealContainer from "../components/MealContainer"
import { useState } from "react"
import { Macro } from "../components/Meal"

export interface Food {
  macros: Macro;
}


export default function TrackPage() {
  const [breakFastFoods, setBreakfastFood] = useState<Food[]>([]);
  const [lunchFoods, setLunchFoods] = useState<Food[]>([]);
  const [dinnerFoods, setDinnerFoods] = useState<Food[]>([]);
  const [snackFoods, setSnackFoods] = useState<Food[]>([]);


  return (
    <>
      <CalorieBar/>
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
    </>
  )
}
