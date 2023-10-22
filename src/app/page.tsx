import Hero from "@/components/Hero.tsx";
import Navbar from "@/components/Navbar.tsx";
import TriPack from "@/components/TriPack.tsx";
import CTA from "@/components/CTA.tsx";
import TwoBlock from "@/components/TwoBlock.tsx";
import Cards from "@/components/Cards.tsx";
import Title from "@/components/Title.jsx";
import WhatsappButton from "@/components/WhatsappButton.tsx";
import BrandShop from "@/components/BrandShop.tsx";
import Footer from "@/components/Footer.tsx";
import notfound from "@/app/not-found.jsx";

import { imgTwoBlocks } from "@/types/const.ts";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-between scroll-smooth">
      <Hero />
      <Navbar RenderHome={false} />
      <Title Title="¡dime a donde vamos!" />
      <TriPack />
      <CTA />
      <TwoBlock
        fullname="Gran Leon GC200"
        description="Paseo tipo Chopper 200cc Doble tubo de escape"
        ordenBlock="none"
        alt="Paseo tipo Chopper 200cc Doble tubo de escape"
        image={imgTwoBlocks}
        width={320}
        height={220}
        colorBg="#2c2c2e"
        colorText="#fff"
      />
      <Title Title="¡Partes y Repuestos!" />
      <Cards numGRID={6} />
      <Cards numGRID={5} />
      <Cards numGRID={6} />
      <BrandShop />
      <WhatsappButton />
      <Footer />
    </main>
  );
}
