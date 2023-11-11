import Navbar from '@/components/Navbar.tsx'
import TriPack from '@/components/TriPack.tsx'
import Title from '@/components/Title.tsx'
import { TriPackData1 } from '@/types/const.ts'


export default function page () {
    return (
        <main className="w-full min-h-screen bg-slate-400 ">
            <Navbar/>
            <Title linkName={'Concesionarios'} linkUrl={'/'}/>
            <TriPack _Card={TriPackData1}/>
        </main>
    )
}
