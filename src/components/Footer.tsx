import Link from "next/link";
import Image from "next/image";

import { FooterItems } from "@/types/const.ts";

function Footer() {
  return (
    <section className="w-full h-16 mt-3 mb-0 bg-[#345] flex justify-center items-center gap-x-3 text-white font-bold">
      <article>
        <Link href={"/tiendas"}>Address</Link>
      </article>
      <article>VENSUN | 2023</article>
      <article>
        <ul className="flex gap-x-3 text-white">
          {FooterItems.map((footer: any, index: any) => (
            <li key={index}>
              <Link href={footer.linkUrl}>
                <Image
                  src={footer.linkSrc}
                  alt={footer.linkName}
                  width={320}
                  height={220}
                  style={{ width: "32px", color: "whitesmoke" }}
                />
              </Link>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}

export default Footer;
