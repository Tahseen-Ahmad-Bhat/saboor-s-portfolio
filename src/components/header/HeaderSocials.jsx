import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.facebook.com/sobourmasroor.sobourmasroor?mibextid=ZbWKwL"
        target="_blank"
      >
        <FaFacebookF />
      </a>
      <a
        href="https://instagram.com/saboormasroor?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
        target="_blank"
      >
        <FiInstagram />
      </a>
      <a href="https://linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
    </div>
  );
};

export default HeaderSocials;
