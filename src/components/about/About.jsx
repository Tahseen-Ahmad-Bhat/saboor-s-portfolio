import React from "react";
import "./about.css";

import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img
              src="https://res.cloudinary.com/dukwfcwcm/image/upload/v1693298116/Saboor3_b4doi7.jpg"
              alt="About Image"
            />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>10+ Attended</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>

          <div className="about__content-textContainer">
            <div className="about__content-text">
              <p>
                Hello, I'm Saboor Ahmad Bhat! A dedicated hotel management
                student with a passion for delivering exceptional guest
                experiences. Throughout my studies, I've developed a deep
                understanding of hospitality operations, customer service, and
                event planning.
              </p>

              <p>
                My goal is to make every guest's stay memorable, combining my
                love for the industry with a commitment to excellence. When I'm
                not immersed in hotel management, you'll find me exploring new
                cuisines and cultures, and pursuing my love for photography.
              </p>
            </div>
          </div>

          <div className="about__content-btn">
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
