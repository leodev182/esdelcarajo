import { useState } from "react";
import reactLogo from "./assets/rayitohd.svg";
import viteLogo from "/rayitohd.svg";
import "./App.css";
import { Image } from "./components/image/Image.jsx";

function App() {
  return (
    <>
      <h1 style={{ color: "white", fontFamily: "punk Typewriter" }}>
        Hola Mundo!
      </h1>
      <h2 style={{ color: "white", fontFamily: "punk Typewriter" }}>
        Esto es{" "}
      </h2>
      <Image photo="https://i.pinimg.com/originals/11/9e/d6/119ed6eb1fd070362540ef222f3a492d.png" />

      <h1 style={{ color: "white", fontFamily: "punk Typewriter" }}>
        EN CONSTRUCCION
      </h1>
    </>
  );
}

export default App;
