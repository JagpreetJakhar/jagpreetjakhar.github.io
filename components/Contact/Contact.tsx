import './Contact.css'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { RiSendPlaneFill } from 'react-icons/ri';
import { about } from "@/data/portfolio";

interface AboutData {
  title: string;
  description: string;
  cv: string;
  github: string;
  linkedin: string;
}
const Contact = () => {
  const { github, linkedin } = about as AboutData;
  return (
    <section className="contact" id="contact">
      <div className="contact-me">
        <a href="mailto:jagpreetjakhar94@gmail.com" className="contact-link">
          Contact me
        </a>
        <div className="social-links">
          <a href={github} target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub size={30} />
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedinIn size={30} />
          </a>
          <RiSendPlaneFill size={30} className="send-icon" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
