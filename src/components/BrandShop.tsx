import React from 'react'
import Image from 'next/image'
import { CardHero } from '@/types/const.ts'
const { fullname, image } = CardHero

export default function BrandShop () {
    return (
        <section className='w-[90%]  flex flex-wrap lg:flex-nowrap mx-auto px-3 transition ease-in-out delay-150 min-h-screen md:min-h-[720px]'>
            <article className='w-full lg:w-[70%] min-h-full rounded-sm border-4 border-sky-400 overflow-hidden bg-white mx-auto'>
                <Image
                    src={image}
                    alt={fullname}
                    width={480}
                    height={420}
                    style={{width:'100%',height:'100%' ,backgroundColor:'#fff',margin: 'auto',padding:'.5rem'}}
                />
            </article>
            <article className='w-full lg:min-w-[30%] h-auto grid grid-cols-3 grid-rows-4 grid-flow-row-dense bg-black text-white text-center'>
                <div className=' hover:bg-emerald-400'>1</div>
                <div className='hover:bg-emerald-400'>2</div>
                <div className='hover:bg-emerald-400'>3</div>
                <div className='hover:bg-emerald-400'>4</div>
                <div className='hover:bg-emerald-400'>5</div>
                <div className='hover:bg-emerald-400'>6</div>
                <div className='hover:bg-emerald-400'>7</div>
                <div className='hover:bg-emerald-400'>8</div>
                <div className='hover:bg-emerald-400'>9</div>
                <div className='hover:bg-emerald-400'>10</div>
                <div className='hover:bg-emerald-400'>11</div>
                <div className='hover:bg-emerald-400'>12</div>

            </article>
        </section>
    )
}
