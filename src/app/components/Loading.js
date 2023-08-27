import React from "react";

function Loading() {
    const logo = '/images/logo.png'
  return <div className="w-screen bg-gradient-to-tr from-[rgb(176,35,35)] to-[rgb(214,29,29)] flex flex-col gap-7 justify-center items-center h-screen bg-red-600">
    <img className="invert h-1/3 " src={logo} alt="" />
    <h2 className="text-center text-4xl">Loading...</h2>
  </div>;
}

export default Loading;
