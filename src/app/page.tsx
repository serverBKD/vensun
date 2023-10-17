import Hero from "@/components/Hero.tsx";
import Navbar from "@/components/Navbar.tsx";
import TriPack from "@/components/TriPack.tsx";
import CTA from "@/components/CTA";
import TwoBlock from "@/components/TwoBlock";
import Title from "@/components/Title";
import imgTB from "/public/placeholder_motos/tezo1850x1540.png";
import WhatsappButton from "@/components/WhatsappButton.tsx";
import Footer from "@/components/Footer";

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
      <WhatsappButton />
      <Footer />
    </main>
  );
}
