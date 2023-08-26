import React from "react";
import { motion } from "framer-motion";

function CoOrdinatorCard({ imgSrc, cardTitle, optText, delay }) {
  return (
    <motion.div
      data-scroll
      initial="hide"
      whileInView="show"
      viewport={{ once: true }}
      transition={{
        duration: 1,
        ease: "easeInOut",
        type: "spring",
        velocity: 1.75,
        delay: delay,
      }}
      variants={{
        show: {
          opacity: 1,
          scale: 1,
        },
        hide: {
          opacity: 0,
          scale: 0.95,

          transition: {
            delay: 0,
            duration: 1,
            ease: "easeInOut",
            type: "spring",
            velocity: 1.75,
          },
        },
      }}
    >
      <div className="group hover:shadow-lg relative hover:shadow-black hover:scale-105  transition-all duration-150 ease-out bg-[#311D3F] shadow-black rounded-lg shadow-sm flex-shrink-0  cursor-pointer mx-6 w-56 h-auto border-8 border-[#311D3F]">
        <div className="w-full h-72 overflow-hidden">
          <img
            alt=""
            src="/images/bgmi.jpg"
            className="w-56 h-full group-hover:scale-110 transition-all duration-150 ease-out object-cover"
          />
        </div>
        <div className="absolute top-1/2 w-72 left-[92%] -translate-x-1/2 -translate-y-1/2 -rotate-90">
          <h3 className="text-white inline-block ml-3 group-hover:scale-90 group-hover:text-black group-hover:bg-white transition-all duration-150 ease-out rounded-t-lg p-2  bg-[#311D3F] text-center ">
            {cardTitle}
          </h3>
        </div>
        <div>
          <h3 className="text-white absolute group-hover:bottom-0 -bottom-4 rounded-t-lg opacity-0 group-hover:opacity-100 left-2 px-2 inline-block py-1 bg-[#311D3F] transition-all duration-150 ease-out text-center ">
            {optText}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}

export default CoOrdinatorCard;
