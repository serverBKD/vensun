import Link from 'next/link'
import { NavBarItems } from '@/types/const.ts'

const NAVBAR_ITEMS: number = NavBarItems.length

export default function Navbar() {
    return (
        <section className="w-full min-h-[50px] min-w-screen-sm grid place-items-center text-white font-bold py-3 text-xs md:text-base bg-violet-600 ">
            <ul className="flex justify-between items-center space-x-3 uppercase ">
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
