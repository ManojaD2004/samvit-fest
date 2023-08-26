import Link from "next/link";
import React from "react";

function JumpTag({ href, handleClick, title }) {
  return (
    <h3 className="font-medium text-sm relative h-full flex items-center cursor-pointer group">
      <span className="z-0 absolute w-[120%] -translate-x-1/2 left-1/2 transition-all duration-500 ease-out h-0 group-hover:h-[22px] bg-black top-0 rounded-b-lg"></span>
      <Link href={href} onClick={handleClick}>
        {title}
      </Link>
    </h3>
  );
}

export default JumpTag;
