import React from "react";
import netFlixLogo from "../assets/netflix.png";

function Header() {
  return (
    <div className="absolute z-10">
      <img
        className="max-w-fit w-40 px-4"
        src={netFlixLogo}
        alt="netflixLogo"></img>
    </div>
  );
}

export default Header;
