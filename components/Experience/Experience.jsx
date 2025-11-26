import React from "react";
import "./Experience.css";
import { experience } from "../../data/portfolio";
import ReactMarkdown from "react-markdown";
import { BackgroundGradient } from "@/components/background/background-gradient";

const Experience = () => {
  const { title, experiences } = experience;

  // Helper to preprocess description for proper Markdown rendering
  const formatDescription = (desc) => {
    return desc
      .split("\n")
      .map((line) => line.trim())
      .map((line) => {
        // Keep headers (###) as-is
        if (line.startsWith("###")) return line;
        // Convert any non-empty line to a Markdown bullet
        return line ? `- ${line.replace(/^-/, "")}` : "";
      })
      .join("\n");
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <section className="experience" id="experience">
        <h1>{title}</h1>
        <div className="experience-container-grid">
          {experiences.map((exp, index) => (
            <BackgroundGradient
              key={index}
              className="rounded-[22px] bg-black dark:bg-zinc-900"
            >
              <article className="experience-card">
                <div className="job-title-duration-section">
                  <h2 className="job-title">
                    {exp.title} - <span>{exp.company}</span>
                  </h2>
                  <p className="duration">{exp.duration}</p>
                </div>

                <ReactMarkdown className="experience-description">
                  {formatDescription(exp.description)}
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

