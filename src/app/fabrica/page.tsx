import Navbar from "@/components/Navbar";

function page() {
  return (
    <section className="w-full min-h-screen">
      <Navbar RenderHome={true} />
      <h1>Fabricas de Motocicletas & Tractores</h1>
    </section>
  );
}

export default page;
