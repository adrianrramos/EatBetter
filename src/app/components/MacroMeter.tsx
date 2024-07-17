
interface MacroMeterProps {
    initial: string;
    macroType: number;
}

export default function MacroMeter ({initial, macroType}: MacroMeterProps) {


   return <div className="flex text-sm justify-center items-center border border-green-400 w-1/3 rounded">{macroType}/25{initial}</div>
}