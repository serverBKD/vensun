import Link from "next/link";
import Image from "next/image";

import { FooterItems } from "@/types/const.ts";
import { LinkItems } from "@/types/types.ts";

export default function RedesSociales() {
  return (
      <section>
        <ul className="flex gap-x-3 text-white">
          {FooterItems.map((footer : LinkItems, index: any) => (
            <li key={index}>
              <Link href={footer.linkUrl}>
                <Image
                  src={footer.linkSrc}
                  alt={footer.linkName}
                  width={320}
                  height={220}
                  style={{ width: "48px", color: "whitesmoke" }}
                />
              </Link>
            </li>
          ))}
        </ul>
    </section>
  )
}
