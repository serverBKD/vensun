import Link from "next/link";

function Navbar() {
  return (
    <section className="w-full min-h-[50px] grid place-items-center text-white font-bold bg-gradient-to-r from-yellow-500 via-blue-600 to-red-600 py-3 text-xs md:text-xl">
      <ul className="flex justify-between items-center space-x-3 uppercase ">
        <li>
          <Link href="/" className="underline hover:text-[#254c1c]">
            motos
          </Link>
        </li>
        <li>|</li>
        <li>
          <Link href="/" className="underline hover:text-[#254c1c]">
            repuestos
          </Link>
        </li>
        <li>|</li>
        <li>
          <Link href="/" className="underline hover:text-[#254c1c]">
            tractores
          </Link>
        </li>
        <li>|</li>
        <li>
          <Link href="/" className="underline hover:text-[#254c1c]">
            concesionarios
          </Link>
        </li>
        <li>|</li>
        <li>
          <Link href="/" className="underline hover:text-[#254c1c]">
            ensamblaje
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Navbar;
