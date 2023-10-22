"use client";
import { Zen_Dots_Regular } from "@/fonts/fonts.jsx";

// const imgHero = "/public/hero/pexels-david-sirila-12909094.jpg";
function Hero() {
  return (
    <section
      className={`w-full min-w-[420px] h-screen bg-[#ccc] bg-[url('/public/hero/pexels-david-sirila-12909094.jpg')] bg-no-repeat bg-origin-center bg-center bg-cover bg-fixed`}
    >
      <article
        className={`${Zen_Dots_Regular.className} w-full min-h-[100vh]  flex items-center bg-[#ccc] bg-opacity-10 xl:justify-self-start lg:px-[100px]`}
      >
        <div className="flex flex-col gap-y-3 bg-gradient-to-r from-yellow-500 via-blue-600 to-red-600 text-white px-8 py-4 rounded-xl">
          <h1 className="text-6xl font-extrabold ">VENSUN</h1>
          <label
            htmlFor="wsUser"
            className="text-xl font-bold italic tracking-[.25rem]"
          >
            ¡dime a donde vamos!
          </label>
          <button
            onClick={() => alert("ya te escuche!")}
            className="w-full py-3 text-2xl rounded-md text-yellow-300 bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
          >
            motos
          </button>
        </div>
      </article>
    </section>
  );
}

export default Hero;
