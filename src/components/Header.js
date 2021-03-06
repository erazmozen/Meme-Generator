import React from "react";
import trollFace from "../images/troll-face.png";

export default function Header() {
  return (
    <div className="wrapper">
      <header className="header">
        <img src={trollFace} className="header--image" />
        <h2 className="header--title">Meme Generator</h2>
        <img src={trollFace} className="header--image" />
      </header>
    </div>
  );
}
