import React from "react";

function AboutUs() {
  return (
    <div
      data-scroll-section
      id="aboutus"
      className="w-full pb-10 md:px-2 pt-9
     bg-[#0d0413]"
    >
      <h1 data-scroll className="text-center text-[#E23E57] font-bold hover:scale-90 transition-all ease-in-out duration-500 text-4xl md:text-9xl">
        ABOUT FEST
      </h1>
      <div
        data-scroll
        className="border-2 border-[#522546]
      mt-10 mx-8"
      ></div>
      <div
        data-scroll
        className="
      mt-10 mx-8 flex space-x-12"
      >
        <div data-scroll>
          <p data-scroll className="text-[#de566b] text-base md:text-3xl">
            The fest marks the beginning of {"BGSCET’s"} cultural ethos, to
            bring together students from various colleges to partake in the
            vibrant culture of BGSCET, SAMVIT marks the beginning of{" "}
            {"BGSCET’s"} mission to inculcate knowledge along with fun, to
            foster better connectivity and fellowship among students of
            different institutes, we are on a mission to make everyone a part of
            SAMVIT, and to provide something unique for everyone attending.
          </p>
          <p data-scroll className="text-[#e14c62] text-base md:text-3xl mt-10 md:mt-20">
            SAMVIT makes the utmost effort to make all fellow attendees savour
            the experience as a lifelong memory, as {"BGSCET’s"} first cultural fest
            it makes it its mission to deliver on and to give the attendees a
            sense of the BGSCET experience.
          </p>
        </div>
        <img
          data-scroll
          className="hidden md:inline w-[45%] object-cover"
          src="/images/aboutusimgplaceholder.jpg"
        />
      </div>
    </div>
  );
}

export default AboutUs;
