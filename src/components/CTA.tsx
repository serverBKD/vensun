"use client";

function CTA() {
  return (
    <section className="w-full h-[120px] bg-gradient-to-r from-yellow-500 via-blue-600 to-red-600 grid place-content-center -skew-y-3">
      <button
        onClick={() => alert("te estamos llamando!")}
        className=" font-bold w-48 rounded-sm bg-[#25D366] text-white px-4 py-6 hover:bg-black-700 transition-all duration-300 ease-in-out underline"
      >
        ¡Quiero saber más!
      </button>
    </section>
  );
}

export default CTA;
