import React from "react";
import "./header.css";
import CTA from "./CTA";

import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container ">
        <h5>Hello I'm</h5>
        <h1>Saboor Ahmad Bhat</h1>
        <h5 className="text-light">Hotel Management Student</h5>
        <CTA />

        <HeaderSocials />

        <div className="me">
          <img
            src="https://res.cloudinary.com/dukwfcwcm/image/upload/v1693297302/Saboor2_v65lru.png"
            alt="me"
          />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
