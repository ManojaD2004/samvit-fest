"use client";
import Header from "./components/Header";
import Feed from "./components/Feed";
import Events from "./components/Events";
import AboutUs from "./components/AboutUs";
import Competition from "./components/Competition";
// import Sponsorship from "./components/Sponsorship";
import Register from "./components/Register";
// import Credits from "./components/CreditsPage";
import db from "./firebase/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import Lines from "./components/Lines";
import { useEffect, useState } from "react";
import CoOrdinator from "./components/CoOrdinator";
import Brochure from "./components/Brochure";
import { AnimatePresence } from "framer-motion";
import Loading from "./components/Loading";
import Footer from "./components/Footer";
// import BrouchreDownloadPopUp from "./components/BrouchreDownloadPopUp";

export default function Home() {
  const [LocoScroll, setLocoScroll] = useState(null);
  const [brImg, setBrImg] = useState(null);
  // const [brDwload, setBrDwload] = useState(true);
  const [countViews, setCountViews] = useState(null);

  useEffect(() => {
    async function logEvents() {
      const docRef = doc(db, "count", "views");
      const docSnap = await getDoc(docRef);
      let countViews;
      if (docSnap.exists()) {
        const docSnapData = docSnap.data();
        countViews = docSnapData.countViews;
        countViews = countViews + 1;
      } else {
        null;
      }
      await setDoc(doc(db, "count", "views"), {
        countViews: countViews,
      });
      setCountViews(countViews);
    }

    logEvents();
  }, []);

  useEffect(() => {
    async function getLocomotive() {
      const Locomotive = (await import("locomotive-scroll")).default;
      const scroll = new Locomotive({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        multiplier: 1.25,
        mobile: {
          smooth: true,
        },
        smartphone: {
          smooth: true,
        },
      });
      new ResizeObserver(() => {
        scroll.update();
      }).observe(document.querySelector("[data-scroll-container]"));
      setLocoScroll(scroll);
    }

    getLocomotive();
  }, []);

  // useEffect(() => {
  //   const brochure = {
  //     all: [],
  //     literary: ["l_debate", "l_quiz"],
  //     art: [
  //       "a_face",
  //       "a_pencil",
  //       "a_paint",
  //       "media_reels",
  //       "media_short",
  //       "m_mad",
  //     ],
  //     esports: ["esports", "esports", "esports"],
  //     tech: ["tech_css", "tech_code", "tech_quiz", "ce", "tech_paper"],
  //     misc: ["fashion", "dj", "treasure", "comedy"],
  //     cultural: [
  //       "cd_group",
  //       "cd_solo",
  //       "ws_group",
  //       "ws_solo",
  //       "battle_of_bands",
  //       "c_music",
  //       "w_music",
  //     ],
  //   };

  //   const competitonList = {
  //     all: [],
  //     literary: ["debate.png", "gk_quiz.jpg"],
  //     art: [
  //       "face_painting.jpg",
  //       "pencil_sketch.jpg",
  //       "painting.jpg",
  //       "reels.jpeg",
  //       "short-film.jpeg",
  //       "mad-ads.jpg",
  //     ],
  //     esports: ["bgmi.jpg", "cod.jpg", "free_fire.jpg"],
  //     tech: [
  //       "css.jpg",
  //       "python.jpg",
  //       "tech_quiz.jpeg",
  //       "cyber_etimology.jpeg",
  //       "paper_present.jpg",
  //     ],
  //     misc: [
  //       "fashion_show.jpeg",
  //       "dj_night.jpg",
  //       "treasure_hunt.jpg",
  //       "stand_up_comedy.jpg",
  //     ],
  //     cultural: [
  //       "classical_group.jpg",
  //       "classical_solo.jpg",
  //       "western_group.jpg",
  //       "western_solo.jpg",
  //       "battle-of-the-bands.jpg",
  //       "classical_music.jpg",
  //       "western_music.jpg",
  //     ],
  //   };

  //   competitonList.all = [
  //     ...competitonList.misc,
  //     ...competitonList.esports,
  //     ...competitonList.cultural,
  //     ...competitonList.tech,
  //     ...competitonList.art,
  //     ...competitonList.literary,
  //   ];
  //   brochure.all = [
  //     ...brochure.misc,
  //     ...brochure.esports,
  //     ...brochure.cultural,
  //     ...brochure.tech,
  //     ...brochure.art,
  //     ...brochure.literary,
  //   ];

  //   function loadImgPromise(imgElement) {
  //     return new Promise((resolve, reject) => {
  //       const img1 = new window.Image();
  //       img1.loading = "eager";
  //       img1.alt = "";
  //       img1.className = "my-object-fill";
  //       img1.onload = function () {
  //         resolve(img1);
  //       };
  //       img1.onerror = function () {
  //         reject("error");
  //       };
  //       img1.src = imgElement;
  //       // console.log(img1.complete);
  //     });
  //   }

  //   async function loadImg() {
  //     try {
  //       for (let uniqueKey in competitonList) {
  //         const competitonListSubList = competitonList[uniqueKey];
  //         for (let index = 0; index < competitonListSubList.length; index++) {
  //           const element = `/competition_images/${uniqueKey}/${competitonListSubList[index]}`;
  //           const data = await loadImgPromise(element);
  //           console.log(data.complete);
  //           if (data.complete) {
  //             continue;
  //           }
  //         }
  //       }
  //       for (let uniqueKey in brochure) {
  //         const brochureSubList = brochure[uniqueKey];
  //         for (let index = 0; index < brochureSubList.length; index++) {
  //           const element = `/brochure/${uniqueKey}/${brochureSubList[index]}.png`;
  //           const data = await loadImgPromise(element);
  //           console.log(data.complete);
  //           if (data.complete) {
  //             continue;
  //           }
  //         }
  //       }
  //       setLoadingPreloadImages(true);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   loadImg();
  // }, []);

  return (
    <main data-scroll-container className="relative">
      <AnimatePresence mode="wait">
        {brImg && <Brochure key={brImg} brImg={brImg} setBrImg={setBrImg} />}
      </AnimatePresence>
      <Header scroll={LocoScroll} />
      {LocoScroll === null ? (
        <Loading />
      ) : (
        <>
          {/* <AnimatePresence mode="wait">
            {brDwload && (<BrouchreDownloadPopUp setBrDwload={setBrDwload} />)}
          </AnimatePresence> */}
          <Lines />
          <Feed />
          <Events />
          <Competition
            setBrImg={setBrImg}
          />
          {/* <Sponsorship /> */}
          <AboutUs />
          <CoOrdinator />
          <Register />
          <Footer countViews={countViews} />
          {/* <Credits /> */}
        </>
      )}
    </main>
  );
}
