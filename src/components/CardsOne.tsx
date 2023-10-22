import Image from "next/image";
import { Data, numGRID } from "../types/types.ts";

const _data: Data = {
  id: 1,
  fullname: "Tubo de Escape GS200-4",
  price: 35,
  description: "Tubo de Escape GS200-4",
  image: "/parts-al-hc3.webp",
};

function CardsOne() {
  return (
    <section className="w-[90%] h-auto mx-auto bg-white flex justify-center items-center gap-7 flex-wrap pb-3">
      <article className="w-[220px] min-h-[280px] mt-7 rounded-lg overflow-hidden bg-[#e1e3e5] text-white max-lg:w-[420px] ">
        <Image
          src={_data.image}
          layout="responsive"
          className="w-[120px] h-[120px] "
          alt={_data.description}
          width={160}
          height={160}
          style={{
            objectFit: "contain",
            objectPosition: "center",
            boxShadow: "10px 7rem 31px 3px #999",
            overflow: "hidden",
          }}
        />
        <p className="mt-3 justify-center text-xs font-semibold text-center underline">
          {_data.description}
        </p>
        <p className="mb-2 justify-center text-xs font-semibold text-center">
          {_data.price}$
        </p>
      </article>
    </section>
  );
}

export default CardsOne;
