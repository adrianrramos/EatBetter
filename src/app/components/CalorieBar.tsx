import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export default function CalorieBar () {




 return (
    <div className="bg-neutral-200 border-b border-green-200">
        <div className="flex justify-center">
            <FontAwesomeIcon icon={faArrowLeft} className="h-7 w-7"/>
            <p className="mx-4">date</p>
            <FontAwesomeIcon icon={faArrowRight} className="h-7 w-7"/>
        </div>
        <div className="flex border justify-evenly w-11/12 m-auto">
            <div className=" flex items-center justify-center w-1/3 h-7 border border-green-400 rounded text-sm">0/100</div>
            <div className=" flex items-center justify-center w-1/3 mx-1 h-7 border border-green-400 rounded text-sm">0/200c</div>
            <div className=" flex items-center justify-center w-1/3 h-7 border border-green-400 rounded text-sm">0/80f</div>
        </div>
        <div className="my-2">
            <div className="flex items-center justify-center mx-auto w-11/12 h-7 border border-green-400 rounded text-sm">1500/2000cal</div>
        </div>

    </div>

 )
};