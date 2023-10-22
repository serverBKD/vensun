import Hero from "@/components/Hero.tsx";
import Navbar from "@/components/Navbar.tsx";
import TriPack from "@/components/TriPack.tsx";
import CTA from "@/components/CTA.tsx";
import TwoBlock from "@/components/TwoBlock.tsx";
import Cards from "@/components/Cards.tsx";
import Title from "@/components/Title.jsx";
import WhatsappButton from "@/components/WhatsappButton.tsx";
import Footer from "@/components/Footer.tsx";
import BrandShop from "@/components/BrandShop.tsx";

import imgTB from "/public/placeholder_motos/tezo1850x1540.png";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-between scroll-smooth">
      <Hero />
      <Navbar />
      <Title Title="¡dime a donde vamos!" />
      <TriPack />
      <CTA />
      <TwoBlock
        TitleBlock="GranLeon"
        parrafBlock="Paseo tipo Chopper 200cc Doble tubo de escape"
        OrdenBlock="none"
        imgURL={imgTB}
        altIMG="gradLeon"
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
