import React from "react";

function Register() {
  const logo = "/images/logo.png";
  return (
    <div
      data-scroll-section
      id="register"
      className="w-full pb-10 px-2 pt-9
    bg-red-500"
    >
      <h1 data-scroll className="text-center hover:scale-90 transition-all ease-in-out duration-500 text-black font-bold text-9xl">
        Register
      </h1>
      <div
        data-scroll
        className="border-4 border-black
        mt-10 mx-14"
      ></div>
      <div data-scroll className="flex justify-between mt-10 mx-14">
        <div data-scroll className="flex flex-col space-y-5">
          <h3
            data-scroll
            className="text-xl font-semibold hover:text-gray-100 cursor-pointer
                "
          >
            SAMVIT 2023
          </h3>
          <h3
            data-scroll
            className="text-xl font-semibold hover:text-gray-100 cursor-pointer
                "
          >
            Contact:{" "}
            <span data-scroll className="text-black">
              {" "}
              +91 1234567890, +91 0987654321{" "}
            </span>
          </h3>
          <h3
            data-scroll
            className="text-xl font-semibold hover:text-gray-100 cursor-pointer
                "
          >
            Mail: abcxyz@gmail.com
          </h3>
          <h3
            data-scroll
            className="text-xl font-semibold hover:text-gray-100 cursor-pointer
                "
          >
            Instagram: samvitfest2023
          </h3>
          <div
            data-scroll
            className="w-72 h-20 bg-gradient-to-tr bg-slate-800
                 rounded-lg cursor-pointer flex items-center transition-all duration-150 ease-out
                justify-evenly group  hover:bg-slate-100"
          >
            <h4
              data-scroll
              className="text-2xl group-hover:text-slate-800
                     group-hover:scale-90 transition-all duration-150 ease-in
                     font-semibold"
            >
              Register Now
            </h4>
          </div>
        </div>
        <div data-scroll className="h-72">
          <img
            data-scroll
            className="h-full object-cover invert"
            src={logo}
          />
        </div>
      </div>
    </div>
  );
}

export default Register;
