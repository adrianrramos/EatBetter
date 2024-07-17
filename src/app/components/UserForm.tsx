"use client";
import { useState } from "react";
export default function UserForm() {
    const [UserData, setUserData] = useState({weight: '', height: '', bodyfat: '', age: ''})





  return (
    <div className="flex h-screen w-full flex-col bg-zinc-800">
      <h1 className="m-auto w-8/12 text-2xl  text-white md:text-5xl lg:w-7/12">Your Details</h1>
      <p className="mx-auto w-8/12 text-white md:text-2xl lg:w-7/12">
        Enter your details and select your diet goal so we can whip up a diet
        plan
      </p>
      <form
        className="m-auto flex h-[50vh] w-8/12 flex-col items-center justify-center gap-1 md:gap-3 rounded-lg bg-green-200 lg:h-[60vh] lg:w-5/12"
        action=""
        method="POST"
      >
        <div className="flex w-9/12 flex-col ">
          <label htmlFor="weight">Weight</label>
          <input
            className="rounded border border-black md:h-11 lg:w-9/12"
            type="text"
            name="weight"
            id="weight"
          />
        </div>
        <div className="flex w-9/12 flex-col ">
          <label htmlFor="height">Height</label>
          <input
            className="rounded border border-black md:h-12 lg:w-9/12"
            type="text"
            name="height"
            id="height"
          />
        </div>
        <div className="flex w-9/12 flex-col ">
          <label htmlFor="body-fat">Body fat %</label>
          <input
            className="rounded border border-black md:h-12 lg:w-9/12"
            type="text"
            name="body-fat"
            id="body-fat"
          />
        </div>
        <div className="flex w-9/12 flex-col ">
          <label htmlFor="age">Age</label>
          <input
            className="rounded border border-black md:h-12 lg:w-9/12"
            type="text"
            name="age"
            id="age"
          />
        </div>
        <div>
          <label htmlFor="diet-type">
            Diet type:
            <select name="selected diet" id="diet-type">
              <option value="gain muscle">Gain muscle</option>
              <option value="lose weight">Lose weight</option>
            </select>
          </label>
        </div>
        <button onClick={(e) => {
          e.preventDefault()
        }} className="bg-white rounded-md w-36">Enter</button>
      </form>
    </div>
  );
}
