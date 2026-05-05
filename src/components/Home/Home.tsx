"use client";
import { useEffect, useRef, useState } from "react";
import { AppHeader, ContainerFlex, Section } from "@/styles/style";
import { ResumeInformation } from "@/components/Home/ResumeInformation";
import { ExperienceSection } from "@/components/Home/ExperienceSection";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { SECTION_IDS } from "@/components/Sidebar/Constants.utils";
import { ProfileSection } from "@/components/Home/ProfileSection";
import { ContactContainer } from "@/components/Home/ContactContainer";

export const Home = () => {
  const [activeSection, setActiveSection] = useState("profile");
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
      { root: container, threshold: 0.5 },
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ContainerFlex
      FlexDirection="column"
      Height="100vh"
      JustifyContent="start"
      AlignItems="start"
    >
      <AppHeader>
        <ContactContainer />
      </AppHeader>
      <ContainerFlex
        JustifyContent="start"
        AlignItems="start"
        FlexDirection="row"
        Height="calc(100vh - 56px)"
      >
        <Sidebar activeSection={activeSection} onNavClick={handleNavClick} />
        <ContainerFlex
          ref={scrollRef}
          FlexDirection="column"
          OverFlowY="scroll"
          Height="100%"
          ScrollSnapType="y mandatory"
          JustifyContent="start"
          AlignItems="start"
        >
          <Section id="profile">
            <ProfileSection />
          </Section>
          <Section id="resume">
            <ResumeInformation />
          </Section>
          <Section id="experience">
            <ExperienceSection />
          </Section>
        </ContainerFlex>
      </ContainerFlex>
    </ContainerFlex>
  );
};
