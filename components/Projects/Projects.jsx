import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "./Projects.css";
import { projects } from "../../data/portfolio";
import { getIcon } from "../../lib/utils/getIcons";
import {BackgroundGradient} from "@/components/background/background-gradient"
const Projects = () => {
  const { title, personalProjects } = projects;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <section className="projects" id="projects">
        <h1>{title}</h1>
        <div className="container-grid">
        
          {personalProjects.map((project, index) => (
            <BackgroundGradient key={index} className="rounded-[25px] bg-white dark:bg-zinc-900">
            <article className="project-card" key={index}>
              
              <h3 className="project-title">{project.title}</h3>
              
              <p className="project-description">{project.description}</p>
              <div className="technology-stack">
                {project.technologies.map((skill, index) => (
                  <span key={index}>
                    {getIcon(skill)} {skill}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="icon" size={30} />
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt className="icon" size={30} />
                  </a>
                )}
              </div>
              
            </article>
            </BackgroundGradient>
          ))}
         
        </div>
      </section>
    </div>
  );
};

export default Projects;
