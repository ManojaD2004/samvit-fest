import React, { useState } from "react";
import PlusIcons from "./PlusIcons";
import Event from "./Event";

function Events() {
  // console.log(window.innerWidth);
  
  const eventsList = [
    "classicalSolo",
    "westernDance",
    "bgmi",
    "fashion",
    "dj_night",
    "treasureHunt",
  ];
  const eventsListNames = [
    ["CLASSICAL ", " DANCE"],
    ["WESTERN ", " DANCE"],
    ["E-SPORTS ", " GAMING"],
    ["FASHION ", " SHOW"],
    ["DJ ", " NIGHT"],
    ["TREASURE ", " HUNT"],
  ];

  return (
    <section
      data-scroll-section
      id="events"
      className="events w-full h-auto pb-44 md:px-2 pt-9 bg-[#E23E57] relative"
    >
      <PlusIcons />

      <h1 data-scroll className="text-[#311D3F] hover:scale-90 transition-all ease-in-out duration-500
      md:text-8xl text-6xl text-center font-bold">
        EVENTS
      </h1>
      <div
        data-scroll
        className="border-4 border-[#311D3F]
      mt-10 md:mx-16 mx-8 z-[2]"
      ></div>

      <div data-scroll className="flex justify-center gap-x-12 mt-4 flex-wrap">
        {eventsList.map((event, i) => (
          <Event
            data-scroll
            key={i}
            speed={i}
            srcImg={`/images/${event}.jpg`}
            eventTitle={eventsListNames[i]}
          />
        ))}
      </div>
    </section>
  );
}

export default Events;
