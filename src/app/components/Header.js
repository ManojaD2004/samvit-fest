import React, { useEffect, useState } from "react";
import JumpTag from "./Header_Subs_Comp/JumpTag";
import Image from "next/image";
import Register from "./Register";

function Header({ scroll }) {
  const logo = "/images/logo.png";
  const doubleArrow = "/logo/doubleArrow.png";
  const doubleArrowRed = "/logo/doubleArrowRed.png";
  const [showReg, setShowReg] = useState(true);
  useEffect(() => {
    if (window.innerWidth > 768) {
      setShowReg(false);
    }
  }, []);

  function handleClick(ele) {
    ele.preventDefault();
    const eleToScroll = document.querySelector(ele.target.hash);
    if (scroll) {
      scroll.scrollTo(eleToScroll);
    }
  }

  return (
    <header className="w-full z-[9] h-[70px] fixed flex">
      {/* The Logo Of Fest */}
      <div
        onClick={() => {
          const eleToScroll = document.querySelector("#feed");
          if (scroll) {
            scroll.scrollTo(eleToScroll);
          }
        }}
        className="group hidden md:block hover:h-40 h-full transition-all duration-300 ease-out
       w-24 bg-black rounded-br-lg cursor-pointer overflow-hidden relative"
      >
        <Image
          width={38}
          height={38}
          className="group-hover:top-0 group-hover:opacity-0 
          transition-all duration-150 ease-out invert absolute 
          top-3.5 left-[30px]"
          src={logo}
          alt=""
        />
        <h3
          className="group-hover:-rotate-90 transition-all 
        duration-200 ease-out absolute left-11 top-[82px] 
        opacity-0 group-hover:opacity-100 group-hover:top-[58px] 
        tracking-wider group-hover:-left-2 font-bold text-3xl"
        >
          samvit.
        </h3>
      </div>
      {/* The Header Navigation Menu */}
      <div className="flex-1 relative">
        <div
          className="w-full bg-gradient-to-b
          from-[rgba(244,5,5,0.69)] to-transparent h-full"
        >
          <div
            className="md:w-[88%] w-full h-full flex items-center m-auto
            justify-evenly"
          >
            <JumpTag href="#events" handleClick={handleClick} title="Events" />
            <JumpTag
              href="#competition"
              handleClick={handleClick}
              title="Competition"
            />
            <JumpTag
              href="#aboutus"
              handleClick={handleClick}
              title="About Fest"
            />
            {showReg === true && (
              <JumpTag
                href="#register"
                handleClick={handleClick}
                title="Register"
              />
            )}
          </div>
        </div>
      </div>

      {/* Register Now CTA */}
      {showReg !== true && (
        <div
          className="group hidden md:block transition-all duration-300 ease-out w-52 bg-black rounded-bl-xl
        cursor-pointer overflow-hidden relative"
          onClick={() => {
            const eleToScroll = document.querySelector("#register");
            if (scroll) {
              scroll.scrollTo(eleToScroll);
            }
          }}
        >
          <Image
            src={doubleArrowRed}
            className="group-hover:top-[19px] brightness-90 top-10 -rotate-45 absolute transition-all duration-100 ease-out -left-7 group-hover:left-2"
            height={32}
            width={32}
            alt=""
          />
          <h3 className="text-xl transition-all duration-200 ease-in-out font-bold top-[21px] left-5 group-hover:left-[50px] absolute">
            Register{" "}
            <span className="group-hover:text-red-500 transition-all group-hover:scale-150 duration-200 ease-in-out">
              Now
            </span>
          </h3>
          <Image
            src={doubleArrow}
            className="invert top-5 -rotate-45 transition-all duration-100 ease-out absolute right-5 group-hover:-top-3 group-hover:-right-4"
            height={32}
            width={32}
            alt=""
          />
        </div>
      )}
    </header>
  );
}

export default Header;
