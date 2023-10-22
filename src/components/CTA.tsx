"use client";

function CTA() {
  return (
    <section className="w-full h-[120px] mb-5 bg-gradient-to-r from-yellow-500 via-blue-600 to-red-600 grid place-content-center">
      <button
        onClick={() => alert("te estamos llamando!")}
        className=" font-bold w-48 bg-[#25D366] text-white px-4 py-3 rounded-3xl text-lg hover:bg-black-700 transition-all duration-300 ease-in-out underline"
      >
        ¡Quiero saber más!
      </button>
    </section>
  );
}

export default CTA;
