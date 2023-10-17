import Link from "next/link";
function WhatsappButton() {
  return (
    <div className="fixed w-20 h-20 text-red-900 bg-[#25D366] rounded-full  bottom-6 right-2 ">
      <div className="w-150 h-150 bg-white rounded-full absolute bottom-6 right-2">
        <div>
          <Link href="#">WhatsApp</Link>
        </div>
      </div>
    </div>
  );
}

export default WhatsappButton;

//absolute bottom-6 right-2
