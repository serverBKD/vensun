import Navbar from "@/components/Navbar";
import TwoBlock from "@/components/TwoBlock.tsx";
import { imgTwoBlocks } from "@/types/const.ts";

function page() {
  return (
    <section className="w-full h-screen ">
      <Navbar RenderHome={false} />
      <h1>Tractores</h1>
      <TwoBlock
        fullname="Gran Leon GC200"
        description="Paseo tipo Chopper 200cc Doble tubo de escape"
        ordenBlock="none"
        alt="Paseo tipo Chopper 200cc Doble tubo de escape"
        image={imgTwoBlocks}
        width={320}
        height={620}
        colorBg="#2c2c2e"
        colorText="#fff"
      />
    </section>
  );
}

export default page;
