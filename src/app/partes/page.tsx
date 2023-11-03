// "use client";
import Title from "@/components/Title.tsx";
import Cards from "@/components/Cards.tsx";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import Image from "next/image";

async function getPartes() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
}

async function Page() {
  const Partes = await getPartes();
  return (
    <section className="w-full min-h-screen h-auto bg-gray-400">
      <Navbar RenderHome={true} />
      <Title H1="Partes y Repuestos" urlT1="/"/>
      <div className="w-[90%] mx-5 flex justify-center flex-wrap overflow-hidden">
        {Partes.map((item: any) => (
          <article
            key={item.id}
            className="max-w-[220px] max-h-[480px] h-auto mx-1 my-3 rounded-md overflow-hidden bg-cyan-500 text-white hover:max-h-[320px]"
          >
            <Image
              src={item.image}
              alt={item.description}
              width={220}
              height={80}
              style={{
                minHeight: "320px",
                maxHeight: "320px",
                minWidth: "220px",
                maxWidth: "100%",
                objectFit: "cover",
                padding: "2rem 1rem",
                backgroundColor: "#fff",
                borderBottom: ".2px solid #EBEBEB",
              }}
            />
            <p className="text-xs py-1 px-3 font-semibold ">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Page;
