'use client'
import Link from 'next/link'
import Image from 'next/image'
import { ZenDotsRegular } from '@/fonts/fonts.js'

function Hero () {
    return (
        <section
            className={`${ZenDotsRegular.className} w-full h-screen min-h-[100vh] flex items-center text-center relative overflow-hidden`}
        >
            <Image
                src="/hero/herovs.jpg"
                alt="hero"
                width={1080}
                height={780}
                style={{
                    zIndex: -1,
                    position: 'absolute',
                    minWidth: '100vw',
                    minHeight: '100vh'
                }}
            />
            <div className="max-w-[640px] flex flex-col px-8 py-4 rounded-xl gap-y-3 bg-[#00ffcc] text-white xs:mx-auto lg: mx-7">
                <h1 className="text-5xl font-extrabold ">VENSUN</h1>
                <p className="text-lg font-bold italic tracking-[.25rem]"
                >
          ¡dime a donde vamos!
                </p>
                <Link
                    href={'/motos'}
                    className="w-full py-3 text-2xl rounded-md text-center  text-white bg-sky-600 hover:underline hover:shadow-xl"
                >
          motos
                </Link>
            </div>
        </section>
    )
}

export default Hero
