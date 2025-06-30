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

import projectImg1 from "./assets/project-1.jpg";
import projectImg2 from "./assets/project-2.jpg";
import projectImg3 from "./assets/project-3.jpg";
import projectImg4 from "./assets/project-4.jpg";
import projectImg5 from "./assets/project-5.jpg";

import Theme1 from "./assets/red.png";
import Theme2 from "./assets/blueviolet.png";
import Theme3 from "./assets/blue.png";
import Theme4 from "./assets/magenta.png";
import Theme5 from "./assets/yellowgreen.png";
import Theme6 from "./assets/orange.png";
import Theme7 from "./assets/yellow.png";

// ========== LINKS ==========

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
    description: "Azimjon",
  },

  {
    title: "Last Name : ",
    description: "Jalilov",
  },

  {
    title: "Age : ",
    description: "26 Years",
  },

  {
    title: "Nationality : ",
    description: "Uzbek",
  },

  {
    title: "Freelance : ",
    description: "Available",
  },

  {
    title: "Address : ",
    description: "Uzbekistan",
  },

  {
    title: "Phone : ",
    description: "+998905977955",
  },

  {
    title: "Email : ",
    description: "azimjonjalilovking1301@gmail.com",
  },

  {
    title: "Telegram : ",
    description: "jalilovazimjon",
  },

  {
    title: "Langages : ",
    description: "Uzbek, English",
  },
];

// ========== STATS ==========
export const stats = [
  {
    no: "2+",
    title: "Years of <br /> Experience",
  },

  {
    no: "10+",
    title: "Completed <br /> Projects",
  },

  {
    no: "7+",
    title: "Happy <br /> Customers",
  },

  {
    no: "3+",
    title: " Certification in <br /> JavaScript and React",
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
    level: "Intermediate",
    category: "developer",
  },

  {
    id: 5,
    img: skillsImg5,
    title: "Tailwind",
    level: "Basic",
    category: "developer",
  },

  {
    id: 6,
    img: skillsImg6,
    title: "Figma",
    level: "Intermediate",
    category: "designer",
  },

  // {
  //   id: 7,
  //   img: skillsImg7,
  //   title: "Sketch",
  //   level: "Basic",
  //   category: "designer",
  // },

  // {
  //   id: 8,
  //   img: skillsImg8,
  //   title: "Adobe XD",
  //   level: "Basic",
  //   category: "designer",
  // },

  {
    id: 9,
    img: skillsImg9,
    title: "Photoshop",
    level: "Basic",
    category: "designer",
  },

  // {
  //   id: 10,
  //   img: skillsImg10,
  //   title: "InvisionApp",
  //   level: "Basic",
  //   category: "designer",
  // },
];

// ========== RESUME ==========
export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <RiBriefcase4Fill />,
    year: "2023 - Present",
    title: "Web Developer <span> Algorithm </span>",
    desc: "Designing and developing responsive web applications using modern JavaScript frameworks such as React. Collaborating with cross-functional teams to deliver scalable, maintainable, and user-friendly solutions. Continuously optimizing code performance and enhancing UI/UX.",
  },

  {
    id: 2,
    category: "experience",
    icon: <RiBriefcase4Fill />,
    year: "2021 - 2023",
    title: "Sales Manager <span>EPA</span>",
    desc: "Managed client relationships and developed sales strategies to drive revenue growth. Conducted market research, identified new opportunities, and collaborated with teams to meet sales targets efficiently.",
  },
  {
    id: 3,
    category: "education",
    icon: <RiGraduationCapFill />,
    year: "2017 - 2021",
    title:
      "Construction Engineering Degree <span>Namangan Engineering-Construction Institute</span>",
    desc: "Completed a Bachelor's degree in Construction Engineering with a focus on structural design, building materials, and project management. Gained hands-on experience through academic projects and practical training.",
  },

  {
    id: 4,
    category: "education",
    icon: <RiGraduationCapFill />,
    year: "2014 - 2017",
    title:
      "Exact Sciences Track <span>Namangan State University Academic Lyceum No.1</span>",
    desc: "Studied in the exact sciences track with a focus on mathematics, physics, and computer science. Developed strong analytical thinking skills and a solid foundation for further technical education.",
  },
];

// ========== PORTFOLIO ==========

export const portfolio = [
  {
    id: 1,
    img: projectImg1,
    title: "Coffee Website",
    description:
      "Short description of the project that was carried out in this portfolio.",
    skills: [skillsImg4, skillsImg5],
    link: "",
  },

  {
    id: 2,
    img: projectImg2,
    title: "Food Product Design",
    description:
      "Short description of the project that was carried out in this portfolio.",
    skills: [skillsImg6, skillsImg7],
    link: "",
  },

  {
    id: 3,
    img: projectImg3,
    title: "Restaurant Landing Page",
    description:
      "Short description of the project that was carried out in this portfolio.",
    skills: [skillsImg1, skillsImg2, skillsImg3],
    link: "",
  },

  {
    id: 4,
    img: projectImg4,
    title: "Barbershop Website",
    description:
      "Short description of the project that was carried out in this portfolio.",
    skills: [skillsImg4, skillsImg5],
    link: "",
  },

  {
    id: 5,
    img: projectImg5,
    title: "Construction Landing Page",
    description:
      "Short description of the project that was carried out in this portfolio.",
    skills: [skillsImg1, skillsImg2, skillsImg3],
    link: "",
  },
];

// ========== THEME ==========
export const themes = [
  {
    img: Theme1,
    hue: "4",
  },

  {
    img: Theme2,
    hue: "271",
  },

  {
    img: Theme3,
    hue: "225",
  },

  {
    img: Theme4,
    hue: "339",
  },

  {
    img: Theme5,
    hue: "80",
  },

  {
    img: Theme6,
    hue: "19",
  },

  {
    img: Theme7,
    hue: "42",
  },
];
