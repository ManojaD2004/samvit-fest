import React from "react";
import PlusIcons from "./PlusIcons";
import Image from "next/image";
import CoOrdinatorCard from "./CoOrdinatorCard";

function CoOrdinator() {
  const committeNames = [
    "Vilas C P",
    "Aditya Srinivasan",
    "Srajanya Shetty",
    "Hitha A B Gowda",
    "Manoja D",
    "Harshith M",
    "Abhishek K V",
    "Shashikiran",
    "Ashritha S",
    "Sinchan D",
    "Ashutosh Kumar Jha",
    "Yathiraj P",
  ];
  const committeWorks = [
    "Student Head",
    "Finance Head",
    "Finance Head",
    "Security Incharge",
    "Web Developer",
    "Brochure Designer",
    "Stage Incharge",
    "Promotion Head",
    "Dance Committe",
    "Digital Marketing",
    "Food Committe",
    "Volunter Committe",
  ];
  const committeImg = [
    "vilas.jpeg",
    "aditya.jpeg",
    "srajanya.jpeg",
    "hitha.png",
    "manoja.jpeg",
    "harshith.jpeg",
    "abhishek.jpeg",
    "shashi.jpg",
    "ashritha.jpeg",
    "sinchan.jpeg",
    "ashutosh.jpg",
    "yathiraj.jpeg",
  ];
  return (
    <section
      data-scroll-section
      className="events w-full h-auto pb-12 md:px-2 pt-9 bg-[#E23E57] relative"
    >
      <PlusIcons />
      <h1
        data-scroll
        className="text-[#311D3F] hover:scale-90 transition-all ease-in-out duration-500
      md:text-8xl text-4xl text-center font-bold"
      >
        FACULTY DEPARTMENT
      </h1>
      <div
        data-scroll
        className="border-4 border-[#311D3F]
      mt-10 mx-8 md:mx-16 z-[2]"
      ></div>
      <div className="flex flex-wrap items-center justify-center gap-12 mt-12">
        <CoOrdinatorCard
          imgSrc={"/committeFaculty/raju.jpeg"}
          cardTitle={"Dr.G T Raju"}
          optText={"Chairman"}
        />
        <CoOrdinatorCard
          imgSrc={"/committeFaculty/ravi.jpeg"}
          cardTitle={"Dr. Ravikumar G K"}
          optText={"Vice Chairman"}
        />
        <CoOrdinatorCard
          imgSrc={"/committeFaculty/shruthi.jpeg"}
          cardTitle={"Mrs. Shruthi K S"}
          optText={"Organising Secretary"}
        />
        <CoOrdinatorCard
          imgSrc={"/committeFaculty/hanumesha.jpeg"}
          cardTitle={"Mr. Hanumesha G K"}
          optText={"Treasurer"}
        />
      </div>

      <h1
        data-scroll
        className="text-[#311D3F] hover:scale-90 transition-all ease-in-out duration-500
      md:text-8xl text-4xl text-center font-bold mt-14"
      >
        ORGANISING COMMITTEE
      </h1>
      <div
        data-scroll
        className="border-4 border-[#311D3F]
      mt-10 mx-8 md:mx-16 z-[2]"
      ></div>
      <div className="flex flex-wrap justify-center gap-x-5 gap-y-16 mt-16">
        {committeNames.map((name, i) => (
          <CoOrdinatorCard
            key={name}
            imgSrc={`/committee/${committeImg[i]}`}
            cardTitle={name}
            optText={committeWorks[i]}
            delay={0.25}
          />
        ))}
      </div>
    </section>
  );
}

export default CoOrdinator;
