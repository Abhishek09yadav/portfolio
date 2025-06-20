import { FaBug, FaTools, FaReact, FaNodeJs } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt, FaHtml5, FaCss3 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiPostman,
  SiGithub,
  SiTypescript,
  SiRedux,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export const techStack = [
  {
    name: "HTML",
    icon: <FaHtml5 size={40} color="#e34c26" />,
    bg: "rgba(227, 76, 38, 0.125)", // or "#e34c261F"
  },
  {
    name: "CSS",
    icon: <FaCss3 size={40} color="#264de4" />,
    bg: "rgba(38, 77, 228, 0.125)", // or "#264de420"
  },

  {
    name: "JavaScript",
    icon: <IoLogoJavascript size={40} color="#f7df1e" />,
    bg: "#f7df1e20",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={40} color="#3178c6" />,
    bg: "#3178c620",
  },
  {
    name: "React.js",
    icon: <FaReact size={40} color="#61dafb" />,
    bg: "#61dafb20",
  },
  {
    name: "Next.js",
    icon: <RiNextjsFill size={40} color="#ffffff" />,
    bg: "#ffffff20",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs size={40} color="#68a063" />,
    bg: "#68a06320",
  },
  {
    name: "Express.js",
    icon: <SiExpress size={40} color="#ffffff" />,
    bg: "#ffffff20",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size={40} color="#47a248" />,
    bg: "#47a24820",
  },
  {
    name: "Tailwind",
    icon: <RiTailwindCssFill size={40} color="#38bdf8" />,
    bg: "#38bdf820",
  },
  {
    name: "Redux",
    icon: <SiRedux size={40} color="#764abc" />,
    bg: "#764abc20",
  },
];

export const tools = [
  {
    name: "Git",
    icon: <FaGitAlt size={40} color="#f05032" />,
    bg: "#f0503220",
  },
  {
    name: "GitHub",
    icon: <SiGithub size={40} color="#ffffff" />,
    bg: "#ffffff20",
  },
  {
    name: "Postman",
    icon: <SiPostman size={40} color="#ff6c37" />,
    bg: "#ff6c3720",
  },
  {
    name: "VS Code",
    icon: <VscVscode size={40} color="#007acc" />,
    bg: "#007acc20",
  },
];
