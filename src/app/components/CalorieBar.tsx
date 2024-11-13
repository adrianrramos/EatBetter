"use client"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useEffect } from "react"
import { signOut } from "../login/actions"
import { createClient } from "@/utils/supabase/client"
import { faAws } from "@fortawesome/free-brands-svg-icons"


interface CalorieBarProps {
    calorieProtein: number;
    calorieCarb: number;
    calorieFat: number;
    calorieCount: number;
}



export default function CalorieBar ({calorieProtein, calorieCarb, calorieFat, calorieCount}:CalorieBarProps) {
    const [diet, setDiet] = useState({ calories: 0, proteins: 0, carbs: 0, fats: 0 })
    


    useEffect(() => {
        async function fetchMacroGoal() {
          const supabase = createClient();
          const { data: { user } } = await supabase.auth.getUser()
          const { data } = await supabase
          .from("macro_goals")
          .select()
          .eq('user_id', user?.id)
          if (data && data.length > 0) {
            const diet = data[0];
            setDiet({ calories: diet.daily_calories, proteins: diet.daily_proteins, carbs: diet.daily_carbs, fats: diet.daily_fats })
          } else {
            console.log("there is no data")
          }
        }
        fetchMacroGoal()
    }, [])


   




 return (
    <div className="bg-neutral-200 border-b border-green-200">
       <form action="/auth/signout" method="post">
          <button className="button block" type="submit">
            Sign out
          </button>
        </form>
        <div className="flex justify-center">
            <FontAwesomeIcon icon={faArrowLeft} className="h-7 w-7 py-1"/>
            <p className="px-6 py-1 text-lg">Date</p>
            <FontAwesomeIcon icon={faArrowRight} className="h-7 w-7 py-1"/>
        </div>
        <div className="flex border justify-evenly w-11/12 m-auto">
            <div className="flex items-center justify-center w-1/3 h-7 border border-green-400 rounded text-sm">{calorieProtein}/{diet.proteins}p</div>
            <div className="flex items-center justify-center w-1/3 mx-1 h-7 border border-amber-400 rounded text-sm">{calorieCarb}/{diet.carbs}c</div>
            <div className="flex items-center justify-center w-1/3 h-7 border border-red-400 rounded text-sm">{calorieFat}/{diet.fats}f</div>
        </div>
        <div className="my-2">
            <div className="flex items-center justify-center mx-auto w-11/12 h-7 border bg-green-300 rounded text-sm">{diet.calories}cals</div>
        </div>
    </div>

 )
};