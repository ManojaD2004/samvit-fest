import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function CompetitonCard({ comptTitle, comptImg, delay, onClick }) {
  return (
    <motion.div
      data-scroll
      initial="hide"
      animate="show"
      exit="hide"
      viewport={{ once: false }}
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
          y: 0,
        },
        hide: {
          opacity: 0,
          scale: 0.8,
          y: 150,
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
      <div
        onClick={onClick}
        data-scroll
        className="md:w-[330px] w-[240px] h-72 flex-shrink-0 md:h-[240px] mt-10 
    border-8 border-black cursor-pointer border-double relative
    transition-all duration-150 ease-out hover:border-white
    group overflow-hidden hover:shadow-black hover:shadow-lg"
      >
        <h3
          data-scroll
          className="text-white text-center text-lg font-semibold absolute top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ease-in
        group-hover:opacity-100 opacity-0 z-[2] text-shadow"
        >
          {comptTitle}
        </h3>
        <img
          alt=""
          fill={true}
          data-scroll
          className="object-cover h-full
        group-hover:scale-125 transition-all duration-150 ease-out"
          src={comptImg}
        />
      </div>
    </motion.div>
  );
}

export default CompetitonCard;
