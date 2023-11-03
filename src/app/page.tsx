import Hero from '@/components/Hero.tsx'
import Navbar from '@/components/Navbar.tsx'
import TriPack from '@/components/TriPack.tsx'
import CTA from '@/components/CTA.tsx'
import TwoBlock from '@/components/TwoBlock.tsx'
import Cards from '@/components/Cards.tsx'
import Title from '@/components/Title.tsx'
import BrandShop from '@/components/BrandShop.tsx'

//. Props
import { imgTwoBlocks } from '@/types/const.ts'
import { TriPackData } from '@/types/const.ts'
//. console.log({ TriPackData })

export default function Home () {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-between scroll-smooth">
      <Hero />
      <Navbar RenderHome={false} />
      <Title T1="¡dime a donde vamos!" urlT1={"/motos"}/>
      <TriPack Data={TriPackData}/>
      <CTA />
      <TwoBlock
        fullname="Gran Leon GC200"
        description="Paseo tipo Chopper 200cc Doble tubo de escape"
        ordenBlock="none"
        alt="Paseo tipo Chopper 200cc Doble tubo de escape"
        image={imgTwoBlocks}
        width={500}
        height={660}
        colorBg="#2c2c2e"
        colorText="#fff"
      />
      <Title T1="¡Partes y Repuestos!" urlT1={"/partes"} />
      <Cards numGRID={4} />
      <BrandShop />
    </main>
  )
}
