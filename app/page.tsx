"use client";

import React from "react";

import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import Contact from "@/components/Contact/Contact";
import About from "@/components/About/About";
import Experience from "@/components/Experience/Experience";
import {BackgroundGradient} from "@/components/background/background-gradient"
export default function Home() {
  return (
    <div>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
      <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Contact /></BackgroundGradient>
      </section>
    </div>
  );
}
