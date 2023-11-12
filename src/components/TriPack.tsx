import Image from 'next/image'
import Link from 'next/link'
import { Card } from '@/types/types.ts'

function TriPack({ _Card } : {_Card:Array<Card>} ) : JSX.Element 	{
    return (
        <section className="w-full h-auto  flex justify-center items-center flex-wrap gap-5 py-3 ">
            {_Card.map((_card ) : JSX.Element => {
                return (
                    <article className="w-[320px] h-[520px] min-h-max shadow-2xl rounded-md overflow-hidden" key={_card.id}>
                        <Image
                            src={_card.image}
                            alt={_card.description}
                            width={_card.width}
                            height={_card.height}
                            className='w-full min-w-[420px] h-[320px] object-cover'
                        />
                        <h2 className="font-bold py-2 pl-2 uppercase text-lg">
                            {_card.fullname}
                        </h2>
                        <p className="w-full max-h-20 text-justify px-1">{_card.description}</p>
                        <h3 className="font-bold py-2 px-5">
                            {/* <!-- TODO emoji o svg --> */}
                            <Link href={'_card.url'}>mas info {'->'} </Link>
                        </h3>
                    </article>
                )
            })}
        </section>
    )
}

export default TriPack
