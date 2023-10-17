"use client";
import { TwoBlock } from "@/types/types.tsx";
import Image from "next/image";

function TwoBlock({
  TitleBlock,
  parrafBlock,
  OrdenBlock,
  imgURL,
  altIMG,
  colorBg,
  colorText,
}: TwoBlock) {
  return (
    <section className="w-[80%] min-h-[120px] mx-auto hidden md:flex justify-center items-center flex-wrap text-black">
      <article
        className={`${OrdenBlock} w-full max-h-[420px] overflow-hidden md:w-[60%] bg-white skew-x-6 `}
      >
        <Image
          src={imgURL}
          alt={altIMG}
          quality={100}
          layout="responsive"
          width={48}
          height={48}
          style={{
            objectFit: "contain",
            objectPosition: "50% 50%",
          }}
        />
      </article>
      <article
        className={`${colorBg} w-full md:w-[40%] flex justify-center items-center mx-auto gap-3 px-10 ${colorText}`}
      >
        <div>
          <h1 className=" text-black w-full font-bold text-2xl mb-3">
            {TitleBlock}
          </h1>
          <p className="text-justify">{parrafBlock}</p>
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
