import Image from "next/image";
import Link from "next/link";
import img0 from "/public/products/placeholder_motos/azul-1-500x660.png";

function BrandShop() {
  return (
    <section className="w-full h-[640px] px-5 flex justify-center items-center flex-wrap md:w-[60%] md:mx-auto bg-[#F6F6F6]">
      <article className="w-[60%] min-h-[480px] md:basis-1/2 rounded-sm border-4 border-slate-400 overflow-hidden bg-white">
        <Image
          src={img0}
          alt="product16"
          width={480}
          height={480}
          style={{
            objectFit: "contain",
            objectPosition: "center center",
            width: "480px",
            height: "420px",
            padding: ".5rem 0",
          }}
          // fill={true}
          // loader={imageLoader}
        />
      </article>
      <article className="w-[40%] min-h-[480px] md:basis-1/2 text-black text-center font-bold grid grid-flow-row">
        <div>
          <p>Lorem, ipsum dolor.</p>
        </div>
        <div>
          <p>Price: $100</p>
        </div>
        <div>
          <p>Hello Mundius</p>
        </div>
        {/* <!--Selectors --> */}
        <div className="w-[80%] h-fit text-start text-black flex justify-center mx-auto">
          <div className="grid">
            <label htmlFor="color">Color</label>
            <select
              name="color"
              id="color"
              className="w-full bg-white-600 text-black rounded-sm mx-1 border-4"
            >
              <option value="Blue">Blue</option>
              <option value="Black">Black</option>
              <option value="Browm">Browm</option>
            </select>
          </div>
          <div className="grid gap-0">
            <label htmlFor="size" className="offset-x-2">
              Size
            </label>
            <select
              name="size"
              id="size"
              className="w-full bg-white-600 text-black rounded-sm mx-1 border-4 "
            >
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
              <option value="XXXL">XXXL</option>
              <option value="4XL">4XL</option>
            </select>
          </div>
        </div>
        <div>
          <Link
            href={"/motos"}
            className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 ease-in-out w-[80%] text-sm font-semibold text-center hover: text-white rounded-sm px-3 py-1 ring-2 ring-blue-500"
          >
            Add to Cart
          </Link>
        </div>
      </article>
    </section>
  );
}

export default BrandShop;
