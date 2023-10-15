"use client";
import { Zen_Dots_Regular } from "@/fonts/fonts.jsx";
import Image from "next/image";
import dsc from "/public/svg_brands/dsc.svg";
import paradox from "/public/svg_brands/paradox.svg";

function Hero() {
  return (
    <section className="w-full min-w-[420px] max-h-screen min-h-[100vh] bg-[url('/hero/pexels-david-sirila-12909094.jpg')] bg-no-repeat bg-origin-center bg-center bg-cover">
      <article
        className={`${Zen_Dots_Regular.className} w-full min-h-[100vh]  flex items-center bg-black bg-opacity-10 xl:justify-self-start lg:px-[100px]`}
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

// <div className="w-[80%] bg-white p-12 rounded-sm shadow-md bg-opacity-40 flex justify-center items-center">
//   <div className="text-[#25D366] italic tracking-wider mb-2 flex flex-col gap-y-3">
//     <p>¿Quieres saber mas?</p>
//     {/* <section className="flex justify-between gap-3">
//     <picture>
//       <Image src={dsc} alt="DSC" width={128} height={128} />
//     </picture>
//     <picture>
//       <Image src={paradox} alt="DSC" width={128} height={128} />
//     </picture>
//   </section> */}
//     <input
//       type="tel"
//       name="wsUser"
//       id="wsUser"
//       placeholder="WhatsApp: 0412-4201800"
//       style={{
//         borderRadius: "5px",
//         padding: "8px",
//         border: "1px solid #ccc",
//         width: "380px",
//       }}
//     />
//   </div>
//   <button
//     onClick={() => alert("sientate que ya te llamo!")}
//     className="w-[380px] h-10 bg-[#12ef63] px-3 rounded-sm text-md text-center text-blue-700"
//   >
//     WhatsApp
//   </button>
// </div>;
