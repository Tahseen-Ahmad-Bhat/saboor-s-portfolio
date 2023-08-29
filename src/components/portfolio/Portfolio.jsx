import React from "react";
import "./portfolio.css";

const Portfolio = () => {
  const projects = [
    {
      title: "Event Planning: College Cultural Fest",
      description:
        "Coordinated and managed various aspects of our college's annual cultural fest, including stage setups, guest interactions, and talent showcases.",
    },
    {
      title: "Hospitality Seminar Participation",
      description:
        "Engaged actively in a hospitality industry seminar, learning from industry experts, networking with peers, and gaining insights into modern hospitality trends.",
    },
    {
      title: "Guest Relations Workshop",
      description:
        "Participated in a guest relations workshop, where I developed communication and problem-solving skills to ensure positive guest experiences.",
    },
    {
      title: "Sustainable Practices Awareness",
      description:
        "Explored sustainable practices within the hospitality sector, creating awareness campaigns in college about the importance of eco-friendly initiatives.",
    },
    {
      title: "Hotel Tour Guiding",
      description:
        "Acted as a tour guide for prospective students and visitors to our college's hotel management facilities, highlighting the various departments and facilities.",
    },
    {
      title: "Team Building Exercise",
      description:
        "Led a team-building activity in college, fostering collaboration and effective communication among fellow students to achieve shared goals.",
    },
    // Add more projects here
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
