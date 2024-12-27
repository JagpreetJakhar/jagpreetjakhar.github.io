import React from "react";
import "./Skills.css";
import { skills } from "../../data/portfolio";
import { getIcon } from "../../lib/utils/getIcons"; // Import getIcon
import {BackgroundGradient} from "@/components/background/background-gradient"
const Skills = () => {
  const { title, mySkills } = skills;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <section className="skills" id="skills">
        <h1>{title}</h1>
        <div className="skills-container-grid">
          {mySkills.map((skillSet, index) => (
            <article className="skills-card" key={index}>
              <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900">
              <h3 className="skills-title">{skillSet.title}</h3>
              <div className="skills-stack">
                {skillSet.skills.map((skill, index) => (
                  <span key={index}>
                    {getIcon(skill)}{skill}
                  </span>
                ))}
              </div>
              </BackgroundGradient>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
