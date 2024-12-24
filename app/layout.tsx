"use client";
import "./globals.css";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { ThemeProvider } from "@/context/ThemeContext";
import FloatingNav from "@/components/Navbar/FloatingNav";
import { MdLightMode, MdNightlight, MdMenu, MdClose } from "react-icons/md";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = [
    { name: "Projects", link: "#projects", icon: <MdMenu size={20} /> },
    { name: "Experience", link: "#experience", icon: <MdNightlight size={20} /> },
    { name: "Skills", link: "#skills", icon: <MdLightMode size={20} /> },
    { name: "Blogs", link: "/", icon: <MdClose size={20} /> },
    { name: "Contact", link: "#contact", icon: <MdClose size={20} /> }
    
  ];

  return (
    <html lang="en">
      <body>
        {/* Wrap the entire layout in the ThemeProvider to apply theme context */}
        <ThemeProvider>
          <div>
            <main>
              <Navbar />
              <FloatingNav navItems={navItems} />
            </main>
            {/* Render the children of RootLayout (content of pages) */}
            {children}
          </div>
          {/* Footer will be rendered after the content */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
