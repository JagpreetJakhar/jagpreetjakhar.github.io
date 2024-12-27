import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper/ClientWrapper";
import {BackgroundBeams} from '@/components/background/background'
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import FloatingNav from "@/components/Navbar/FloatingNav";
import { MdMenu, MdNightlight, MdLightMode, MdArticle, MdContactMail } from "react-icons/md";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navItems = [
    { name: "Home", link: "/", icon: <MdMenu size={20} /> },
    { name: "Projects", link: "/#projects", icon: <MdMenu size={20} /> },
    { name: "Experience", link: "/#experience", icon: <MdNightlight size={20} /> },
    { name: "Skills", link: "/#skills", icon: <MdLightMode size={20} /> },
    { name: "Blogs", link: "/blogs", icon: <MdArticle size={20} /> },
    { name: "Contact", link: "/#contact", icon: <MdContactMail size={20} /> },
  ];

  return (
    <html lang="en">
      <body>
      <ClientWrapper>
      <BackgroundBeams />
          <div id="root">
            <Navbar />
            <FloatingNav navItems={navItems} />
            <main>
              
              {children}</main>
            <Footer />
          </div>
          </ClientWrapper>
        <SpeedInsights />
      </body>
    </html>
  );
}
