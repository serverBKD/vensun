import { TwoBlock } from "../types/types.tsx";
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
        className={`${OrdenBlock}  w-full min-h-full overflow-hidden md:w-[50%] bg-white border-4 border-violet-200`}
      >
        <Image
          src={imgURL}
          alt={altIMG}
          quality={100}
          style={{
            objectFit: "contain",
            objectPosition: "center center",
            width: "380px",
            height: "100%",
            margin: "0 auto",
          }}
        />
      </article>
      <article
        className={`${colorBg} w-full md:w-[50%] flex justify-center items-center mx-auto gap-3 px-10 ${colorText}`}
      >
        <div>
          <h1 className="bg-black text-white w-full font-bold text-2xl mb-3">
            {TitleBlock}
          </h1>
          <p className="text-justify">{parrafBlock}</p>
        </div>
      </article>
    </section>
  );
}

export default TwoBlock;
