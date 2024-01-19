import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <div className="bg-[#8C6239] text-[#F9F3B9]">
        <Navbar />
        <Hero />
        <About />
    </div>
  );
}
