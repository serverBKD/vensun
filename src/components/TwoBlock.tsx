"use client";
import Image from "next/image";
import { CardTwoBlock } from "@/types/types.tsx";

function TwoBlock({
  fullname,
  description,
  ordenBlock,
  width,
  height,
  image,
  colorBg,
  colorText,
}: CardTwoBlock) {
  return (
    <section className="w-[80%] min-h-[120px] mx-auto hidden md:flex justify-center items-center flex-wrap text-black">
      <article
        className={`${ordenBlock} w-full max-h-{height} overflow-hidden md:w-[60%] bg-white skew-x-6 `}
      >
        <Image
          src={image}
          alt={description}
          width={width}
          height={height}
          quality={100}
          sizes="100vw"
          className="maxWidth: 100vw"
        />
      </article>
      <article
        className={`${colorBg} w-full md:w-[40%] flex justify-center items-center mx-auto gap-3 px-10 ${colorText}`}
      >
        <div>
          <h1 className=" text-black w-full font-bold text-2xl mb-3">
            {fullname}
          </h1>
          <p className="text-justify">{description}</p>
          <button
            onClick={() => alert("ya te escuche!")}
            className="w-full py-3 text-2xl rounded-md underline text-[#00CCFF] bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
          >
            motos
          </button>
        </div>
      </article>
    </section>
  );
}

export default TwoBlock;
