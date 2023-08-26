import React from "react";

function CompetitonLogo({ logoSrc, title, onClick }) {
  return (
    <div
      onClick={onClick}
      data-scroll
      className="h-20 w-20 bg-[#311D3F] rounded-full flex items-center justify-evenly
    hover:h-24 hover:w-24 group transition-all duration-200 ease-out cursor-pointer
    hover:bg-white"
      title={title}
    >
      <img
        data-scroll
        className="group-hover:scale-75 group-hover:invert-0 transition-all duration-200 ease-in object-cover invert h-12 w-12"
        src={logoSrc}
      />
    </div>
  );
}

export default CompetitonLogo;
