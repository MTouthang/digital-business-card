import React from "react";
import twitter from "../image/twitter-icon.png";
import facebook from "../image/facebook-icon.png";
import instagram from "../image/insta-icon.png";
import github from "../image/github-icon.png";
const Footer = () => {
  return (
    <div className="f-container">
      <a href="https://twitter.com/ngtouthang">
        <img src={twitter} alt="twitter" />
      </a>
      <a href="https://www.facebook.com/mamang.touthang.1">
        <img src={facebook} alt="facebook" />
      </a>
      <a href="https://www.instagram.com/ngamlenmang_touthang/">
        <img src={instagram} alt="instagram" />
      </a>
      <a href="https://github.com/MTouthang">
        <img src={github} alt="github" />
      </a>
    </div>
  );
};

export default Footer;
