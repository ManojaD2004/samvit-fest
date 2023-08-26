import React from "react";
import SponsorCard from "./SponsorCard";

function Sponsorship() {
  return (
    <div
      data-scroll-section
      id="sponsors"
      className="w-full pb-10 px-2 pt-9
    bg-black"
    >
      <h1
        data-scroll
        className="text-center text-red-500
         font-bold text-9xl hover:scale-90 transition-all ease-in-out duration-500"
      >
        Sponsors
      </h1>
      <div
        data-scroll
        className="border-2 border-white
        mt-10 mx-8"
      ></div>
      <div data-scroll className="mx-8 flex gap-x-16 justify-center flex-wrap">
        <SponsorCard data-scroll />
        <SponsorCard data-scroll />
        <SponsorCard data-scroll />
        <SponsorCard data-scroll />
        <SponsorCard data-scroll />
        <SponsorCard data-scroll />
      </div>
    </div>
  );
}

export default Sponsorship;
