import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import PlusIcons from "./PlusIcons";

function Feed() {
  const logo = "/images/logo.png";

  return (
    <section data-scroll-section className="w-full tmLand h-screen bg-cover">
      {/* Overlay */}
      <div
        data-scroll
        className="w-full h-screen graBg absolute
        z-0"
      >
        <PlusIcons />

        {/* Big Title */}
        <div
          data-scroll
          className="absolute left-1/2 top-[75%] -translate-y-1/2 -translate-x-1/2 md:translate-x-[none] md:translate-y-[none] w-full md:top-32 md:left-28  
        md:w-[500px]"
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
            className="block text-4xl text-center
          md:text-9xl text-white m-0 font-bold"
          />
          {/* <h1 className="text-9xl text-black m-0 font-bold">SAMVIT</h1>
          <h1 className="text-9xl font-bold m-0">2023</h1> */}
        </div>

        {/* Tagline */}
        <div data-scroll className="absolute w-full text-center md:text-left md:w-auto left-1/2 top-[85%] -translate-y-1/2 -translate-x-1/2 md:translate-x-[none] md:left-[auto] md:translate-y-[none] md:top-36 md:right-48">
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
          className="bg-black hidden md:block w-64 rounded-r-xl h-16 absolute
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
        <div data-scroll className="w-56 absolute left-1/2 top-[40%] -translate-y-1/2 -translate-x-1/2 md:translate-x-[none] md:left-[auto] md:top-[auto] md:translate-y-[none] md:bottom-24 md:right-[182px]">
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
