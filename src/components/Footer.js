import React from "react";
import twitter from "../image/twitter-icon.png";
import facebook from "../image/facebook-icon.png";
import instagram from "../image/insta-icon.png";
import github from "../image/github-icon.png";
const Footer = () => {
  return (
    <div className="f-container">
      <img src={twitter} alt="twitter" />
      <img src={facebook} alt="facebook" />
      <img src={instagram} alt="instagram" />
      <img src={github} alt="github" />
    </div>
  );
};

export default Footer;
