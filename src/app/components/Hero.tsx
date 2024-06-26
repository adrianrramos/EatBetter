import Navbar from "./Navbar"
import Image from "next/image"
import AppIcon from "../../../assets/App-mockup.png"
import Link from "next/link"


export default function Hero () {
    return (
        <main className="bg-zinc-900 h-screen text-white pt-4">
            <Navbar/>
            <Image
                src={AppIcon}
                height={300}
                width={300}
                alt="App icon"
                priority
                className="m-auto py-16"
            />
            <h1 className="text-2xl m-auto text-center pb-4"><span className="text-green-300">Eat Better</span>, a calories <br/> tracking app that coaches you</h1>
            <p className="text-xs w-64 m-auto text-center">Focus on day to day training. Eat better handles the stress of diet planning to make your fitness goals a reality</p>
            <div className="flex justify-center mt-4">
                <Link href={'./login/page.tsx'} className="bg-green-400 rounded-lg w-24 text-center text-zinc-800 ">Sign Up</Link>
            </div>
        </main>
    )
}