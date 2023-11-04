'use client'
import Image from 'next/image'
import Link from 'next/link'
import { CardTwoBlock } from '@/types/types.tsx'

function TwoBlock({
	fullname,
	description,
	ordenBlock,
	width,
	height,
	image,
	colorBg,
}: CardTwoBlock) {
	return (
		<section className="w-[90%] min-h-[120px] mx-auto flex justify-center items-center flex-wrap shadow-2xl ">
			<article
				className={`${ordenBlock} w-full max-h-{height} overflow-hidden md:w-[60%] bg-white  `}
			>
				<Image
					src={image}
					alt={description}
					width={width}
					height={height}
					quality={100}
					style={{width: '100%',maxHeight:'calc(100vh - 5rem)',margin:'0 auto',padding:'0', textAlign: 'center',  objectFit: 'contain'}}
				/>
			</article>
			<article
				className={`${colorBg} w-full md:w-[40%] h-screen max-h-{height} hidden md:flex justify-center items-center bg-zinc-300 shadow-cyan-500/50 skew-x-6`}
			>
				<div className="text-[#00CCFF] gap-y-5 flex flex-col mx-4 px-3">
					<h1 className="font-bold text-2xl">
            Modelo: {fullname}
					</h1>
					<p className="text-justify ">{description}</p>
					<Link href={'/'} className="w-full block text-lg font-bold hover:underline hover:shadow-2xl hover:text-center"
					>
            | Detalles técnicos |
					</Link>
				</div>
			</article>
		</section>
	)
}

export default TwoBlock
