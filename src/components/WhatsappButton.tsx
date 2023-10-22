import Link from "next/link";
import Image from "next/image";
import { LinkItems } from "@/types/types.ts";

const WhatsappButtonItems: LinkItems | any = {
  linkName: "WhatsApp",
  linkUrl: "api.whatsapp.com",
  linkSrc: "/items/whatsapp.svg",
};

function WhatsappButton(): any {
  return (
    <div className="fixed w-20 h-20 text-red-900 rounded-full  bottom-6 right-2 ">
      <div className="w-150 h-150 rounded-full absolute bottom-6 right-2">
        <Link href={WhatsappButtonItems.linkUrl}>
          <Image
            src={WhatsappButtonItems.linkSrc}
            alt={WhatsappButtonItems.linkName}
            width={150}
            height={150}
            quality={100}
          />
        </Link>
      </div>
    </div>
  );
}

export default WhatsappButton;
