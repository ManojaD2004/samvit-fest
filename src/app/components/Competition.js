import React, { useState } from "react";
import CompetitonLogo from "./CompetitonLogo";
import CompetitonCard from "./CompetitonCard";
import { AnimatePresence } from "framer-motion";
import PlusIcons from "./PlusIcons";

function Competition({ setBrImg }) {
  const [choice, setChoice] = useState("all");

  const brochure = {
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
    tech: ["tech_css", "tech_code", "tech_quiz", "", "tech_paper"],
    misc: ["fashion", "", "treasure", "comedy"],
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
  }
  calAll();

  return (
    <div
      data-scroll-section
      id="competition"
      className="w-full pb-10 px-2 pt-9
    bg-red-500 overflow-hidden"
    >
      <PlusIcons />
      <h1
        data-scroll
        className="text-center hover:scale-90 transition-all ease-in-out duration-500
         text-[#311D3F] font-bold text-9xl"
      >
        Competition
      </h1>
      <div
        data-scroll
        className="border-4 border-[#311D3F]
        mt-10 mx-14"
      ></div>
      <div
        data-scroll
        className="flex justify-between items-center mx-14
        mt-10"
      >
        <CompetitonLogo
          data-scroll
          onClick={() => {
            setChoice("all");
          }}
          title="All Competition"
          logoSrc="https://img.icons8.com/external-bearicons-glyph-bearicons/100/external-Competition-business-and-marketing-bearicons-glyph-bearicons.png"
        />
        <CompetitonLogo
          data-scroll
          onClick={() => {
            setChoice("literary");
          }}
          title="Literary"
          logoSrc="https://img.icons8.com/ios-glyphs/100/quiz.png"
        />
        <CompetitonLogo
          data-scroll
          onClick={() => setChoice("art")}
          title="Art and Media"
          logoSrc="https://img.icons8.com/ios-filled/100/artist.png"
        />
        <CompetitonLogo
          data-scroll
          onClick={() => setChoice("esports")}
          title="E-Sports"
          logoSrc="https://img.icons8.com/ios-filled/100/controller.png"
        />
        <CompetitonLogo
          data-scroll
          onClick={() => setChoice("tech")}
          title="Tech"
          logoSrc="https://img.icons8.com/ios-filled/100/source-code.png"
        />
        <CompetitonLogo
          data-scroll
          onClick={() => setChoice("misc")}
          title="Misc"
          logoSrc="https://img.icons8.com/ios-filled/100/metal-music.png"
        />
        <CompetitonLogo
          data-scroll
          onClick={() => setChoice("cultural")}
          title="Cultural"
          logoSrc="https://img.icons8.com/ios-filled/100/dancing-party.png"
        />
      </div>
      <div
        data-scroll
        className="border-4 border-[#311D3F]
        mt-10 mx-14"
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
