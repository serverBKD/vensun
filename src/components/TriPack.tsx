import Image from 'next/image'
import Link from 'next/link'
import { Card } from '@/types/types.ts'

function TriPack({ _Card } : {_Card:Array<Card>} ) : JSX.Element 	{
    return (
        <section className="w-full h-full min-h-screen flex justify-center items-center flex-wrap gap-x-5 my-3">
            {_Card.map((_card ) : JSX.Element => {
                return (
                    <article className="min-w-[420px] min-h-max basis-2 shadow-2xl border-4 border-slate-100 rounded-sm mb-5" key={_card.id}>
                        <Image
                            src={_card.image}
                            alt={_card.description}
                            width={_card.width}
                            height={_card.height}
                            style={{width: '100%', minWidth: '420px',minHeight: '420px'  , flexBasis: 0}}
                        />
                        <h2 className="font-bold py-2 pl-3 uppercase text-lg">
                            {_card.fullname}
                        </h2>
                        <p className="w-[380px] text-justify px-1">{_card.description}</p>
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
