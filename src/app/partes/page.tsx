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
