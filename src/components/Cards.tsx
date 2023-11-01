import Image from 'next/image'
import { numGRID } from '@/types/types.ts'
import { DATACARD } from '@/types/const.ts'

export default function Cards({ numGRID: numGRID = 4 }) {
  const OFF = (X: number) => {
    const X0 = Number(DATACARD[3].price)
    let resOFF = (X0 * X) / 100
    console.log(X0 - resOFF)
    return resOFF.toFixed(2)
  }

  const xOFF = OFF(35)

  return (
    <section className='w-[90%] h-auto min-h-[720px] mx-auto flex justify-center items-center flex-wrap gap-x-3 pb-3 mb-5 bg-[#EBEBEB]'>
      {DATACARD.slice(0, numGRID).map((item) => {
        return (
          <article
            className='w-[320px] min-h-[380px] mt-7 rounded-lg overflow-hidden bg-white text-black max-lg:w-[420px]'
            key={item.id}
          >
            <Image
              src={item.image}
              // className="w-[180px] h-[180px] "
              alt={item.description}
              sizes='420px'
              width={420}
              height={280}
              style={{
                minHeight: '280px',
                minWidth: '320px',
                maxWidth: '100%',
                objectFit: 'cover',
                borderBottom: '.2px solid #EBEBEB',
              }}
            />
            <p className='mt-3 justify-center text-md font-semibold ml-2 mb-5'>
              {item.description}
            </p>
            {/* <!-- TODO: Descuento --> */}
            <p className=' ml-3 text-xs text-sky-400 line-through'>
              USD$ {item.price}
            </p>
            <p className='mb-2 ml-3 text-lg font-semibold inline-flex items-center gap-x-3'>
              USD$ {xOFF} <p className='text-xs text-sky-400'>35% OFF</p>
            </p>
            <p className='mb-2 justify-center text-2xs font-semibold ml-3 text-sky-400'>
              Envio gratis
            </p>
          </article>
        )
      })}
    </section>
  )
}
