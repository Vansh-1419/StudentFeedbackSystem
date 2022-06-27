import React from "react";
import "./Login.css";
import gimg from "./gimg.png";
import fimg from "./fimg.png";
import gitimg from "./gitimg.png";

const Loginacc = () => {
  return (
    <div className="icons">
      <img src={gimg} alt="google" className="g" />
      <img src={fimg} alt="facebook" className="g" />
      <img src={gitimg} alt="facebook" className="g" />
    </div>
  );
};

export default Loginacc;
