"use client";
import { useState } from "react";
import {
  NavIcon,
  NavItem,
  NavLabel,
  SidebarTitle,
  SidebarWrapper,
} from "@/styles/style";
import { navItems } from "@/components/Sidebar/Constants.utils";
import { TITLES } from "@/components/Home/constants";

export const Sidebar = () => {
  const [active, setActive] = useState("perfil");
  const [expanded, setExpanded] = useState(false);

  return (
    <SidebarWrapper
      $expanded={expanded}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <SidebarTitle $expanded={expanded}>{TITLES.HOME}</SidebarTitle>
      {navItems.map(({ id, label, icon: Icon }) => (
        <NavItem
          key={id}
          $active={active === id}
          $expanded={expanded}
          onClick={() => setActive(id)}
        >
          <NavIcon>
            <Icon />
          </NavIcon>
          {expanded && <NavLabel $expanded={expanded}>{label}</NavLabel>}
        </NavItem>
      ))}
    </SidebarWrapper>
  );
};
