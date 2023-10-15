import Link from "next/link";
import { Zen_Dots_Regular } from "@/fonts/fonts.jsx";
import { NavBarListItems } from "@/types/types.ts";

const NavBarListItem: NavBarListItems[] = [
  {
    linkName: "Home",
    linkUrl: "/",
  },
  {
    linkName: "Products",
    linkUrl: "/products",
  },
];

function Navbar() {
  return (
    <nav
      className={`${Zen_Dots_Regular.className} bg-[#25D366] w-full h-5 px-10 py-6 text-center flex justify-center items-center`}
    >
      <ul className="flex justify-center space-x-4 ">
        {NavBarListItem.map((items: NavBarListItems, index: number) => (
          <li key={index}>
            <Link
              href={items.linkUrl}
              className="underline text-2xl italic font-extrabold tracking-widest"
            >
              {items.linkName}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
