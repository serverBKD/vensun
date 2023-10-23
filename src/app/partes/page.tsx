// "use client";
import Title from "@/components/Title.tsx";
import Cards from "@/components/Cards.tsx";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";

async function getPartes() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
}

async function Page() {
  const Partes = await getPartes();
  console.log(Partes);
  return (
    <section className="w-full h-screen">
      <Navbar RenderHome={false} />
      <Title H1="Partes y Repuestos" />
      <Cards numGRID={6} data={Partes} />
    </section>
  );
}

export default Page;
// {
//   /* <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
//   <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
//     Cyan to blue
//   </span>
// </button>; */
// }
