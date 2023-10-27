import Hero from "@/components/Hero.tsx";
import Navbar from "@/components/Navbar.tsx";
import TriPack from "@/components/TriPack.tsx";
import CTA from "@/components/CTA.tsx";
import TwoBlock from "@/components/TwoBlock.tsx";
import Cards from "@/components/Cards.tsx";
import Title from "@/components/Title.tsx";
import BrandShop from "@/components/BrandShop.tsx";

import { imgTwoBlocks } from "@/types/const.ts";
import GridCard from "@/components/GridCard";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-between scroll-smooth">
      <Hero />
      <Navbar RenderHome={false} />
      <GridCard />
      <Title H1="¡dime a donde vamos!" />
      <TriPack />
      <CTA />
      <TwoBlock
        fullname="Gran Leon GC200"
        description="Paseo tipo Chopper 200cc Doble tubo de escape"
        ordenBlock="none"
        alt="Paseo tipo Chopper 200cc Doble tubo de escape"
        image={imgTwoBlocks}
        width={500 / 10}
        height={660 / 10}
        colorBg="#2c2c2e"
        colorText="#fff"
      />
      <Title H1="¡Partes y Repuestos!" />
      {/* <Cards numGRID={6} />
      <Cards numGRID={5} />
      <Cards numGRID={6} /> */}
      <BrandShop />
    </main>
  );
}
