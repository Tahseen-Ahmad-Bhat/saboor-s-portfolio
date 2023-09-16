import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

// TostContainer

import NotificationContainer from "./util/Notification";
import Overlay from "./components/modal/Overlay";

const App = () => {
  const [displayNav, setDisplayNav] = useState(true);
  const [oldScrollPos, setOldScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (oldScrollPos > window.scrollY) {
        setOldScrollPos(window.scrollY);
        setDisplayNav(true);
      }
      if (oldScrollPos < window.scrollY) {
        setOldScrollPos(window.scrollY);
        setDisplayNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [oldScrollPos]);

  return (
    <div className="app">
      <>
        <Header />
        <Nav displayNav={displayNav} />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </>

      <NotificationContainer />

      <Overlay />
    </div>
  );
};

export default App;
