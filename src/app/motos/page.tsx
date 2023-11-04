import Navbar from '@/components/Navbar.tsx'
import TriPack from '@/components/TriPack.tsx'
import { TriPackData0 } from '@/types/const.ts'

export default function page () {
	return (
		<section className="w-full h-screen bg-[#ccc]">
			<Navbar />
			<TriPack _Card={TriPackData0}/>
		</section>
	)
}
