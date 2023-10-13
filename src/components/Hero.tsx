"use client";
import { Zen_Dots_Regular } from "@/fonts/fonts.jsx";
import Image from "next/image";
import dsc from "/public/svg_brands/dsc.svg";
import paradox from "/public/svg_brands/paradox.svg";

function Hero() {
  return (
    <section className="w-full min-w-[420px] max-h-screen min-h-[100vh] bg-[url('/hero/pexels-david-sirila-12909094.jpg')] bg-no-repeat bg-origin-center bg-center bg-cover ">
      <article
        className={`${Zen_Dots_Regular.className} w-full min-h-[100vh] flex flex-col justify-center items-center gap-y-3 pt-5 bg-opacity-75 bg-black `}
      >
        <div>
          <h1 className="my-4 text-9xl text-white font-extrabold ">VENSUN</h1>
          <div className="text-[#25D366] italic tracking-wider mb-2 flex flex-col gap-y-3">
            <label htmlFor="wsUser" className="text-2xl font-bold italic">
              ¡dime a donde vamos!
            </label>
            <p>¿Quieres saber mas?</p>
            {/* <section className="flex justify-between gap-3">
            <picture>
              <Image src={dsc} alt="DSC" width={128} height={128} />
            </picture>
            <picture>
              <Image src={paradox} alt="DSC" width={128} height={128} />
            </picture>
          </section> */}
            <input
              type="tel"
              name="wsUser"
              id="wsUser"
              placeholder="WhatsApp: 0412-4201800"
              style={{
                borderRadius: "5px",
                padding: "8px",
                border: "1px solid #ccc",
                width: "380px",
              }}
            />
          </div>
          <button
            onClick={() => alert("sientate que ya te llamo!")}
            className="w-[380px] h-10 bg-[#12ef63] px-3 rounded-sm text-md text-center text-blue-700"
          >
            WhatsApp
          </button>
        </div>
      </article>
    </section>
  );
}

export default Hero;
