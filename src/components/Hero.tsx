"use client";
import Link from "next/link";
import Image from "next/image";
import { Zen_Dots_Regular } from "@/fonts/fonts.js";

function Hero() {
  return (
    <section
      className={`${Zen_Dots_Regular.className} w-full h-screen min-h-[100vh] flex items-center relative overflow-hidden`}
    >
      <Image
        src="/hero/herovs.jpg"
        alt="hero"
        width={1080}
        height={780}
        style={{
          zIndex: -1,
          position: "absolute",
          minWidth: "100vw",
          minHeight: "100vh",
        }}
      />
      <div className="max-w-[420px] flex flex-col px-8 py-4 rounded-xl gap-y-3 bg-gradient-to-r from-yellow-500 via-blue-600 to-red-600 text-white xs:mx-auto lg: mx-7">
        <h1 className="text-5xl font-extrabold ">VENSUN</h1>
        <label
          htmlFor="wsUser"
          className="text-xl font-bold italic tracking-[.25rem]"
        >
          ¡dime a donde vamos!
        </label>
        <Link
          href={"/motos"}
          className="w-full py-3 text-2xl rounded-md text-center  text-white bg-gray-600 hover:underline"
        >
          motos
        </Link>
      </div>
    </section>
  );
}

export default Hero;
