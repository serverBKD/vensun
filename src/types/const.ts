import { Card, Imagen, LinkItems} from "@/types/types.ts";

//. NavBar

export const NavBarTxt = [
  {
    linkName: "producto",
    linkUrl: "/productos",
  },
  {
    linkName: "contacto",
    linkUrl: "/contacto",
  },
];

//. NavBar Productos

export const NavBarTxtProductos = [
  {
    linkName: "home",
    linkUrl: "/",
  },
  {
    linkName: "contacto",
    linkUrl: "/contacto",
  },
];

//. Props TwoBlocks


//. TriPackData

export const TriPackData: Card[] = [
  {
    id: 0,
    fullname: "Moto Venezolana",
    description:
      "lorem ipsum de concesionario de motos 200cc Moto de Paseo Fabricacion Venezolana",
    image: "/products/motos/motosplaceholdervensun.png",
    url: "/motos",
    width: 320,
    height: 220
  },
  {
    id: 1,
    fullname: "Partes & Garantias",
    description:
      "lerror consequatur maxime minus nostrum minima provident quo recusandae",
    image: "/hero/part-finder-img.png",
    url: "/partes",
    width: 320,
    height: 220
  },
  {
    id: 2,
    fullname: "concesionarios",
    description:
      "error consequatur maxime minus nostrum minima provident quo recusandae",
    image: "/hero/motoBikes.jpg",
    url: "/tiendas",
    width: 320,
    height: 220
  },
];

//. TwoBlocks

//. Gallery

export const galleryImg: Imagen[] = [
  {
    image: "/items/1_20230518_095105_0000.png",
    alt: "1_20230518_095105_0000.png",
    url: "/",
    width: 320,
    height: 220
  },
  {
    image: "/items/cjTaJtWT_1689047479.png",
    alt: "307USB_45degrees_4k-removebg-preview.png",
    url: "/",
    width: 320,
    height: 220
  },
  {
    image: "/items/zghLqrmY_1689047479.png",
    alt: "RTX3_Front2-removebg-preview.png",
    url: "/",
    width: 320,
    height: 220
  },
  {
    image: "/items/3_20230518_095105_0002.png",
    alt: "PGM4_Front_UHD-removebg-preview.png",
    url: "/",
    width: 320,
    height: 220
  },
  {
    image: "/items/CWx1wcbB_1689047479.png",
    alt: "HS2016-L-removebg-preview.png",
    url: "/",
    width: 320,
    height: 220
  },
  {
    image: "/items/MPxC5aIa_1689047479.png",
    alt: "PC9155-removebg-preview.png",
    url: "/",
    width: 320,
    height: 220
  },
];

//. Navbar

export const NavBarItems: LinkItems[] = [
    {
    linkSrc: "/",
    linkName: 'motos',
    linkUrl: "/motos"
  },
      {
    linkSrc: "/",
    linkName: 'partes',
    linkUrl: "/partes"
  },
        {
    linkSrc: "/",
    linkName: 'Concesionarios',
    linkUrl: "/tiendas"
  },
    {
    linkSrc: "/",
    linkName: 'ensamblaje',
    linkUrl: "/fabrica"
  },
      {
    linkSrc: "/",
    linkName: 'tractor',
    linkUrl: "/tractor"
  },
   {
    linkSrc: "/",
    linkName: 'compras',
    linkUrl: "/compras"
  }, 
]

      // <ul className="flex justify-between items-center space-x-3 uppercase ">
      //   {RenderHome && (
      //     <li>
      //       <Link href="/" className="underline hover:text-[#00FFCC]">
      //         Home
      //       </Link>
      //     </li>
      //   )}
      //   {!RenderHome && (
      //     <li>
      //       <Link href="/motos" className="underline hover:text-[#00FFCC]">
      //         motos
      //       </Link>
      //     </li>
      //   )}
      //   <li>|</li>
      //   <li>
      //     <Link href="/partes" className="underline hover:text-[#00FFCC]">
      //       repuestos
      //     </Link>
      //   </li>
      //   <li>|</li>
      //   <li>
      //     <Link href="/tractor" className="underline hover:text-[#00FFCC]">
      //       tractores
      //     </Link>
      //   </li>
      //   <li>|</li>
      //   <li>
      //     <Link href="/tiendas" className="underline hover:text-[#00FFCC]">
      //       concesionarios
      //     </Link>
      //   </li>
      //   <li>|</li>
      //   <li>
      //     <Link href="/fabrica" className="underline hover:text-[#00FFCC]">
      //       ensamblaje
      //     </Link>
      //   </li>
      //   <li>|</li>
      //   <li>
      //     <Link href="/compras" className="underline hover:text-[#00FFCC]">
      //       Comprar
      //     </Link>
      //   </li>
      // </ul>

//. Footer


export const FooterItems:LinkItems[] = [
  {
    linkSrc: "/items/instagram.svg",
    linkUrl: "https://www.instagram.com/vensun_motos/",
    linkName: 'img_Instagram'
  },
    {
    linkSrc: "/items/facebook.svg",
    linkUrl: "https://www.x.com/vensun_motos/",
    linkName: 'img_X'
  },
  {
    linkSrc: "/items/whatsapp.svg",
    linkUrl: "https://www.youtube.com/vensun_motos/",
    linkName: 'img_Youtube'
  },
  {
    linkSrc: '/items/arrow-up-s-line.svg',
    linkUrl: '#top',
    linkName: 'img_Top'
  }
]

export const imgTwoBlocks = "/products/placeholder_motos/azul-1-500x660.png"; 