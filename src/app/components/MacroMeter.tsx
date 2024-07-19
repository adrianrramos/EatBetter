import { useState } from "react";

interface MacroMeterProps {
    initial: string;
    macroType: number;
    bgColor: string;
}

export default function MacroMeter ({initial, macroType, bgColor}: MacroMeterProps) {
    const [fill, setFill] = useState({style: ''})

    const handleFill = () => {
        
    }

   return (
    <div className={`flex text-sm justify-center items-center border ${bgColor} w-1/3 rounded`}>

        {macroType}/25{initial}
    </div>
   )
}