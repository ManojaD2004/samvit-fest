import React from "react";
import JumpTag from "./Header_Subs_Comp/JumpTag";
import Image from "next/image";

function Header({ scroll }) {
  const logo = "/images/logo.png";
  const doubleArrow = "/logo/doubleArrow.png";

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
            {/* <JumpTag
              href="#sponsors"
              handleClick={handleClick}
              title="Sponsors"
            /> */}
            <JumpTag
              href="#register"
              handleClick={handleClick}
              title="Register"
            />
          </div>
        </div>
      </div>

      {/* Register Now CTA */}
      <div
        className="group hover:w-56 hidden md:block transition-all duration-300 ease-out w-52 bg-black rounded-bl-xl
        cursor-pointer overflow-hidden relative"
        onClick={() => {
          const eleToScroll = document.querySelector('#register');
          if (scroll) {
            scroll.scrollTo(eleToScroll);
          }
        }}
      >
        <Image
          src={doubleArrow}
          className="invert top-5 absolute transition-all duration-150 ease-out -left-7 group-hover:left-2"
          height={32}
          width={32}
          alt=""
        />
        <h3 className="text-xl transition-all duration-200 ease-in-out font-bold top-[21px] left-5 group-hover:left-[52px] absolute">
          Register Now
        </h3>
        <Image
          src={doubleArrow}
          className="invert top-5 transition-all duration-150 ease-out absolute right-5 group-hover:-right-4"
          height={32}
          width={32}
          alt=""
        />
      </div>
    </header>
  );
}

export default Header;
