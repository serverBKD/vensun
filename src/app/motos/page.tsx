import Navbar from '@/components/Navbar.tsx'
import TriPack from '@/components/TriPack.tsx'

export default function page () {
  return (
    <section className="w-full h-screen bg-[#ccc]">
      <Navbar RenderHome={true} />
      <TriPack />
    </section>
  )
}
