'use client'
import { LinkItems } from '@/types/types.ts'
import Link from 'next/link'

export default function CTA ({linkUrl , linkName}: LinkItems) {
	return (
		<section className="w-full h-[220px] py-2 mb-5 bg-gradient-to-r from-yellow-500 via-blue-600 to-red-600 grid place-content-center gap-y-3 text-center">
			<p className="font-bold text-white uppercase">{linkName}</p>
			<Link href={linkUrl}
				className=" font-bold w-48 bg-[#25D366] text-white px-4 py-3 rounded-3xl text-lg hover:bg-black-700 transition-all duration-300 ease-in-out hover:underline hover:shadow-2xl"
			>
				{linkName}
			</Link>
		</section>
	)
}

