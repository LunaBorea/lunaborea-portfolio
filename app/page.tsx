import Noise from "./components/noise";
import Ostroheader from "./components/ostroheader"
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center overflow-hidden">

      <Noise />

      <Ostroheader />

      <main className="flex items-center flex-col w-screen h-9/10 gap-16 pt-[22vh]">

        <div className="text flex flex-col">
          <div className="flex flex-row w-full">
            <div className="uppercase text-lion text-5xl tracking-widest mr-5">My name is</div>  
            <div className="center-line-h grow"></div>
          </div>

          <div className="title uppercase text-void font-extrabold text-9xl text-shadow-ostroborea transition-transform hover:scale-x-110 cursor-default">Nathanael Lampa</div>  

          <div className="flex flex-row w-full">
            <div className="center-line-h grow"></div>
            <div className="uppercase text-lion text-3xl tracking-widest ml-5 -mt-2">aka lunaborea</div>  
          </div>

          <p className="text-2xl text-frenchgray w-full font-sans tracking-tight text-center mt-5">aspiring game developer · full stack background · artist</p>
        </div>

        <div className="flex flex-row gap-20">
          <div className="flex flex-col group">
            <Link href="/projects" className="title uppercase text-5xl text-void font-extrabold text-center group-hover:text-shadow-ostroborea transition-all duration-300">projects</Link>
            <div className="w-full h-0.5 origin-left scale-x-0 bg-lion group-hover:scale-x-100 transition-transform duration-300"></div>
          </div>

          <div className="flex flex-col group">
            <Link href="/contact" className="title uppercase text-5xl text-void font-extrabold text-center group-hover:text-shadow-ostroborea transition-all duration-300">contact</Link>
            <div className="w-full h-0.5 origin-left scale-x-0 bg-lion group-hover:scale-x-100 transition-transform duration-300"></div>
          </div>
        </div>

      </main>

    </div>
  );
}
