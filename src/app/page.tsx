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
import { TriPackData0 } from '@/types/const.ts'


export default function Home () {
	return (
		<main className="w-full min-h-screen flex flex-col items-center justify-between scroll-smooth">
			<Hero />
			<Navbar/>
			<Title linkName="¡dime a donde vamos!" linkUrl={'/motos'}/>
			<TriPack _Card={TriPackData0}/>
			<CTA linkName={'Escribenos al WhatsApp'} linkUrl={'/contacto'} linkSrc={'WSX'}/>
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
			<Title linkName="¡Partes y Repuestos!" linkUrl={'/partes'} />
			<Cards numGRID={4} />
			<Title linkName="¡compra ahora >!" linkUrl={'/contacto'} />
			{/* <!-- . TODO》 Link --> */}
			<CTA linkName={'¿LISTO PARA COMPRAR?'} linkUrl={'/partes'} linkSrc={'comprar'}/>
			<BrandShop />
			<Title linkName="¡dime a donde vamos!" linkUrl={'/motos'}/>
		</main>
	)
}
