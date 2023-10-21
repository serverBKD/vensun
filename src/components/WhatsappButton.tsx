import Link from "next/link";
import Image from "next/image";

import imgY from "/public/svg_brands/whatsapp.svg";
const W = "https://www.x.com/vensun_motos";

function WhatsappButton() {
  return (
    <div className="fixed w-20 h-20 text-red-900 rounded-full  bottom-6 right-2 ">
      <div className="w-150 h-150 rounded-full absolute bottom-6 right-2">
        <Link href={W}>
          <Image src={imgY} alt="1" />
        </Link>
      </div>
    </div>
  );
}

export default WhatsappButton;

//absolute bottom-6 right-2
