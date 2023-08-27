import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer
      data-scroll-section
      className="w-full pb-3 px-2 pt-3
    bg-black"
    >
      <h3 data-scroll className="text-white  text-center">
        Warning: <pre className="inline-block"> </pre>
        <i data-scroll className="text-red-300">
          {"'You'll Regret missing the fest'"}
        </i>
      </h3>
    </footer>
  );
}

export default Footer;
