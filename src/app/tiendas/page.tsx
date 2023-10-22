import TriPack from "@/components/TriPack";
import Link from "next/link";

function page() {
  return (
    <main className="w-full h-screen bg-slate-400 ">
      <h1>Concesionarioxs</h1>
      <Link href={"/"}>HOME</Link>
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
