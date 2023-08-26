import React from "react";
import PlusIcons from "./PlusIcons";
import Image from "next/image";
import CoOrdinatorCard from "./CoOrdinatorCard";

function CoOrdinator() {
  const committeNames = [
    "Vilas C P",
    "Aditya S",
    "Hitha",
    "Srajanaya Sheety",
    "Manoja D",
    "Harshitha M",
    "Shashi",
    "Ashrita",
    "Sinchan D",
    "Ashutosh Jha",
    "Yetiraj",
  ];
  const committeWorks = [
    "Student Head",
    "Finance Head",
    "Security Incharge",
    "Sponsor Incharge",
    "Web Developer",
    "Brochure Designer",
    "Promotion Head",
    "Dance Committe",
    "Digital Marketing",
    "Food Committe",
    "Volunter Committe",
  ];
  return (
    <section
      data-scroll-section
      className="events w-full h-auto pb-12 px-2 pt-9 bg-[#E23E57] relative"
    >
      <PlusIcons />
      <h1
        data-scroll
        className="text-[#311D3F] hover:scale-90 transition-all ease-in-out duration-500
      text-8xl text-center font-bold"
      >
        ORGANISING COMMITTEE
      </h1>
      <div
        data-scroll
        className="border-4 border-[#311D3F]
      mt-10 mx-16 z-[2]"
      ></div>
      <div className="flex flex-wrap justify-center gap-7 gap-y-12 mt-12">
        {committeNames.map((name, i) => (
          <CoOrdinatorCard cardTitle={name} optText={committeWorks[i]} 
          delay={0.25}/>
        ))}
      </div>

      <h1
        data-scroll
        className="text-[#311D3F] hover:scale-90 transition-all ease-in-out duration-500
      text-8xl text-center font-bold mt-14"
      >
        FACULTY DEPARTMENT
      </h1>
      <div
        data-scroll
        className="border-4 border-[#311D3F]
      mt-10 mx-16 z-[2]"
      ></div>
      <div className="flex flex-wrap justify-center gap-12 mt-12">
        <CoOrdinatorCard cardTitle={"Shruthi Gowda"} optText={"Faculty Head"} />
        <CoOrdinatorCard
          cardTitle={"Dr Ravi Kumar"}
          optText={"Principle BGSCET"}
        />
        <CoOrdinatorCard cardTitle={"Dr GT Raju"} optText={"Director BGSCET"} />
      </div>
    </section>
  );
}

export default CoOrdinator;
