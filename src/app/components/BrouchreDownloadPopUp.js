import React from "react";
import { AnimatePresence, motion } from "framer-motion";

function BrouchreDownloadPopUp({ setBrDwload }) {
  return (
    <motion.div
      onClick={() => setBrDwload(false)}
      initial="hide"
      animate="show"
      exit={{ opacity: 0 }}
      transition={{
        duration: 1,
        type: "spring",
        velocity: 1.75,
      }}
      variants={{
        show: {
          opacity: 1,
          scale: 1,
        },
        hide: {
          opacity: 0,
          transition: {
            delay: 0,
            duration: 1,
            ease: "easeInOut",
            type: "spring",
            velocity: 1.75,
          },
        },
      }}
      className="absolute w-screen h-screen top-0 left-0 z-50 bg-[rgba(59,59,59,0.28)]
     flex flex-col items-center overflow-y-scroll backdrop-blur-md"
    >
      <motion.div
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
          type: "spring",
          damping: 25,
          stiffness: 500,
          velocity: 2,
        }}
      >
        <div className="absolute  top-[5%] cursor-pointer text-lg md:text-2xl right-[5%]">
          X
        </div>
        <iframe
          className="border-none block w-[80vw] h-[90vh] mt-28"
          src="https://drive.google.com/file/d/1a3FmftLIZTAmC-45CiPpUXHYX9DFJVGA/preview"
          allow="autoplay"
        ></iframe>
        <iframe
          className="border-none block w-[80vw] h-[90vh] mt-28 mb-28"
          src="https://drive.google.com/file/d/1Vm4j8Gcgx9adfrVlr4rcPSo2Yr6-sPXj/preview"
          allow="autoplay"
        ></iframe>
      </motion.div>
    </motion.div>
  );
}

export default BrouchreDownloadPopUp;
