import {
  FaUser,
  FaFileAlt,
  FaBriefcase,
  FaGithub,
  FaFolder,
} from "react-icons/fa";
export const navItems = [
  { id: "profile", label: "Perfil", icon: FaUser },
  { id: "resume", label: "Resumen", icon: FaFileAlt },
  { id: "experience", label: "Experiencia", icon: FaBriefcase },
  { id: "repository", label: "Repositorio", icon: FaGithub },
  { id: "proyects", label: "Proyectos", icon: FaFolder },
  { id: "contact", label: "Proyectos", icon: FaFolder },
];
export const SECTION_IDS = ["resume", "experience", "profile"];
