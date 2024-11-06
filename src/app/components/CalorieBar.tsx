import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"
import { signOut } from "../login/actions"

interface CalorieBarProps {
    calorieProtein: number;
    calorieCarb: number;
    calorieFat: number;
    calorieCount: number;
}


export default function CalorieBar ({calorieProtein, calorieCarb, calorieFat, calorieCount}:CalorieBarProps) {
    const [goal, setGoal] = useState({proteinGoal: 0, carbGoal: 0, fatGoal: 0, calGoal: 0})
    const searchParams = useSearchParams();

   useEffect(() => {
    const handleDietGoal = () => {
        const pro = Number(searchParams.get("protein"))
        const carb = Number(searchParams.get("carbs"))
        const fat = Number(searchParams.get("fats"))
        const cals = Number(searchParams.get("cals"))
        setGoal({proteinGoal: pro, calGoal: cals, fatGoal: fat, carbGoal: carb })
    }
    handleDietGoal()
   }, [searchParams])

   




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
            <div className="flex items-center justify-center w-1/3 h-7 border border-green-400 rounded text-sm">{calorieProtein}/{goal.proteinGoal}p</div>
            <div className="flex items-center justify-center w-1/3 mx-1 h-7 border border-amber-400 rounded text-sm">{calorieCarb}/{goal.carbGoal}c</div>
            <div className="flex items-center justify-center w-1/3 h-7 border border-red-400 rounded text-sm">{calorieFat}/{goal.fatGoal}f</div>
        </div>
        <div className="my-2">
            <div className="flex items-center justify-center mx-auto w-11/12 h-7 border bg-green-300 rounded text-sm">{calorieCount}/{goal.calGoal}cal</div>
        </div>
       
    </div>

 )
};