import Link from 'next/link'
import { RenderHome } from '@/types/types.ts'
import { NavBarItems } from '@/types/const.ts'

const NAVBAR_ITEMS: number = NavBarItems.length

export default function Navbar( RenderHome : RenderHome) {
	return (
		<section className="w-full min-h-[50px] min-w-screen-sm grid place-items-center text-white font-bold py-3 text-xs md:text-base bg-gradient-to-r from-yellow-500 via-blue-600 to-red-600 ">
			<ul className="flex justify-between items-center space-x-3 uppercase ">
				{RenderHome && (
					<li>
						<Link href="/" className="underline hover:text-[#00FFCC]">
              Home
						</Link>
						<span>/</span>
					</li>
				)}
				{NavBarItems.slice(0, NAVBAR_ITEMS).map((nav, index) => (
					<li key={index}>
						<Link href={nav.linkUrl} className="underline hover:text-[#00FFCC]">
							{nav.linkName}
						</Link>
						<span className="invisible gap-x-4 lg:visible lg:gap-0 ">/</span>
					</li>
				))}
			</ul>
		</section>
	)
}
