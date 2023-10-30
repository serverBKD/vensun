import Image from "next/image";
import { Card, numGRID } from "@/types/types.ts";

const data: Card[] = [
  {
    id: 1,
    fullname: "Camera Security",
    price: 350,
    description: "Camera Security",
    image: "/public/products/repuestos/IMG_20231012_154936.jpg",
  },
  {
    id: 2,
    fullname: "Sensor Security",
    price: 12.5,
    description: "Sensor Security",
    image: "/public/products/repuestos/IMG_20231012_154936.jpg",
  },
  {
    id: 3,
    fullname: "Siren Security",
    price: 35,
    description: "Siren Security",
    image: "/public/products/repuestos/IMG_20231012_154936.jpg",
  },
  {
    id: 4,
    fullname: "Sensor Security",
    price: 48,
    description: "Lighting Security",
    image: "/public/products/repuestos/IMG_20231012_154936.jpg",
  },
  {
    id: 5,
    fullname: "Camera Security",
    price: 350,
    description: "Camera Security",
    image:
      "/public/products/_tempIMG/CentroMandoTapaMotor-removebg-preview.png",
  },
  {
    id: 6,
    fullname: "Sensor Security",
    price: 12.5,
    description: "Sensor Security",
    image: "/public/products/repuestos/IMG_20231012_154936.jpg",
  },
  {
    id: 7,
    fullname: "Siren Security",
    price: 35,
    description: "Siren Security",
    image: "/public/products/repuestos/IMG_20231012_154936.jpg",
  },
  {
    id: 8,
    fullname: "Sensor Security",
    price: 48,
    description: "Lighting Security",
    image: "/public/products/repuestos/IMG_20231012_154936.jpg",
  },
  {
    id: 9,
    fullname: "Camera Security",
    price: 350,
    description: "Camera Security",
    image: "/public/products/repuestos/IMG_20231012_154936.jpg",
  },
  {
    id: 10,
    fullname: "Sensor Security",
    price: 12.5,
    description: "Sensor Security",
    image: "/public/products/repuestos/IMG_20231012_154936.jpg",
  },
  {
    id: 11,
    fullname: "Siren Security",
    price: 35,
    description: "Siren Security",
    image: "/public/products/repuestos/IMG_20231012_154936.jpg",
  },
  {
    id: 12,
    fullname: "Sensor Security",
    price: 48,
    description: "Lighting Security",
    image: "/products/repuestos/IMG_20231012_154936.jpg",
  },
];

function Cards(numGRID: numGRID) {
  console.log(data);
  return (
    <section className="w-[90%] h-[720px] mx-auto bg-slate-300 flex justify-center items-center gap-7 flex-wrap pb-3">
      {data.slice(0, numGRID).map((item, index) => {
        return (
          <article
            key={item.id}
            className="w-[220px] min-h-[280px] mt-7 rounded-lg overflow-hidden bg-[#e1e3e5] text-black max-lg:w-[420px] "
          >
            <Image
              src={item.image}
              className="w-[180px] h-[180px] "
              alt={item.description}
              width={160}
              height={160}
            />
            <p className="mt-3 justify-center text-xs font-semibold text-center underline">
              {item.description}
            </p>
            <p className="mb-2 justify-center text-xs font-semibold text-center">
              {item.price}$
            </p>
          </article>
        );
      })}
    </section>
  );
}

export default Cards;
