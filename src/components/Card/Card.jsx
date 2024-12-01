import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Countdown } from "../index.js";

import "./card.css";

export const Card = () => {
  const speed = 7;

  // Creamos una referencia para el ticket y el contenedor app
  const ticketRef = useRef(null);
  const appRef = useRef(null);

  useEffect(() => {
    // Creamos las timelines para GSAP
    const r = gsap.timeline({ repeat: -1 });
    const o = gsap.timeline({ repeat: -1 });
    const h = gsap.timeline({ repeat: -1 });

    // Creamos la animación de GSAP
    r.to(appRef.current, {
      "--r": "180deg",
      "--p": "0%",
      duration: speed,
      ease: "sine.in",
    });
    r.to(appRef.current, {
      "--r": "360deg",
      "--p": "100%",
      duration: speed,
      ease: "sine.out",
    });

    o.to(appRef.current, {
      "--o": 1,
      duration: speed / 2,
      ease: "power1.in",
    });
    o.to(appRef.current, {
      "--o": 0,
      duration: speed / 2,
      ease: "power1.out",
    });

    h.to(appRef.current, {
      "--h": "100%",
      duration: speed / 2,
      ease: "sine.in",
    });
    h.to(appRef.current, {
      "--h": "50%",
      duration: speed / 2,
      ease: "sine.out",
    });
    h.to(appRef.current, {
      "--h": "0%",
      duration: speed / 2,
      ease: "sine.in",
    });
    h.to(appRef.current, {
      "--h": "50%",
      duration: speed / 2,
      ease: "sine.out",
    });

    // Pausar y reanudar animaciones al pasar el ratón
    const handleMouseEnter = () => {
      r.pause();
      o.pause();
      h.pause();
    };

    const handleMouseLeave = () => {
      r.play();
      o.play();
      h.play();
    };

    const ticketElement = ticketRef.current;
    ticketElement.addEventListener("mouseenter", handleMouseEnter);
    ticketElement.addEventListener("mouseleave", handleMouseLeave);

    // Limpiar eventos al desmontar el componente
    return () => {
      ticketElement.removeEventListener("mouseenter", handleMouseEnter);
      ticketElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [speed]);

  return (
    <main id="app" ref={appRef}>
      <section className="ticket" ref={ticketRef}>
        <header className="front">
          <div className="holo"></div>
          <img className="logo" src="goyo.png" alt="Goyito" />
          <img className="devotosWhite" src="devotosWhite.png" alt="" />
          <aside className="divider"></aside>
        </header>
        <section className="back">
          <div className="holo"></div>
          <p id="id_number">NO 00004521</p>
          <div className="data">
            <p className="name">DELCARAJO⚡</p>
            <p className="githubid">
              <FontAwesomeIcon
                icon={faInstagram}
                size="1x"
                style={{ marginRight: "8px", marginTop: "3px" }}
              />
              <a href="https://www.instagram.com/esdelcarajo/">@esdelcarajo</a>
            </p>
          </div>
          <h3 className="advice">PROXIMAMENTE EN:</h3>
          <aside className="divider">
            <Countdown />
          </aside>
        </section>
      </section>
    </main>
  );
};
