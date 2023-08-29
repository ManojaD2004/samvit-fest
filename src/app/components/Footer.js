import Link from "next/link";
import React, { useState } from "react";

function Footer({ countViews }) {
  return (
    <footer
      data-scroll-section
      className="w-full pb-3 px-2 pt-3
    bg-black"
    >
      <h3 data-scroll className="text-white my-3 text-center">
        Web Vistors: <pre className="inline-block"> </pre>
        <i data-scroll className="text-red-300">
          {`'${countViews}'`}
        </i>
      </h3>
      <h3 data-scroll className="text-white my-3 text-center">
        Warning: <pre className="inline-block"> </pre>
        <i data-scroll className="text-red-300">
          {"'You'll Regret missing the fest'"}
        </i>
      </h3>
    </footer>
  );
}

export default Footer;
