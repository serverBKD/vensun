"use client";

function CTA() {
  return (
    <section className="w-full h-[120px] bg-black grid place-content-center">
      <button
        onClick={() => alert("te estamos llamando!")}
        className="bg-white text-black ring-2 ring-black font-bold  w-48 hover:bg-black-700 transition-all duration-300 ease-in-out  underline"
      >
        ¡Quiero saber más!
      </button>
    </section>
  );
}

export default CTA;
