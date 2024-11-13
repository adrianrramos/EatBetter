

interface MacroMeterProps {
    macroType: string;
    initialMacro: number;
    dailyMacroGoal: number;
    bgColor: string;
}



export default function MacroMeter ({macroType, initialMacro, dailyMacroGoal, bgColor}: MacroMeterProps) {
   



   




   return (
    <div className={`flex text-sm justify-center items-center border ${bgColor} w-1/3 rounded`}>
        {initialMacro}/
        {dailyMacroGoal}{macroType}
    </div>
   )
}