import React from "react";

function CompetitonLogo({ logoSrc, title, onClick, selected }) {
  return (
    <div
      onClick={onClick}
      data-scroll
      style={{ backgroundColor: selected && "white" }}
      className="md:h-20 h-16 w-full flex-shrink-0 md:w-20 bg-[#311D3F] rounded-md md:rounded-full flex items-center justify-start
       md:justify-evenly md:hover:h-24 mt-2 md:mt-0 md:hover:w-24 group transition-all duration-200 ease-out 
       cursor-pointer hover:bg-gray-200 pl-6 md:pl-0"
      title={title}
    >
      <img
        data-scroll
        style={{ filter: selected && "invert(0%)" }}
        className="group-hover:scale-75 md:inline block group-hover:invert-[10%] transition-all duration-200 ease-in object-cover invert h-8 w-8 md:h-12 md:w-12"
        src={logoSrc}
      />
      <h4
        style={{ color: selected && "black" }}
        className="md:inline md:scale-100 block md:opacity-0 md:group-hover:opacity-100 md:absolute text-md p-3 z-10 rounded-md
       md:bg-[#311D3F] ml-8 md:ml-0 md:-mr-16 md:group-hover:!text-white group-hover:text-gray-700 md:-mb-28 transition-all duration-200 ease-out"
      >
        {title}
      </h4>
    </div>
  );
}

export default CompetitonLogo;
