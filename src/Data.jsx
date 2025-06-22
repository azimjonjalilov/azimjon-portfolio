// ========== LINKS ==========
import { FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen } from "react-icons/fa";
import { RiBriefcase4Fill, RiGraduationCapFill } from "react-icons/ri";

import skillsImg1 from "./assets/html-logo.svg";
import skillsImg2 from "./assets/css-logo.svg";
import skillsImg3 from "./assets/javascript-logo.svg";
import skillsImg4 from "./assets/react-logo.svg";
import skillsImg5 from "./assets/tailwind-css-logo.svg";

import skillsImg6 from "./assets/figma-logo.svg";
import skillsImg7 from "./assets/sketch-logo.svg";
import skillsImg8 from "./assets/adobe-xd-logo.svg";
import skillsImg9 from "./assets/adobe-photoshop-logo.svg";
import skillsImg10 from "./assets/invision-logo.svg";

export const links = [
  {
    name: "Home",
    icon: <FaHome className="nav-icon" />,
    path: "/",
  },

  {
    name: "About",
    icon: <FaUser className="nav-icon" />,
    path: "/about",
  },

  {
    name: "Portfolio",
    icon: <FaFolderOpen className="nav-icon" />,
    path: "/portfolio",
  },

  {
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav-icon" />,
    path: "/contact",
  },
];

// ========== INFO ==========
export const personalInfo = [
  {
    title: "First Name : ",
    description: "Steve",
  },

  {
    title: "Last Name : ",
    description: "Milner",
  },

  {
    title: "Age : ",
    description: "27 Years",
  },

  {
    title: "Nationality : ",
    description: "Tunisian",
  },

  {
    title: "Freelance : ",
    description: "Available",
  },

  {
    title: "Address : ",
    description: "Tunis",
  },

  {
    title: "Phone : ",
    description: "+21621184010",
  },

  {
    title: "Email : ",
    description: "you@mail.com",
  },

  {
    title: "Skype : ",
    description: "steve.milner",
  },

  {
    title: "Langages : ",
    description: "French, English",
  },
];

// ========== STATS ==========
export const stats = [
  {
    no: "12+",
    title: "Years of <br /> Experience",
  },

  {
    no: "97+",
    title: "Completed <br /> Projects",
  },

  {
    no: "81+",
    title: "Happy <br /> Customers",
  },

  {
    no: "53+",
    title: " Awards <br /> Won",
  },
];

// ========== SKILLS ==========
export const skill = [
  {
    id: 1,
    img: skillsImg1,
    title: "HTML",
    level: "Intermediate",
    category: "developer",
  },

  {
    id: 2,
    img: skillsImg2,
    title: "CSS",
    level: "Advanced",
    category: "developer",
  },

  {
    id: 3,
    img: skillsImg3,
    title: "JavaScript",
    level: "Intermediate",
    category: "developer",
  },

  {
    id: 4,
    img: skillsImg4,
    title: "React",
    level: "Basic",
    category: "developer",
  },

  {
    id: 5,
    img: skillsImg5,
    title: "Tailwind",
    level: "Intermediate",
    category: "developer",
  },

  {
    id: 6,
    img: skillsImg6,
    title: "Figma",
    level: "Advanced",
    category: "designer",
  },

  {
    id: 7,
    img: skillsImg7,
    title: "Sketch",
    level: "Basic",
    category: "designer",
  },

  {
    id: 8,
    img: skillsImg8,
    title: "Adobe XD",
    level: "Intermediate",
    category: "designer",
  },

  {
    id: 9,
    img: skillsImg9,
    title: "Photoshop",
    level: "Intermediate",
    category: "designer",
  },

  {
    id: 10,
    img: skillsImg10,
    title: "InvisionApp",
    level: "Basic",
    category: "designer",
  },
];

// ========== RESUME ==========
export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <RiBriefcase4Fill />,
    year: "2018 - Present",
    title: "Web Developer <span> Envato </span>",
    desc: "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit.",
  },

  {
    id: 2,
    category: "experience",
    icon: <RiBriefcase4Fill />,
    year: "2013 - 2018",
    title: "UI/UX Designer <span> Themeforest </span>",
    desc: "Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt.",
  },

  {
    id: 3,
    category: "experience",
    icon: <RiBriefcase4Fill />,
    year: "2005 - 2013",
    title: "Consultant <span> Videohive </span>",
    desc: "Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt.",
  },

  {
    id: 4,
    category: "education",
    icon: <RiGraduationCapFill />,
    year: "2015",
    title: "Engineering Degree <span> Oxford University </span>",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore.",
  },

  {
    id: 5,
    category: "education",
    icon: <RiGraduationCapFill />,
    year: "2012",
    title: "Master Degree <span> KIEV University </span>",
    desc: "Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt.",
  },

  {
    id: 6,
    category: "education",
    icon: <RiGraduationCapFill />,
    year: "2009",
    title: "Bachelor Degree <span> Tunis High School </span>",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore.",
  },
];
