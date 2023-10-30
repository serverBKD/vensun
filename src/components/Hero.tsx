"use client";
import Link from "next/link";
import Image from "next/image";
import { Zen_Dots_Regular } from "@/fonts/fonts.js";

function Hero() {
  return (
    <section
      className={`${Zen_Dots_Regular.className} w-full h-screen min-h-[100vh] flex items-center xl:justify-self-start bg-[url("/hero/motoBikes.jpg")] bg-no-repeat bg-cover`}
    >
      <Image
        src="/hero/motoBikes.jpg"
        alt="hero"
        width={1080}
        height={1080}
        className="w-1 h-1"
      />
      <div className="flex flex-col gap-y-3 bg-gradient-to-r from-yellow-500 via-blue-600 to-red-600 text-white px-8 py-4 rounded-xl">
        <h1 className="text-6xl font-extrabold ">VENSUN</h1>
        <label
          htmlFor="wsUser"
          className="text-xl font-bold italic tracking-[.25rem]"
        >
          ¡dime a donde vamos!
        </label>
        <Link
          href={"/motos"}
          className="w-full py-3 text-2xl rounded-md text-yellow-300 bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
        >
          motos
        </Link>
      </div>
    </section>
  );
}

export default Hero;
