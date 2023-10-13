import Image from "next/image";
import { Grid } from "@/types/types.tsx";

const galleryImg: Grid[] = [
  {
    imgURL: "/items/1_20230518_095105_0000.png",
    imgAlt: "1_20230518_095105_0000.png",
    imgLink: "/",
  },
  {
    imgURL: "/items/cjTaJtWT_1689047479.png",
    imgAlt: "307USB_45degrees_4k-removebg-preview.png",
    imgLink: "/",
  },
  {
    imgURL: "/items/zghLqrmY_1689047479.png",
    imgAlt: "RTX3_Front2-removebg-preview.png",
    imgLink: "/",
  },
  {
    imgURL: "/items/3_20230518_095105_0002.png",
    imgAlt: "PGM4_Front_UHD-removebg-preview.png",
    imgLink: "/",
  },
  {
    imgURL: "/items/CWx1wcbB_1689047479.png",
    imgAlt: "HS2016-L-removebg-preview.png",
    imgLink: "/",
  },
  {
    imgURL: "/items/MPxC5aIa_1689047479.png",
    imgAlt: "PC9155-removebg-preview.png",
    imgLink: "/",
  },
];

function Gallery() {
  return (
    <section className="w-full h-auto bg-black overflow-x-auto">
      <article className="text-center mx-35 font-bold mb-3">
        <h1>BRAND CONTEXT</h1>
      </article>
      <article className="w-full max-w-[1080px] h-[180px] mx-auto flex justify-center gap-x-5 overflow-x-hidden">
        {galleryImg.map((el, index) => (
          <picture
            key={index}
            className="w-[120px] h-[120px] bg-white overflow-hidden"
          >
            <Image
              src={el.imgURL}
              alt={el.imgAlt}
              width={120}
              height={120}
              style={{ width: "120px", height: "120px" }}
            />
          </picture>
        ))}
      </article>
    </section>
  );
}

export default Gallery;

// <picture key={index} className="w-[120px] h-[120px] bg-white overflow-hidden">
//   <Image
//     src={img.imgURL}
//     alt={img.imgAlt}
//     style={{ width: "120px", height: "120px" }}
//   />
// </picture>
