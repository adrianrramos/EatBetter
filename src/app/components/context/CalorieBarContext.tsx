import { createContext } from "react";

export const CalorieBarContext = createContext({ handleCalorieBarCounts: (protein: number, carbs: number, fats: number, calories: number) => {}});
