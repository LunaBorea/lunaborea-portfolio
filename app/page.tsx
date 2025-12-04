import Image from "next/image";
import Ostroheader from "./components/ostroheader"
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center">
      <Ostroheader></Ostroheader>
      <main className="flex justify-center items-center flex-col w-screen h-9/10 gap-16">
        <div className="text flex flex-col items-center">
          <div className="title uppercase text-amber-200 font-extrabold text-6xl">hello, we are <span className="text-shadow-lg text-shadow-indigo-600">ostroborea</span></div>  
          <p className="text-3xl text-slate-300 max-w-1/2 text-center">a game development studio focused on fantasy, creativity and imagination</p>
        </div>
        <Link className="button w-48 h-48 rounded-full border-amber-200 border-8 cursor-pointer" href="./projects/"></Link>
      </main>
    </div>
  );
}
