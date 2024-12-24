"use client";

import React, { useState, useEffect } from "react";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import Contact from "@/components/Contact/Contact";
import About from "@/components/About/About";
import Experience from "@/components/Experience/Experience";
export default function Home() {
  return (
    <div>
      <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
     </div>
 );
}
