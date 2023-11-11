import React from 'react'
import Image from 'next/image'
import { DATACARD } from '@/types/const.ts'

export default function CardBlocks({ numGRID: numGRID = 4 }) {
    return (
        <section className='w-full h-auto px-7 gap-x-7 bg-slate-600 flex items-center justify-center flex-wrap'>
            {DATACARD.slice(0, numGRID).map((item) => {
                return (
                    <article
                        className='max-w-[180px] h-[180px] my-5 rounded-lg overflow-hidden bg-white text-black shadow-lg hover:shadow-2xl max-lg:w-[420px] relative'
                        key={item.id}
                    >
                        <Image
                            src={item.image}
                            // className="w-[180px] h-[180px] "
                            alt={item.description}
                            width={180}
                            height={180}
                            style={{
                                minHeight: '180px',
                                minWidth: '180px',
                                maxWidth: '100%',
                                objectFit: 'contain',
                                objectPosition: 'center center',
                                borderBottom: '.2px solid #EBEBEB',
                                zIndex: '100',
                            }}
                        />
                        <div className='text-indigo-600 opacity-0 hover:opacity-100 bg-black'>
                            <p className='w-full h-full bg-slate-90   pl-3 justify-center text-md font-semibold z-10 absolute bottom-0 left-0  '>
                                {item.description}
                            </p>
                            <p className='mb-2 justify-center text-2xs font-bold ml-3 text-slate-900 absolute top-10 left-0'>
                                Envio gratis
                            </p>
                        </div>
                    </article>
                )
            })}
        </section>
    )
}
