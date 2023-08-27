import React from "react";

function CompetitonLogo({ logoSrc, title, onClick }) {
  return (
    <div
      onClick={onClick}
      data-scroll
      className="md:h-20 h-16 w-16 flex-shrink-0 md:w-20 bg-[#311D3F] rounded-full flex items-center justify-evenly
    md:hover:h-24 md:hover:w-24 group transition-all duration-200 ease-out cursor-pointer
    hover:bg-white"
      title={title}
    >
      <img
        data-scroll
        className="group-hover:scale-75 group-hover:invert-0 transition-all duration-200 ease-in object-cover invert h-8 w-8 md:h-12 md:w-12"
        src={logoSrc}
      />
    </div>
  );
}

export default CompetitonLogo;
