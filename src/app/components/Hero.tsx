import Navbar from "./Navbar"
import Image from "next/image"
import AppIcon from "../../../assets/App-mockup.png"
import Link from "next/link"


export default function Hero () {
    return (
        <main className="bg-zinc-900 h-full pb-12 md:pb-20 text-white pt-4 ">
            <Navbar/>
            <Image
                src={AppIcon}
                height={500}
                width={500}
                alt="App icon"
                priority
                className="m-auto py-16 lg:py-12"
            />
            <h1 className="font-bold text-2xl m-auto text-center pb-4 md:text-4xl lg:text-6xl"><span className="text-green-300">Eat Better</span>, a calories <br/> tracking app that coaches you</h1>
            <p className="text-xs w-64 m-auto text-center md:text-base md:w-96">Focus on day to day training. Eat better handles the stress of diet planning to make your fitness goals a reality</p>
            <div className="flex justify-center mt-4">
                <Link href={'./login/page.tsx'} className="bg-green-400 rounded-lg w-24 text-center text-zinc-800 ">Sign Up</Link>
            </div>
        </main>
    )
}