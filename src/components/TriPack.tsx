import Image from 'next/image'
import Link from 'next/link'
import { Card } from '@/types/types.ts'
import { ReactNode } from 'react'

function TriPack({ Data }: ReactNode<Array> | Card[]) {
  console.log(Data)
  return (
    <section className="w-full min-h-[680px] flex justify-center items-center flex-wrap gap-3">
      {Data.map((card:Card) => {
        return (
          <article className="min-w-[420px] basis-1 shadow-2xl mx-2" key={card.id}>
            <Image
              src={card.image}
              alt={card.description}
              width={card.width}
              height={card.height}
              className="w-[380px] h-[380px]"
            />
            <h2 className="font-bold py-2 pl-3 uppercase text-lg">
              {card.fullname}
            </h2>
            <p className="w-[380px] text-justify px-1">{card.description}</p>
            <h3 className="font-bold py-2 px-5">
              {/* <!-- TODO emoji o svg --> */}
              <Link href={card.url}>mas info {'->'} </Link>
            </h3>
          </article>
        )
      })}
    </section>
  )
}

export default TriPack
