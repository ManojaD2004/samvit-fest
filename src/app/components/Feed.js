import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";

function Feed() {
  const logo = "/images/logo.png";

  return (
    <section data-scroll-section className="w-full h-screen tmLand bg-cover">
      {/* Overlay */}
      <div
        data-scroll
        className="w-full h-screen bg-[rgba(176,37,37,0.7)] absolute
      z-0"
      >

        {/* Big Title */}
        <div
          data-scroll
          className="absolute top-32 left-28  
        w-[500px]"
        >
          <TypeAnimation
            data-scroll
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "SAMVIT FEST",
              1000,
              "SAMVIT 2023",
              1000,
              "SEPT 6 and 7",
              1000,
            ]}
            speed={30}
            deletionSpeed={30}
            repeat={Infinity}
            wrapper="h1"
            className="hidden md:block
          text-9xl text-white m-0 font-bold"
          />
          {/* <h1 className="text-9xl text-black m-0 font-bold">SAMVIT</h1>
          <h1 className="text-9xl font-bold m-0">2023</h1> */}
        </div>

        {/* Tagline */}
        <div data-scroll className="absolute top-36 right-48">
          <h4 data-scroll className="text-lg">
            - Embrace the{" "}
            <b data-scroll className="font-bold text-black">
              New ERA
            </b>
          </h4>
        </div>

        {/* Dates */}
        <div
          data-scroll
          className="bg-black w-64 rounded-r-xl h-16 absolute
        bottom-6 left-2 group cursor-pointer overflow-hidden"
        >
          <div className="relative ">
            <h3
              data-scroll
              className="absolute top-3 group-hover:-top-10 left-[38px] text-2xl transition-all duration-300 ease-in-out group-hover:opacity-50"
            >
              Sept -
              <span data-scroll className="text-red-600 text-3xl">
                {" "}
                6th, 7th
              </span>
            </h3>
            <h3
              data-scroll
              className="text-2xl top-16 group-hover:top-3 left-[38px] absolute  transition-all duration-300  opacity-50 ease-in-out  group-hover:opacity-100"
            >
              Booking -
              <span data-scroll className="text-red-600 text-3xl">
                {" "}
                Now
              </span>
            </h3>
          </div>
        </div>

        {/* Big Logo */}
        <div data-scroll className="w-56 absolute bottom-24 right-[182px]">
          <Image
            data-scroll
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            alt=""
            src={logo}
            className="invert hover:invert-[95%] 
            transition-all duration-500 ease-out cursor-pointer 
            hover:scale-90 object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Feed;
