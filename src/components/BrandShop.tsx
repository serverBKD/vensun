import React from 'react'
import Image from 'next/image'
import { CardHero } from '@/types/const.ts'
const { fullname, image } = CardHero

const BrandShopGrid = [0,1,2,3,4,5,6,7,8,9,10]
export default function BrandShop () {
    return (
        <section className='w-[90%] flex flex-wrap lg:flex-nowrap mx-auto px-3 transition ease-in-out delay-150 min-h-screen md:min-h-[720px]'>
            <article className='w-full lg:w-[70%] min-h-full rounded-sm border-4 border-sky-400 overflow-hidden bg-white mx-auto'>
                <Image
                    src={image}
                    alt={fullname}
                    width={480}
                    height={420}
                    style={{width:'100%',height:'100%' ,backgroundColor:'#fff',margin: 'auto',padding:'.5rem'}}
                />
            </article>
            <article className='w-full lg:min-w-[30%] h-auto grid grid-cols-3 grid-rows-2 grid-flow-row-dense bg-black text-white text-center'>
                {BrandShopGrid.slice(0, 6).map((index) => {
                    return (
                        <div key={index}>
                            <Image
                                src={image}
                                alt={fullname}
                                width={80}
                                height={80}
                                style={{width:'100%',height:'100%' ,backgroundColor:'#fff',margin: 'auto',padding:'.5rem'}}
                            />
                        </div>
                    )
                })}
            </article>
        </section>
    )
}
{/* //                <article className='w-full lg:min-w-[30%] h-auto grid grid-cols-3 grid-rows-2 grid-flow-row-dense bg-black text-white text-center'>
                    <div className='min-h-[3rem] hover:bg-slate-400'>
                        <Image
                            src={image}
                            alt={fullname}
                            width={480}
                            height={420}
                            style={{width:'100%',height:'100%' ,backgroundColor:'#fff',margin: 'auto',padding:'.5rem'}}
                        />
                    </div>
                </article> */}
// {/* <div className='hover:bg-slate-400'>2</div>
// <div className='hover:bg-slate-400'>3</div>
// <div className='hover:bg-slate-400'>4</div>
// <div className='hover:bg-slate-400'>5</div>
// <div className='hover:bg-slate-400'>6</div> */}
// {/* <div className='hover:bg-slate-400'>7</div>
// <div className='hover:bg-slate-400'>8</div>
// <div className='hover:bg-slate-400'>9</div>
// <div className='hover:bg-slate-400'>10</div>
// <div className='hover:bg-slate-400'>11</div>
// <div className='hover:bg-slate-400'>12</div> */}