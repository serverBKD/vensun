import Image from "next/image";
import { imgTwoBlocks } from "@/types/const.ts";

function GridCard() {
  return (
    <section className="w-full bg-[#47474f] max-w-[1440px] flex justify-center items-center flex-wrap relative">
      <div
        id="container"
        className="w-full flex justify-center items-center flex-wrap relative p-7"
      >
        <article
          id="items"
          className="bg-white border-2 border-[#f5f5fa] grow-0 shrink-0 m-1 relative overflow-hidden shadow-lg rounded-sm w-[320px] h-[320px] basis-[320px]"
        >
          <div className="w-full h-full ease-in-out delay-500 ">
            <div className="w-full h-2/3 p-7 bg-transparent overflow-hidden hover:h-full">
              <Image
                src={imgTwoBlocks}
                alt="X"
                width={100}
                height={20}
                layout="responsive"
                style={{
                  backgroundColor: "#fff",
                  textAlign: "center",
                  padding: "1px",
                }}
              />
            </div>
            {/* <!--. imagenes --> */}
            <div className="w-full relative">
              <picture className="absolute z-10 w-20 h-20 top-0 left-0">
                <Image
                  src={imgTwoBlocks}
                  alt="X"
                  width={10}
                  height={20}
                  layout="responsive"
                  style={{
                    backgroundColor: "#fa1",
                    textAlign: "center",
                    padding: "1px",
                    width: "10px",
                    height: "20px",
                  }}
                />
              </picture>
              <picture className="absolute z-10 w-20 h-20 top-0 left-24">
                <Image
                  src={imgTwoBlocks}
                  alt="X"
                  width={100}
                  height={20}
                  layout="responsive"
                  style={{
                    backgroundColor: "#05f",
                    textAlign: "center",
                    padding: "1px",
                    width: "10px",
                    height: "20px",
                  }}
                />
              </picture>
              <picture className="absolute z-10 w-20 h-20 top-0 right-0">
                <Image
                  src={imgTwoBlocks}
                  alt="X"
                  width={100}
                  height={20}
                  layout="responsive"
                  style={{
                    backgroundColor: "#ff0000",
                    textAlign: "center",
                    padding: "1px",
                  }}
                />
              </picture>
            </div>
            {/* <div className="w-full h-1/3 p-2 text-white bg-sky-900 ease-in-out delay-500 opacity-50 hover:hidden">
              <h1 className="font-bold text-center">MOTO 200cc</h1>
              <p className="w-full italic justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing.
              </p>
            </div> */}
          </div>
        </article>
        <div
          id="items"
          className="bg-white border-2 border-[#f5f5fa] grow-0 shrink-0 m-1 relative overflow-hidden shadow-lg rounded-sm w-[320px] h-[320px] basis-[320px]"
        >
          2
        </div>
        <div
          id="items"
          className="bg-white border-2 border-[#f5f5fa] grow-0 shrink-0 m-1 relative overflow-hidden shadow-lg rounded-sm w-[320px] h-[320px] basis-[320px]"
        >
          3
        </div>
        <div
          id="items"
          className="bg-white border-2 border-[#f5f5fa] grow-0 shrink-0 m-1 relative overflow-hidden shadow-lg rounded-sm w-[320px] h-[320px] basis-[320px]"
        >
          4
        </div>
        <div
          id="items"
          className="bg-white border-2 border-[#f5f5fa] grow-0 shrink-0 m-1 relative overflow-hidden shadow-lg rounded-sm w-[320px] h-[320px] basis-[320px]"
        >
          5
        </div>
        <div
          id="items"
          className="bg-white border-2 border-[#f5f5fa] grow-0 shrink-0 m-1 relative overflow-hidden shadow-lg rounded-sm w-[320px] h-[320px] basis-[320px]"
        >
          6
        </div>
        <div
          id="items"
          className="bg-white border-2 border-[#f5f5fa] grow-0 shrink-0 m-1 relative overflow-hidden shadow-lg rounded-sm w-[320px] h-[320px] basis-[320px]"
        >
          7
        </div>
        <div
          id="items"
          className="bg-white border-2 border-[#f5f5fa] grow-0 shrink-0 m-1 relative overflow-hidden shadow-lg rounded-sm w-[320px] h-[320px] basis-[320px]"
        >
          8
        </div>
      </div>
    </section>
  );
}

export default GridCard;
