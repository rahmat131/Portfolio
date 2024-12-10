import React from "react";
import "./styles.css";
import p1Image from "./img/p1.jpg";
import p2Image from "./img/p2.jpg";
import p3Image from "./img/p3.jpg";
// import p4Image from "./img/p4.jpg";

const Projects = () => {
  const projectData = [
    {
      id: 1,
      image: p1Image, // Replace with actual image path
      title: "Velox CV",
      description: "Create a stunning CV that stands out in just a few minutes.",
      link: "https://veloxcv.com",
    },
    {
      id: 2,
      image: p2Image, // Replace with actual image path
      title: "Little Lemon Restaurant",
      description: "A hands-on project prepared while learning 'Meta Front End'.",
      link: "https://littlelemon-restaurant.com",
    },
    {
      id: 3,
      image: p3Image, // Replace with actual image path
      title: "My Store",
      description: "A hands-on project prepared while learning 'Meta Front End'.",
      link: "https://littlelemon-restaurant.com",
    },
    {
      id: 4,
      image: p2Image, // Replace with actual image path
      title: "Test",
      description: "A hands-on project prepared while learning 'Meta Front End'.",
      link: "https://littlelemon-restaurant.com",
    },
  ];

  return (
      <div className="wrapper-pr">
    <section id="projects" className="projects">
      <h2 className="projects-title">Featured Projects</h2>
      <div className="project-cards">
        {projectData.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Go to Site →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
      </div>
  );
};

export default Projects;
