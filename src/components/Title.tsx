import Link from 'next/link'
import { ZenDotsRegular } from '@/fonts/fonts.js'
import { basicString } from '@/types/types.ts'

export default function Title( T1: string , urlT1 : basicString  ) {
	return (
		<section className="w-[90%] pl-7 pt-3 pb-1" >
			<h1
				className={`${ZenDotsRegular.className} text-black text-xl uppercase font-bold text-start py-3`}
			>
				<Link href={urlT1}>{T1}</Link>
			</h1>
		</section>
	)
}
