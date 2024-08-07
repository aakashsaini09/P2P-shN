import Image from "next/image"
import { FlipWords } from "../components/ui/flip-words"
const Hero = () => {
  const words = ["developer", "designer"]
  return (
    <div className="w-full h-[100vh] flex">
      <div className="left h-full w-[60%] flex flex-col justify-center gap-1">
        <div className="px-24 font-extralight text-8xl text-white">Hi! I'm</div>
        <div className="px-24 font-bold text-white text-8xl font-mono">Aakash Saini</div>
        <div className="text-white font-bold text-4xl px-24">I'm a web <FlipWords words={words} className="text-purple-600"/></div>
        <hr className="mx-24 h-0 border border-black w-72"/>
        <p className="font-medium text-slate-500 text-base px-24">I'm a pasonite Full Stack developer with a good knowledge of web3. I'm a pasonite Full Stack developer with a good knowledge of web3. I'm a pasonite Full Stack developer with a good knowledge of web3.</p>
      </div>

      <div className="right w-[40%] h-[90vh]">
      </div>
    </div>
  )
}

export default Hero
