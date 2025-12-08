import Image from "next/image";
import Ostroheader from "./components/ostroheader"
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center">
      <Ostroheader></Ostroheader>
      <main className="flex justify-center items-center flex-col w-screen h-9/10 gap-16">
        <div className="text flex flex-col items-center">
          <div className="title uppercase text-void font-extrabold text-6xl">hello, we are <span className="text-shadow-ostroborea text-lion">ostroborea</span></div>  
          <p className="text-2xl text-frenchgray max-w-1/2 text-center">a game development studio focused on fantasy, creativity and imagination</p>
        </div>
        <Link className="button w-48 h-48 rounded-full border-lion border-8 cursor-pointer" href="./projects/"></Link>
      </main>
    </div>
  );
}
