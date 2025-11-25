import Image from "next/image";
import Ostroheader from "./components/ostroheader"

export default function Home() {
  return (
    <div>
      <Ostroheader></Ostroheader>
      <main>
        <div className="title"></div>
      </main>
    </div>
  );
}
