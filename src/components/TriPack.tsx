import Image from 'next/image'
import Link from 'next/link'
import { TriPackData } from '@/types/const.ts'

function TriPack () {
  return (
    <section className="w-full min-h-[680px] flex justify-center items-center flex-wrap gap-3">
      {TriPackData.map((card) => {
        return (
          <article className="min-w-[420px] basis-1" key={card.id}>
            <Image
              src={card.image}
              alt={'TriPackData.description'}
              width={card.width}
              height={card.height}
              className="w-[380px] h-[380px]"
            />
            <h2 className="font-bold py-2 uppercase text-lg">
              {card.fullname}
            </h2>
            <p className="w-[380px] text-justify">{card.description}</p>
            <h3 className="font-bold py-2">
              {/* <!-- TODO --> */}
              <Link href={'card.url'}>mas info {'->'} </Link>
            </h3>
          </article>
        )
      })}
    </section>
  )
}

export default TriPack
