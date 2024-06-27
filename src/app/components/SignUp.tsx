"use client"
import { useState } from "react"

type SignUpProps = {
    onClick: () => void,
}



export default function SignUp ({onClick}:SignUpProps) {
    const [signUpInputs, setSignUpInputs] = useState({email: "", password: ""})

    const handleInputs = (event:any) => {
        const {name, value} = event.target;
        setSignUpInputs((prev) => ({...prev, [name]: value}))
    }

    return (
        <div className="bg-zinc-800 h-screen flex flex-col justify-center items-center">
                <form className="flex flex-col items-center  gap-2 h-[45vh] w-8/12 bg-green-200 rounded-lg md:w-[25rem] md:h-[40vh] lg:h-[55vh]" action={"./"} method="POST">
                    <h2 className="py-4">Sign Up</h2>
                    <div className="flex flex-col">
                        <label className="text-left" htmlFor="email">Email</label>
                        <input value={signUpInputs.email} onChange={handleInputs} className="w-12/12 rounded border border-zinc-800" id="email" name="email" type="text"  />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-left" htmlFor="password">Password</label>
                        <input value={signUpInputs.password} onChange={handleInputs} className="w-12/12 rounded border border-zinc-800" id="password" name="password" type="text"  />
                    </div>
    
                </form>
                <p onClick={onClick} className="text-white text-sm cursor-pointer">Already have an account? Login!</p>
            </div>
    )
}