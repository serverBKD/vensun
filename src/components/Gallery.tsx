import Image from "next/image";
import { galleryImg } from "@/types/types.tsx";

function Gallery() {
  return (
    <section className="w-full h-auto bg-black overflow-x-auto">
      <article className="text-center mx-35 font-bold mb-3">
        <h1>BRAND CONTEXT</h1>
      </article>
      <article className="w-full max-w-[1080px] h-[180px] mx-auto flex justify-center gap-x-5 overflow-x-hidden">
        {galleryImg.map((el: any, index: any) => (
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
