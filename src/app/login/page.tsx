"use client"
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import { useState } from "react";

export default function LoginPage() {
  const [signUp, setSignUp] = useState(false);

  const handleClick = () => {
    if(!signUp) {
        setSignUp(true)
    } else {
        setSignUp(false)
    }
}


  return (
    <>
      {
        !signUp?
        <Login onClick={handleClick}/>
        :
        <SignUp onClick={handleClick}/>
      }
  
    </>
  );
}
