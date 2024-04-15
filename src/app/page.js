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
