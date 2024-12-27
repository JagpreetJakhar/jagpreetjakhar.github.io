import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { about } from "@/data/portfolio";
import "./About.css";

// Define the type for the `about` object
interface AboutData {
  title: string;
  description: string;
  cv: string;
  github: string;
  linkedin: string;
}

const About: React.FC = () => {
  const { title, description, cv, github, linkedin } = about as AboutData;

  return (
    <section className="about" id="about">
      <div className="max-w-3xl mx-auto p-4">
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="about-links">
        <a href={github} target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" size={30} />
        </a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn className="icon" size={30} />
        </a>
        <a href={cv} target="_blank" rel="noopener noreferrer">
          Download CV
        </a>
      </div>
      </div>
    </section>
  );
};

export default About;

