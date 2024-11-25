import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChartLine, faGears, faHouse } from "@fortawesome/free-solid-svg-icons"


export default function BottomTabs () {



    return(
        <div className="bg-neutral-200 h-[10vh] w-full absolute bottom-0 border border-green-300 rounded flex justify-between px-8 items-center">
            <Link href={"/dashboard"} className="flex flex-col items-center" >
                <FontAwesomeIcon className="h-7 w-7" icon={faHouse}/>
                <p className="text-zinc-500 text-xs">Dashboard</p>
            </Link>

            <div className="flex w-32 justify-between">
                <Link href={"/stats"} className="flex flex-col items-center">
                    <FontAwesomeIcon className="h-7 w-7" icon={faChartLine} />
                    <p className="text-zinc-500 text-xs">Stats</p>
                </Link>
                <Link href={"/dashboard/settings"} className="flex flex-col items-center">
                    <FontAwesomeIcon className="h-7 w-7" icon={faGears}/>
                    <p className="text-zinc-500 text-xs">Settings</p>
                </Link>
            </div>
        </div>
    )
};