'use client'
import Link from 'next/link'
import Image from 'next/image'
import { ZenDotsRegular } from '@/fonts/fonts.js'

export default function Hero () {
    return (
        <section
            className={`${ZenDotsRegular.className} w-full h-screen min-h-[100vh] flex items-center text-center relative overflow-hidden`}
        >
            <Image
                src="/hero/herovs.jpg"
                alt="hero"
                width={1080}
                height={780}
                className='absolute z-1 w-screen h-screen object-cover'
                // style={{
                //     zIndex: -1,
                //     position: 'absolute',
                //     minWidth: '100vw',
                //     minHeight: '100vh'
                // }}

            />
            <article className="w-full lg:w-[70%]  md:-skew-x-6 h-full grid place-items-center bg-slate-600 skew-x-0 opacity-90">
                <div className='w-[60%] h-[30%] flex flex-col gap-y-10 md:skew-x-6 text-slate-200 font-bold'>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-wider">VENSUN</h1>
                    <p className="text-md md:text-2xl  tracking-[.25rem]">
                    ¡dime a donde vamos!
                    </p>
                    <Link href={'/motos'}
                        className="w-auto mx-auto p-3 text-2xl rounded-md text-center bg-slate-900 hover:underline hover:shadow-xl opacity-100">
                    comprar
                    </Link>
                </div>
            </article>
        </section>
    )
}
