import Link from "next/link";
import { RenderHome } from "@/types/types.ts";

function Navbar({ RenderHome = false }: RenderHome) {
  return (
    <section className="w-full min-h-[50px] grid place-items-center text-white font-bold bg-gradient-to-r from-yellow-500 via-blue-600 to-red-600 py-3 text-xs md:text-xl">
      <ul className="flex justify-between items-center space-x-3 uppercase ">
        {RenderHome && (
          <li>
            <Link href="/" className="underline hover:text-[#00FFCC]">
              Home
            </Link>
          </li>
        )}
        {!RenderHome && (
          <li>
            <Link href="/motos" className="underline hover:text-[#00FFCC]">
              motos
            </Link>
          </li>
        )}
        <li>|</li>
        <li>
          <Link href="/partes" className="underline hover:text-[#00FFCC]">
            repuestos
          </Link>
        </li>
        <li>|</li>
        <li>
          <Link href="/tractor" className="underline hover:text-[#00FFCC]">
            tractores
          </Link>
        </li>
        <li>|</li>
        <li>
          <Link href="/tiendas" className="underline hover:text-[#00FFCC]">
            concesionarios
          </Link>
        </li>
        <li>|</li>
        <li>
          <Link href="/fabrica" className="underline hover:text-[#00FFCC]">
            ensamblaje
          </Link>
        </li>
        <li>|</li>
        <li>
          <Link href="/compras" className="underline hover:text-[#00FFCC]">
            Comprar
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Navbar;
