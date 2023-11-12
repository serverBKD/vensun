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
        <section className="w-[70%] h-[60%] mt-3 mx-auto flex justify-center items-center flex-wrap shadow-2xl shadow-slate-600 ">
            <article
                className={`${ordenBlock} w-full   md:w-[60%] overflow-hidden grid place-items-center`}
            >
                <Image
                    src={image}
                    alt={description}
                    width={width}
                    height={height}
                    quality={100}
                    className='w-[80%] max-h-[480px] object-contain shadow-inner'
                />
            </article>
            <article
                className={`${colorBg} w-full md:w-[40%] h-full bg-slate-600 text-white shadow-cyan-500/50 skew-x-4`}
            >
                <div className="w-full p-3 gap-y-5 flex flex-col">
                    <h1 className="font-bold text-2xl">
            Modelo: {fullname}
                    </h1>
                    <p className="text-justify ">{description}</p>
                    <Link href={'/'} className="text-md font-bold hover:underline hover:shadow-2xl"
                    >
            | Detalles técnicos |
                    </Link>
                </div>
            </article>
        </section>
    )
}

export default TwoBlock
