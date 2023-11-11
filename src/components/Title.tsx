import Link from 'next/link'
import { ZenDotsRegular } from '@/fonts/fonts.js'
import { LinkItems } from '@/types/types.ts'

export default function Title( {linkUrl , linkName}: LinkItems ) {
    return (
        <section className="w-[90%] pl-7 pt-3 pb-1" >
            <h1
                className={`${ZenDotsRegular.className} text-black text-xl uppercase font-bold text-start py-3`}
            >
                <Link href={linkUrl}>{linkName}</Link>
            </h1>
        </section>
    )
}
