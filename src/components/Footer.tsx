import Link from "next/link";
import Image from "next/image";

const add0 = "Valencia-Venezuela";
const youtube = "https://www.youtube.com/vensun_motos";
const X = "https://www.x.com/vensun_motos";
const Instagram = "https://www.instagram.com/vensun_motos";

import imgI from "/public/svg_brands/instagram.svg";
import imgX from "/public/svg_brands/facebook.svg";
import imgY from "/public/svg_brands/whatsapp.svg";

function Footer() {
  return (
    <section className="w-full h-16 mt-3 mb-0 bg-blue-700 flex justify-center items-center gap-x-3 text-white font-bold">
      <article>
        <Link href={add0}>Address</Link>
      </article>
      <article>VENSUN | 2023</article>
      <article>
        <ul className="flex gap-x-3 text-white">
          <li>
            <Link href={youtube}>
              <Image
                src={imgY}
                alt="vensun_motos"
                style={{ width: "32px", color: "whitesmoke" }}
              />
            </Link>
          </li>
          <li>
            <Link href={X}>
              <Image src={imgX} alt="vensun_motos" style={{ width: "32px" }} />
            </Link>
          </li>
          <li>
            <Link href={Instagram}>
              <Image src={imgI} alt="vensun_motos" style={{ width: "32px" }} />
            </Link>
          </li>
        </ul>
      </article>
    </section>
  );
}

export default Footer;
