import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdWork } from "react-icons/md"; // para OCCMundial

import Link from "next/link";
import { ContainerFlex } from "@/styles/style";
export const Footer = () => {
  return (
    <ContainerFlex
      as="footer"
      JustifyContent="center"
      AlignItems="center"
      Gap="24px"
      Height="120px"
      Padding="16px"
      BackGround="linear-gradient(165deg,rgba(0, 0, 0, 1) 0%, rgba(0, 24, 38, 1) 100%)"
      Width="100%"
    >
      {/* LinkedIn */}
      <Link
        href="https://www.linkedin.com/in/tu-perfil"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={32} color="#0e76a8" />
      </Link>

      {/* GitHub */}
      <Link
        href="https://github.com/tu-usuario"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={32} color="#fff" />
      </Link>

      {/* OCCMundial */}
      <Link
        href="https://www.occ.com.mx/empleos/tu-perfil"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MdWork size={32} color="#4cafef" />
      </Link>
    </ContainerFlex>
  );
};
