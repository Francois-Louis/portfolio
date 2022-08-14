import './app.scss';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Projects from '../Projects/projects';
import Profile from '../Profile/profile';
import Error from '../Error/error';
import Gallery from "../Gallery/gallery";
import * as React from 'react';
import {useEffect} from "react";
import gsap from "gsap";

const App = () => {
  const mq = window.matchMedia("(min-width: 1024px)");

    useEffect(() => {
      if (mq.matches) {
        motionMouse()
      }

      function motionMouse() {
        gsap.set(".ball", {xPercent: -50, yPercent: -50});

        const ball = document.querySelector(".ball");
        const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        const mouse = { x: pos.x, y: pos.y };
        const speed = 0.35;

        const xSet = gsap.quickSetter(ball, "x", "px");
        const ySet = gsap.quickSetter(ball, "y", "px");

        window.addEventListener("mousemove", e => {
          mouse.x = e.x;
          mouse.y = e.y;
        });

        gsap.ticker.add(() => {

          // adjust speed for higher refresh monitors
          const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

          pos.x += (mouse.x - pos.x) * dt;
          pos.y += (mouse.y - pos.y) * dt;
          xSet(pos.x);
          ySet(pos.y);
        });
      }
    }, );
    return (
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/projets" element={<Projects />} />
          <Route path="/projets/boules-de-poil" element={<Gallery toShow={0}/>} />
          <Route path="/projets/atelier-legoff" element={<Gallery toShow={1}/>} />
          <Route path="/profil" element={<Profile />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
          <div className="ball"></div>
      </div>
  );
}

export default App;
