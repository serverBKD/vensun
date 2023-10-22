import Link from "next/link";
import Image from "next/image";
import { Grid } from "@/types/types.tsx";
// import {Goldman_Regular, Goldman_Bold} from '@/fonts/fonts.jsx' ${Goldman_Regular.className}

const gridImg: Grid[] = [
  {
    imgURL: "/trifasic_img/paradox/DG85_Front_4k-removebg-preview.png",
    imgAlt: "DG85_Front_4k-removebg-preview.png",
    imgLink: "/",
  },
  {
    imgURL: "/trifasic_img/paradox/307USB_45degrees_4k-removebg-preview.png",
    imgAlt: "307USB_45degrees_4k-removebg-preview.png",
    imgLink: "/",
  },
  {
    imgURL: "/trifasic_img/paradox/RTX3_Front2-removebg-preview.png",
    imgAlt: "RTX3_Front2-removebg-preview.png",
    imgLink: "/",
  },
  {
    imgURL: "/trifasic_img/paradox/PGM4_Front_UHD-removebg-preview.png",
    imgAlt: "PGM4_Front_UHD-removebg-preview.png",
    imgLink: "/",
  },
  {
    imgURL: "/trifasic_img/DSC/HS2016-L-removebg-preview.png",
    imgAlt: "HS2016-L-removebg-preview.png",
    imgLink: "/",
  },
  {
    imgURL: "/trifasic_img/DSC/PC9155-removebg-preview.png",
    imgAlt: "PC9155-removebg-preview.png",
    imgLink: "/",
  },
];

function Grid({ numGRID: numGRID = 4 }) {
  return (
    <section
      className={`w-full flex justify-center items-center gap-5 overflow-hidden text-white px-3 py-5 text-sm font-extrabold italic md:mx-auto uppercase bg-black`}
    >
      {gridImg.slice(0, numGRID).map((img, index) => (
        <article
          key={index}
          className="bg-white min-w-[160px] min-h-[160px] max-h-[160px] grid place-items-center rounded-lg overflow-hidden"
        >
          <Link href={img.imgLink}>
            <Image
              src={img.imgURL}
              alt={img.imgAlt}
              width={160}
              height={160}
              style={{
                objectFit: "contain",
                objectPosition: "center center",
                flexBasis: 1,
              }}
            />
          </Link>
        </article>
      ))}
    </section>
  );
}

export default Grid;

// <article className="bg-orange-900 w-[160px] h-[160px] grid place-items-center"><Link href={'/'} className="tracking-widest">cerco</Link></article>
