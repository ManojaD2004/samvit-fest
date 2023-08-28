import React, { useEffect, useRef, useState } from "react";
import CompetitonLogo from "./CompetitonLogo";
import CompetitonCard from "./CompetitonCard";
import { AnimatePresence } from "framer-motion";
import PlusIcons from "./PlusIcons";

function Competition({ setBrImg }) {
  const [choice, setChoice] = useState("all");
  const canChange = useRef(true);

  const brochure = {
    all: [],
    literary: ["l_debate", "l_quiz"],
    art: [
      "a_face",
      "a_pencil",
      "a_paint",
      "media_reels",
      "media_short",
      "m_mad",
    ],
    esports: ["esports", "esports", "esports"],
    tech: ["tech_css", "tech_code", "tech_quiz", "ce", "tech_paper"],
    misc: ["fashion", "dj", "treasure", "comedy"],
    cultural: [
      "cd_group",
      "cd_solo",
      "ws_group",
      "ws_solo",
      "battle_of_bands",
      "c_music",
      "w_music",
    ],
  };

  const competitonList = {
    all: [],
    literary: ["debate.png", "gk_quiz.jpg"],
    art: [
      "face_painting.jpg",
      "pencil_sketch.jpg",
      "painting.jpg",
      "reels.jpeg",
      "short-film.jpeg",
      "mad-ads.jpg",
    ],
    esports: ["bgmi.jpg", "cod.jpg", "free_fire.jpg"],
    tech: [
      "css.jpg",
      "python.jpg",
      "tech_quiz.jpeg",
      "cyber_etimology.jpeg",
      "paper_present.jpg",
    ],
    misc: [
      "fashion_show.jpeg",
      "dj_night.jpg",
      "treasure_hunt.jpg",
      "stand_up_comedy.jpg",
    ],
    cultural: [
      "classical_group.jpg",
      "classical_solo.jpg",
      "western_group.jpg",
      "western_solo.jpg",
      "battle-of-the-bands.jpg",
      "classical_music.jpg",
      "western_music.jpg",
    ],
  };

  const competitonListNames = {
    all: [],
    literary: ["Debate", "GK Quiz"],
    art: [
      "Face Painting",
      "Pencil Sketch",
      "Painting",
      "Reels Making",
      "Short-Movie Making",
      "Mad Ads",
    ],
    esports: ["BGMI", "CODM", "Free Fire"],
    tech: [
      "CSS Battle",
      "Debugging - Coding",
      "Technical Quiz",
      "Cyber Etimology",
      "Paper Presentation",
    ],
    misc: ["Fashion Show", "DJ Night", "Treasure Hunt", "Stand Up Comedy"],
    cultural: [
      "Classical Group",
      "Classical Solo",
      "Western Group",
      "Western Solo",
      "Battle of Bands",
      "Classical Singing",
      "Western Singing",
    ],
  };

  function calAll() {
    competitonListNames.all = [
      ...competitonListNames.misc,
      ...competitonListNames.esports,
      ...competitonListNames.cultural,
      ...competitonListNames.tech,
      ...competitonListNames.art,
      ...competitonListNames.literary,
    ];
    competitonList.all = [
      ...competitonList.misc,
      ...competitonList.esports,
      ...competitonList.cultural,
      ...competitonList.tech,
      ...competitonList.art,
      ...competitonList.literary,
    ];
    brochure.all = [
      ...brochure.misc,
      ...brochure.esports,
      ...brochure.cultural,
      ...brochure.tech,
      ...brochure.art,
      ...brochure.literary,
    ];
  }

  calAll();

  function preload() {
    for (let i = 0; i < brochure[choice].length; i++) {
      let img = new window.Image();
      img.src = `/brochure/${choice}/${brochure[choice][i]}.png`;
    }
  }
  preload();

  function handleClick(choice) {
    if (canChange.current === true) {
      canChange.current = false;
      setChoice(choice);
      setTimeout(
        () => (canChange.current = true),
        competitonList[choice].length * 250 + 1200
      );
    }
  }

  return (
    <div
      data-scroll-section
      id="competition"
      className="w-full pb-10 md:px-2 pt-9
    bg-red-500 overflow-hidden"
    >
      <PlusIcons />
      <h1
        data-scroll
        className="text-center hover:scale-90 transition-all ease-in-out duration-500
         text-[#311D3F] text-[40px] font-bold md:text-9xl"
      >
        Competitions
      </h1>
      <div
        data-scroll
        className="border-4 border-[#311D3F]
        mt-10 md:mx-14 mx-8"
      ></div>
      <div
        data-scroll
        className="flex justify-center md:justify-between items-center md:mx-14
        mt-10 md:flex-wrap md:flex-row flex-col md:gap-x-4 md:gap-y-4 mx-8"
      >
        <>
          <CompetitonLogo
            data-scroll
            onClick={() => {
              handleClick("all");
            }}
            title="Show All"
            logoSrc="https://img.icons8.com/external-bearicons-glyph-bearicons/100/external-Competition-business-and-marketing-bearicons-glyph-bearicons.png"
            selected={choice === "all"}
          />
          <CompetitonLogo
            data-scroll
            onClick={() => {
              handleClick("literary");
            }}
            title="Literary"
            selected={choice === "literary"}
            logoSrc="https://img.icons8.com/ios-glyphs/100/quiz.png"
          />
          <CompetitonLogo
            data-scroll
            onClick={() => handleClick("art")}
            title="Art & Media"
            selected={choice === "art"}
            logoSrc="https://img.icons8.com/ios-filled/100/artist.png"
          />
          <CompetitonLogo
            data-scroll
            onClick={() => handleClick("esports")}
            title="E-Sports"
            selected={choice === "esports"}
            logoSrc="https://img.icons8.com/ios-filled/100/controller.png"
          />
          <CompetitonLogo
            data-scroll
            onClick={() => handleClick("tech")}
            title="Tech"
            selected={choice === "tech"}
            logoSrc="https://img.icons8.com/ios-filled/100/source-code.png"
          />
          <CompetitonLogo
            data-scroll
            onClick={() => handleClick("misc")}
            title="Misc"
            selected={choice === "misc"}
            logoSrc="https://img.icons8.com/ios-filled/100/metal-music.png"
          />
          <CompetitonLogo
            data-scroll
            onClick={() => handleClick("cultural")}
            title="Cultural"
            selected={choice === "cultural"}
            logoSrc="https://img.icons8.com/ios-filled/100/dancing-party.png"
          />
        </>
      </div>
      <div
        data-scroll
        className="border-4 border-[#311D3F]
        mt-10 mx-8 md:mx-14"
      ></div>
      <div
        data-scroll
        className="flex gap-x-10 justify-center items-center
        flex-wrap mx-14"
      >
        <AnimatePresence data-scroll mode="wait">
          {competitonList[choice].map((competitonImg, i) => (
            <CompetitonCard
              key={`/competition_images/${choice}/${competitonImg}`}
              onClick={() =>
                setBrImg(`/brochure/${choice}/${brochure[choice][i]}.png`)
              }
              delay={0.25 * i}
              comptTitle={competitonListNames[choice][i]}
              comptImg={`/competition_images/${choice}/${competitonImg}`}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Competition;
