import React from "react";
import "./logo.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareWhatsapp } from "@fortawesome/free-brands-svg-icons";

export const Logo = () => {
  return (
    <a
      href="https://wa.me/584123689263"
      target="_blank"
      rel="noopener noreferrer"
      className="icon-sheen"
      aria-label="Contactar por WhatsApp"
    >
      <FontAwesomeIcon icon={faSquareWhatsapp} size="2x" color="#25D366" />
    </a>
  );
};
