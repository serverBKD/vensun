import Navbar from "@/components/Navbar";
import TriPack from "@/components/TriPack";

function page() {
  return (
    <main className="w-full min-h-screen bg-slate-400 ">
      <Navbar RenderHome={true} />
      <h1>Concesionarioxs</h1>
      <TriPack />
    </main>
  );
}

export default page;

// <ul>
//   <li>Valencia</li>
//   <li>Coro</li>
//   <li>Punto Fijo</li>
//   <li>Nirgua</li>
//   <li>Maracay</li>
// </ul>;
