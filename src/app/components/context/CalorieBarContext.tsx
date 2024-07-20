import { createContext } from "react";

export const CalorieBarContext = createContext({
     handleAddBarCounts: (protein: number, carbs: number, fats: number, calories: number) => {},
     handleSubBarCounts: (protein: number, carbs: number, fats: number, calories: number) => {}
    });
