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
import Switch from "./components/Switch";
import { useEffect, useState } from "react";
import CoOrdinator from "./components/CoOrdinator";
import Brochure from "./components/Brochure";

export default function Home() {
  const [LocoScroll, setLocoScroll] = useState(null);
  const [brImg, setBrImg] = useState(null);
  console.log(brImg);

  useEffect(() => {
    async function getLocomotive() {
      const Locomotive = (await import("locomotive-scroll")).default;
      const scroll = new Locomotive({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
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
      {brImg && <Brochure key={Math.random()} brImg={brImg} setBrImg={setBrImg} />}
      <Switch />
      <Lines />
      <Header scroll={LocoScroll} />
      <Feed />
      <Events />
      <Competition setBrImg={setBrImg} />
      {/* <Sponsorship /> */}
      <AboutUs />
      <CoOrdinator />
      <Register />
      <Credits />
    </main>
  );
}
