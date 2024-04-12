import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function Event({ srcImg, eventTitle, speed }) {
  let dragable = true;
  if (window.innerWidth < 768) {
    dragable = false;
  }

  speed = Math.floor(Math.random() * (2 - 3 + 1) + 3);

  return (
    <motion.div
      data-scroll
      whileInView="visible"
      drag={dragable}
      dragSnapToOrigin={dragable}
      whileDrag={{ scale: 1.05 }}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 12 }}
      initial="hidden"
      viewport={{ once: false }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
        type: "spring",
        velocity: 2,
      }}
      variants={{
        visible: { opacity: 1, scale: 1, y: 0 },
        hidden: { opacity: 0, scale: 0.3, y: 150 },
      }}
    >
      <div
        data-scroll
        data-scroll-speed={speed}
        className="md:w-80 h-[340px] flex-shrink-0 w-[240px] md:h-96 border-8 border-[#311D3F] cursor-grab
    rounded-lg md:mx-4 md:my-8 relative group overflow-hidden
    bg-[#34263e] mx-auto shadow-2xl shadow-gray-800"
      >
        <img
          data-scroll
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "100%" }}
          alt=""
          src={srcImg}
          className="group-hover:scale-110 transition-all duration-150
        ease-out pointer-events-none object-cover"
        />
        <div
          data-scroll
          className="-rotate-90  w-96 bottom-48 -right-44 absolute"
        >
          <h4
            data-scroll
            className="group-hover:scale-90 transition-all duration-150 ease-out
         text-lg text-[#eaead3] m-0 bg-[#311D3F] inline-block p-2 rounded-t-lg"
          >
            <span data-scroll>{eventTitle[0]}</span>
            <pre data-scroll className="inline">
              {" "}
            </pre>
            <span data-scroll>{eventTitle[1]}</span>
          </h4>
        </div>
      </div>
    </motion.div>
  );
}

export default Event;
