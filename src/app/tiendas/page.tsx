import Navbar from '@/components/Navbar.tsx'
import TriPack from '@/components/TriPack.tsx'

export default function page () {
  return (
    <main className="w-full min-h-screen bg-slate-400 ">
      <Navbar RenderHome={true} />
      <h1>Concesionarios</h1>
      <TriPack />
    </main>
  )
}
