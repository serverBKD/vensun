import Image from "next/image";
import Link from "next/link";
import img0 from "/public/test.jpg";
import img1 from "/public/part-finder-img.png";
import img2 from "/public/motoBikes.jpg";

const Pa1: string = "lorem smksknks";
const H1: string = "MOTOS";

function TriPack(): any {
  return (
    <section className="w-[90%] h-auto my-7 flex flex-wrap ">
      <section className="w-full h-auto flex justify-center items-center flex-wrap gap-3">
        <article className="min-w-[420px]  gap-3">
          <Image
            src={img0}
            alt="logo"
            width={320}
            height={220}
            layout="fixed"
            quality={100}
            objectFit="contain"
            objectPosition="center"
            className="w-[380px] h-[380px]"
          />
          <h2 className="font-bold py-2 uppercase text-lg">{H1}</h2>
          <p className="w-[380px] text-justify">{Pa1}</p>
          <h3 className="font-bold py-2">
            <Link href="#">mas info {"->"} </Link>
          </h3>
        </article>
        <article className="min-w-[420px]">
          <Image
            src={img1}
            alt="logo"
            width={320}
            height={220}
            layout="fixed"
            quality={100}
            objectFit="contain"
            objectPosition="center"
            className="w-[380px] h-[380px]"
          />
          <h2 className="font-bold py-2 uppercase text-lg">
            Partes & Garantias
          </h2>
          <p className="w-[380px] text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In maiores
            error consequatur maxime minus nostrum minima provident quo
            recusandae possimus!
          </p>
          <h3 className="font-bold py-2">
            <Link href="#">mas info {"->"} </Link>
          </h3>
        </article>
        <article className="min-w-[420px]">
          <Image
            src={img2}
            alt="logo"
            width={320}
            height={220}
            layout="fixed"
            quality={100}
            objectFit="contain"
            objectPosition="center"
            className="w-[380px] h-[380px]"
          />
          <h2 className="font-bold py-2 uppercase text-lg">concesionarios</h2>
          <p className="w-[380px] text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In maiores
            error consequatur maxime minus nostrum minima provident quo
            recusandae possimus!
          </p>
          <h3 className="font-bold py-2">
            <Link href="#">mas info {"->"} </Link>
          </h3>
        </article>
      </section>
    </section>
  );
}

export default TriPack;
