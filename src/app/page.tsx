import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-between">
      <Hero />
      <Navbar />
    </main>
  );
}
