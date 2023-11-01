import { ZenDotsRegular } from "@/fonts/fonts.js";

export default function Title({ H1 }: any) {
  return (
    <section className="w-[90%] pl-7 py-3">
      <h1
        className={`${ZenDotsRegular.className} text-black text-xl uppercase font-bold text-start py-3`}
      >
        {H1}
      </h1>
    </section>
  );
}
