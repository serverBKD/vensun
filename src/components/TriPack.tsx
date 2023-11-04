import Image from 'next/image'
import Link from 'next/link'
import { Card } from '@/types/types.ts'

function TriPack({ Data }: Card | any ) {
  return (
    <section className="w-full h-full min-h-screen flex justify-center items-center flex-wrap gap-x-3 pb-2">
      {Data.map((card:Card) => {
        return (
          <article className="min-w-[420px] min-h-max max-h-480px basis-4 shadow-2xl " key={card.id}>
            <Image
              src={card.image}
              alt={card.description}
              width={card.width}
              height={card.height}
              style={{width: "100%", minWidth: "420px",minHeight: "420px"  , flexBasis: 0}}
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
