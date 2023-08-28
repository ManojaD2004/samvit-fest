"use client";
import Header from "./components/Header";
import Feed from "./components/Feed";
import Events from "./components/Events";
import AboutUs from "./components/AboutUs";
import Competition from "./components/Competition";
import Sponsorship from "./components/Sponsorship";
import Register from "./components/Register";
import Credits from "./components/CreditsPage";
import Lines from "./components/Lines";
import { useEffect, useState } from "react";
import CoOrdinator from "./components/CoOrdinator";
import Brochure from "./components/Brochure";
import { AnimatePresence } from "framer-motion";
import Loading from "./components/Loading";
import Footer from "./components/Footer";

export default function Home() {
  const [LocoScroll, setLocoScroll] = useState(null);
  const [brImg, setBrImg] = useState(null);

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
          <Lines />
          <Feed />
          <Events />
          <Competition setBrImg={setBrImg} />
          {/* <Sponsorship /> */}
          <AboutUs />
          <CoOrdinator />
          <Register />
          <Footer />
          {/* <Credits /> */}
        </>
      )}
    </main>
  );
}
