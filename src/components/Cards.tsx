import Image from "next/image";
import { Card } from "../types/types.ts";

// const data: Data[] = [
//   {
//     id: 1,
//     fullname: "Camera Security",
//     price: 350,
//     description: "Camera Security",
//     image: "/trifasic_img/paradox/307USB_45degrees_4k-removebg-preview.png",
//   },
//   {
//     id: 2,
//     fullname: "Sensor Security",
//     price: 12.5,
//     description: "Sensor Security",
//     image: "/trifasic_img/paradox/DG85_Front_4k-removebg-preview.png",
//   },
//   {
//     id: 3,
//     fullname: "Siren Security",
//     price: 35,
//     description: "Siren Security",
//     image: "/trifasic_img/paradox/PGM4_Front_UHD-removebg-preview.png",
//   },
//   {
//     id: 4,
//     fullname: "Sensor Security",
//     price: 48,
//     description: "Lighting Security",
//     image: "/trifasic_img/paradox/HUB2_Front_4k-removebg-preview.png",
//   },
//   {
//     id: 5,
//     fullname: "Camera Security",
//     price: 350,
//     description: "Camera Security",
//     image: "/trifasic_img/paradox/RTX3_Front2-removebg-preview.png",
//   },
//   {
//     id: 6,
//     fullname: "Sensor Security",
//     price: 12.5,
//     description: "Sensor Security",
//     image: "/trifasic_img/paradox/K10H_Front-removebg-preview.png",
//   },
//   {
//     id: 7,
//     fullname: "Siren Security",
//     price: 35,
//     description: "Siren Security",
//     image: "/trifasic_img/paradox/EVO192_Front_4k-removebg-preview.png",
//   },
//   {
//     id: 8,
//     fullname: "Sensor Security",
//     price: 48,
//     description: "Lighting Security",
//     image: "/trifasic_img/paradox/RX1_New_Front_Big-removebg-preview.png",
//   },
//   {
//     id: 9,
//     fullname: "Camera Security",
//     price: 350,
//     description: "Camera Security",
//     image: "/trifasic_img/paradox/RTX3_Front2-removebg-preview.png",
//   },
//   {
//     id: 10,
//     fullname: "Sensor Security",
//     price: 12.5,
//     description: "Sensor Security",
//     image: "/trifasic_img/paradox/K10H_Front-removebg-preview.png",
//   },
//   {
//     id: 11,
//     fullname: "Siren Security",
//     price: 35,
//     description: "Siren Security",
//     image: "/trifasic_img/paradox/EVO192_Front_4k-removebg-preview.png",
//   },
//   {
//     id: 12,
//     fullname: "Sensor Security",
//     price: 48,
//     description: "Lighting Security",
//     image: "/trifasic_img/paradox/RX1_New_Front_Big-removebg-preview.png",
//   },
// ];

function Cards({ numGRID:number = 4, data:Card[]  }) {
  console.log(data);
  return (
    <section className="w-[90%] h-auto mx-auto bg-white flex justify-center items-center gap-7 flex-wrap pb-3">
      {/* {data.slice(0, numGRID).map((item, index) => {
        return (
          <article
            key={index || item.id}
            className="w-[220px] min-h-[280px] mt-7 rounded-lg overflow-hidden bg-[#e1e3e5] text-white max-lg:w-[420px] "
          >
            <Image
              src={item.image}
              layout="responsive"
              className="w-[180px] h-[180px] "
              alt={item.description}
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
              {item.description}
            </p>
            <p className="mb-2 justify-center text-xs font-semibold text-center">
              {item.price}$
            </p>
          </article>
        );
      })} */}
    </section>
  );
}

export default Cards;
