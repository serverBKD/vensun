import Link from "next/link";

function page() {
  return (
    <section className="w-full h-screen bg-[#345] text-white p-10 font-bold flex flex-col">
      <article>
        <h1>Tractores</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
          consequuntur non magnam vero provident ad!
        </p>
        <p>page</p>
        <Link href={"/"}>HOME</Link>
      </article>
    </section>
  );
}

export default page;
