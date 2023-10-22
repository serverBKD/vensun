import Link from "next/link";
import Navbar from "@/components/Navbar.tsx";
import TriPack from "@/components/TriPack";

function page() {
  return (
    <section className="w-full h-screen bg-[#ccc]">
      <Navbar RenderHome={true} />
      <TriPack />
    </section>
  );
}

export default page;
