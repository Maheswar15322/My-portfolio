import React from "react";
import "./Project.css";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import ToDo from "../../assets/ToDo.jpeg";
import E_Commerce from "../../assets/E-Commerce.png";
import Movie from "../../assets/Movie.jpeg";
import calculator from "../../assets/calculator.png";
import portfolio from "../../assets/portfolio.jpeg";

const projects = [
  {
    title: "E-Commerce App",
    desc: "ShopX is a modern React e-commerce application with Firebase authentication, cart, wishlist, and responsive design.",
    tech: ["React", "API", "CSS","firebase"],
    image: E_Commerce,
    live: "https://shop-x-one.vercel.app/",
    github: "https:/github.com/Maheswar15322/Shop-X-",
  },
  {
    title: "Movie App",
    desc: "Browse trending movies, ratings, and details using external movie APIs.",
    tech: ["React", "TMDB API", "CSS"],
    image: Movie,
    live: "#",
    github: "#",
  },
  {
    title: "Portfolio Website",
    desc: "Modern personal portfolio showcasing projects, skills, and services.",
    tech: ["React", "Framer Motion"],
    image: portfolio,
    live: "#",
    github: "#",
  },
  {
    title: "To-Do App",
    desc: "Task management application with add, update, and delete functionality.",
    tech: ["React", "Local Storage"],
    image: ToDo,
    live: "#",
    github: "#",
  },
  {
    title: "Calculator App",
    desc: "Responsive calculator with modern UI and smooth user interactions.",
    tech: ["JavaScript", "CSS"],
    image: calculator,
    live: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-title">
        <h1>My Projects</h1>
      </div>

      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            whileHover={{
              y: -10,
            }}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-content">
              <h2>{project.title}</h2>

              <p>{project.desc}</p>

              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>

              <div className="project-buttons">
                <a href={project.live} target="_blank" rel="noreferrer">
                  <HiOutlineExternalLink />
                  Demo
                </a>

                <a href={project.github} target="_blank" rel="noreferrer">
                  <FaGithub />
                  Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
