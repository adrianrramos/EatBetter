"use client";
import { useState } from "react";
import { createClient } from "@/utils/supabase/client";




export default function DietCalculator() {
    const [userData, setUserData] = useState({calories: 0, protein: 0, carbohydrates: 0, fats: 0})
    const [diet, setDiet] = useState({dietCals: 0, proGrams: 0, carbGrams: 0, fatGrams: 0})
    
    const supabase = createClient();

    const insertDietIntoDB = async(e:any) => {
      e.preventDefault()
      const {data: { user } } = await supabase.auth.getUser()
      const currentDate = new Date().toLocaleDateString('en-CA');;
      console.log("Formatted Current Date:", currentDate);

      const { error, data } = await supabase
      .from("macro_goals")
      .upsert({ 
        user_id: user?.id,
        start_date: currentDate,
        end_date: currentDate,
        daily_calories: diet.dietCals,
        daily_proteins: diet.proGrams,
        daily_carbs: diet.carbGrams,
        daily_fats: diet.fatGrams
      }, { onConflict: 'user_id' })
      if(error) {
        console.log(error)
      }
      if(data) {
        console.log(data)
      }
    }


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const {name, value} = e.target;
      setUserData(prev => {
        const updatedUserData = {...prev, [name]: Number(value)};
        handleDietNutrients(updatedUserData);
        return updatedUserData
      });
    };

    const getGramsFromPercent = (userData: { calories: number, protein: number, carbohydrates: number, fats: number }) => {
      const diet = userData.calories;
      const proCals = (userData.protein / 100) * diet;
      const carbCals = (userData.carbohydrates / 100) * diet;
      const fatCals = (userData.fats / 100) * diet;
      let carbsInGrams = Math.ceil(carbCals / 4);
      let proInGrams = Math.ceil(proCals / 4);
      let fatInGrams = Math.ceil(fatCals / 9);
      return {carbsInGrams, proInGrams, fatInGrams, diet}
    }

    const handleDietNutrients = (userData: { calories: number, protein: number, carbohydrates: number, fats: number }) => {
      const nutrients = getGramsFromPercent(userData);
      console.log(nutrients)
      const {carbsInGrams, proInGrams, fatInGrams, diet} = nutrients;
      setDiet(prev => ({...prev, dietCals: diet, proGrams: proInGrams, carbGrams: carbsInGrams, fatGrams: fatInGrams}))
    }
    

  return (
    <div className="flex h-screen w-full flex-col bg-[#00C02B0C]">
      <h1 className="m-auto w-8/12 text-2xl  text-zinc md:text-5xl lg:w-7/12">Your Details</h1>
      <p className="mx-auto w-8/12 text-zinc md:text-2xl lg:w-7/12">
       Personlize your own diet
      </p>
      <form
        className="m-auto flex h-[50vh] w-8/12 flex-col items-center justify-center gap-1 md:gap-3 rounded-lg bg-green-200 lg:h-[60vh] lg:w-5/12"
        action=""
        method="POST"
      >
        <div className="flex w-9/12 flex-col ">
          <label htmlFor="calories">Calories</label>
          <input
            className="rounded border border-black md:h-11 lg:w-9/12"
            type="text"
            name="calories"
            id="calories"
            onChange={handleChange}
            value={userData.calories}
          />
        </div>
        <div className="flex w-9/12 flex-col ">
          <label htmlFor="height" className="font-bold">{`${userData.protein}% Protein`}</label>
          <p>{diet.proGrams + ' grams'}</p>
          <input
            className="rounded border border-black md:h-12 lg:w-9/12"
            type="range"
            name="protein"
            id="protien"
            step="5"
            onChange={handleChange}
            value={userData.protein}
          />
        </div>
        <div className="flex w-9/12 flex-col ">
          <label htmlFor="carbohydrates" className="font-bold">{`${userData.carbohydrates}% Carbs`}</label>
          <p>{diet.carbGrams + ' grams'}</p>
          <input
            className="rounded border border-black md:h-12 lg:w-9/12"
            type="range"
            name="carbohydrates"
            id="carbohydrates"
            step={5}
            onChange={handleChange}
            value={userData.carbohydrates}
          />
        </div>
        <div className="flex w-9/12 flex-col ">
          <label htmlFor="Fats" className="font-bold">{`${userData.fats}% Fats`}</label>
          <p>{diet.fatGrams + ' grams'}</p>
          <input
            className="rounded border border-black md:h-12 lg:w-9/12"
            type="range"
            name="fats"
            id="fats"
            step={5}
            onChange={handleChange}
            value={userData.fats}
          />
        </div>
        <button className="bg-white rounded-md w-36" onClick={ insertDietIntoDB }>Enter</button>
      </form> 
    </div>
    
  );
}
