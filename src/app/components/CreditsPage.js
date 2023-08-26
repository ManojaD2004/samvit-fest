import Link from "next/link";
import React from "react";

function Credits() {
  return (
    <div
    data-scroll-section
      className="w-full pb-3 px-2 pt-3
    bg-black"
    >
      <h3 data-scroll className="text-white text-center">
        Credits {"->"} Web By
        <Link data-scroll
          target="_blank"
          href="https://manojad2004.github.io/CodingClub/"
          className="text-red-300"
        >
          {" "}
          <i data-scroll>{"'Dark Mode - Coding Club'"}</i>
        </Link>
      </h3>
    </div>
  );
}

export default Credits;
