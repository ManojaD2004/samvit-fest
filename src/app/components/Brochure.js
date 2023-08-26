import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Brochure({ brImg, setBrImg }) {
  return (
    <div
      onClick={() => setBrImg(null)}
      className="absolute w-screen h-screen top-0 left-0 z-50 bg-[rgba(59,59,59,0.28)]
     flex justify-center items-center backdrop-blur-md"
    >
      <AnimatePresence 
      initial={false}
      mode="wait">
        <motion.div
          // data-scroll
          // drag
          // dragSnapToOrigin
          // whileDrag={{ scale: 1.05 }}
          // dragTransition={{ bounceStiffness: 100, bounceDamping: 12 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          // transition={{
          //   duration: 0.6,
          //   // ease: "easeInOut",
          //   // type: "spring",
          //   velocity: 2,
          // }}
        >
          {/* {main && <img src={main} className="w-9/12 h-auto object-cover" alt="" />} */}
          <img
            src={brImg}
            className="shadow-2xl border-[3vw] border-black z-50 shadow-gray-900 scale-50 object-cover"
            alt=""
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Brochure;
