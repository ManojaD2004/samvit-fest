import React from "react";
import { motion } from "framer-motion";

function CoOrdinatorCard({ imgSrc, cardTitle, optText, delay=0.5 }) {
  return (
    <motion.div
      data-scroll
      initial="hide"
      whileInView='show'
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
    <div className="group hover:shadow-lg  hover:shadow-black hover:scale-105  transition-all duration-150 ease-out shadow-black shadow-sm flex-shrink-0  cursor-pointer mx-6 w-56 h-auto border-8 border-black border-double">
      <div className="w-full h-56 overflow-hidden">
        <img
          alt=""
          src="/images/bgmi.jpg"
          className="w-56 group-hover:scale-110 transition-all duration-150 ease-out h-56 object-cover"
        />
      </div>
      <h3 className="text-white group-hover:scale-90 group-hover:text-black group-hover:bg-white transition-all duration-150 ease-out mb-3 rounded-lg w-[80%] bg-black mx-auto text-center  mt-3">
        {cardTitle}
      </h3>
      {optText && (
        <h3 className="text-black group-hover:scale-90 group-hover:text-white group-hover:bg-black transition-all duration-150 ease-out rounded-lg w-[80%] mb-3 bg-white mx-auto text-center  mt-3">
          {optText}
        </h3>
      )}
    </div>
    </motion.div>
  );
}

export default CoOrdinatorCard;
