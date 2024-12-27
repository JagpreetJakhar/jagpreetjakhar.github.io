import React from "react";
import "./Experience.css";
import { experience } from "../../data/portfolio";
import ReactMarkdown from "react-markdown";
import {BackgroundGradient} from "@/components/background/background-gradient"
const Experience = () => {
  const { title, experiences } = experience;
  return (
    <div className="max-w-3xl mx-auto p-4">
    <section className="experience" id="experience">
      
      <h1>{title}</h1>
      <div className="experience-container-grid">
      
        {experiences.map((experience, index) => (
         <BackgroundGradient key={index} className="rounded-[22px] bg-black dark:bg-zinc-900">
          <article className="experience-card" key={index}>
             
            <div className="job-title-duration-section">
              
              <h2 className="job-title">
                {experience.title} - <span>{experience.company}</span>
              </h2>
              <p className="duration">{experience.duration}</p>
            </div>
            
            <ReactMarkdown className="experience-description">
              {experience.description}
            </ReactMarkdown>
            
          </article>
          </BackgroundGradient>
        ))}
        
      </div>
      
    </section>
    </div>
  );
};

export default Experience;
