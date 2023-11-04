import Navbar from '@/components/Navbar.tsx'
import TriPack from '@/components/TriPack.tsx'
import Title from '@/components/Title.tsx'
import { TriPackData1 } from '@/types/const.ts'


export default function page () {
	return (
		<main className="w-full min-h-screen bg-slate-400 ">
			<Navbar RenderHome={true} />
			<Title T1={'Concesionarios'} urlT1={'/'}/>
			<TriPack Data={TriPackData1}/>
		</main>
	)
}
