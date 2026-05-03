'use client';
import { useEffect, useRef, useState } from "react";
import { ContainerFlex, Section } from "@/styles/style";
import { ResumeInformation } from "@/components/Home/ResumeInformation";
import { ExperienceSection } from "@/components/Home/ExperienceSection";
import { Sidebar } from "@/components/Sidebar/Sidebar";

const SECTION_IDS = ['resumen', 'experiencia'];

export const Home = () => {
  const [activeSection, setActiveSection] = useState('resumen');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: container, threshold: 0.5 }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ContainerFlex
      JustifyContent="start"
      AlignItems="start"
      FlexDirection="row"
      Height="100vh"
      BackGround="white"
    >
      <Sidebar activeSection={activeSection} onNavClick={handleNavClick} />
      <ContainerFlex
        ref={scrollRef}
        FlexDirection="column"
        OverFlowY="scroll"
        Height="100vh"
        ScrollSnapType="y mandatory"
        JustifyContent="start"
        AlignItems="start"
      >
        <Section id="resumen">
          <ResumeInformation />
        </Section>
        <Section id="experiencia">
          <ExperienceSection />
        </Section>
      </ContainerFlex>
    </ContainerFlex>
  );
};
