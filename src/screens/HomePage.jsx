import React, { useEffect, useRef } from "react";
import NavBar from "../components/NavBar";
import "../styles/homepage.css";

import Typed from "typed.js";

export default function HomePage() {
  const typingIntro = useRef(null);
  const typed = useRef(null);
  useEffect(() => {
    const introSentence = {
      strings: ["Modulus", "Building Distributed Infrastructure At Scale"],
      typeSpeed: 100,
      backSpeed: 70,
    };
    typed.current = new Typed(typingIntro.current, introSentence);
    return () => {
      typed.current.destroy();
    };
  }, []);
  return (
    <div className="home-wrapper">
      <NavBar />
      <div className="home-content">
        <div className="typer">
          <span className="intro" ref={typingIntro} />
        </div>
        <button className="home-btn">Know More</button>
      </div>
    </div>
  );
}
