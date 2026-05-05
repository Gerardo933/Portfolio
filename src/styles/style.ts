import NextImage, { ImageProps } from "next/image";
import { extractInteger } from "@/hook/FormatUtils";
import {
  IContainerFlex,
  IText,
  IFigure,
  IImage,
  IHudCard,
} from "@/styles/interface";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import React from "react";
import { breakpoints } from "@/styles/breakPoints";
import { theme } from "@/styles/theme";
import { IDivider } from "@/components/Sidebar/Interface";
export const ContainerFlex = styled.div<IContainerFlex>`
  height: ${(props) => props.Height || "100%"};
  width: ${(props) => props.Width || "100%"};
  display: flex;
  flex-direction: ${(props) => props.FlexDirection || "row"};
  justify-content: ${(props) => props.JustifyContent || "center"};
  align-items: ${(props) => props.AlignItems || "center"};
  background: ${(props) => props.BackGround || ""};
  padding: ${(props) => props.Padding || ""};
  column-gap: ${(props) => props.ColumnGap || ""};
  gap: ${(props) => props.Gap || "0"};
  box-sizing: border-box;
  border: ${(props) => props.Border || ""};
  margin: ${(props) => props.Margin || "hidden"};
  border-radius: ${(props) => props.Radius || "hidden"};
  border: ${(props) => props.Border || "hidden"};
  cursor: ${(props) => props.Cursor || "auto"};
  overflow-y: ${(props) => props.OverFlowY || ""};
  scrollsnaptype: ${(props) => props.ScrollSnapType || ""};
  scrollsnapalign: ${(props) => props.ScrollSnapAlign || ""};
  @media (max-width: ${breakpoints.lg}) {
    align-items: stretch;
  }

  @media (max-width: ${breakpoints.md}) {
    padding: 1rem;
  }

  @media (max-width: ${breakpoints.sm}) {
    gap: 0.5rem;
    justify-content: center;
  }
`;
export const ContainerGrid = styled.div<IContainerFlex>`
  display: grid;
  grid-template-columns: ${(props) => props.GridColumn || "repeat(5, 1fr)"};
  gap: ${(props) => props.Gap || "1rem"};
  width: ${(props) => props.Width || "100%"};
  height: auto;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.Padding || "0"};
  box-sizing: border-box;

  @media (max-width: ${breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
`;
export const Text = styled.span<IText>`
  font-size: ${(props) => props.FontSize || "16px"};
  font-weight: ${(props) => props.FontWeight || "normal"};
  color: ${(props) => props.Color};
  text-align: ${(props) => props.TextAlign || "left"};
  line-height: ${(props) => props.LineHeight || "1.5"};
  font-family: ${(props) => props.FontFamily};
  cursor: ${(props) => props.Cursor || "auto"};
  background: ${(props) => props.BackGround || "auto"};
  -webkit-text-fill-color: ${(props) => props.FillColor || ""};
  padding: ${(props) => props.Padding || ""};
  letter-spacing: 1px;
`;

export const Figure = styled.figure<IFigure>`
  width: ${(props) => props.Width || "100%"};
  height: ${(props) => props.Height || "100%"};
  position: ${(props) => props.Position || "relative"};
  overflow: ${(props) => props.Overflow || "hidden"};
  border-radius: ${(props) => props.Radius || "hidden"};
  right: ${(props) => props.PRight || ""};
  left: ${(props) => props.PLeft || ""};
  top: ${(props) => props.PTop || ""};
  z-index: ${(props) => props.ZIndex || ""};
  bottom: ${(props) => props.PBottom || ""};
  margin: ${(props) => props.Margin || ""};
  cursor: ${(props) => props.Cursor || "auto"};
  img {
    transition: transform 0.3s ease-in-out;
  }

  ${(props) =>
    props.HasHover &&
    css`
      &:hover img {
        transform: scale(1.1);
      }
    `}
`;
export const Image = ({
  Height,
  Width,
  alt,
  src,
  fill,
  sizes,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: IImage): React.ReactElement<ImageProps> => {
  return React.createElement(NextImage, {
    src,
    alt,
    fill,
    sizes,
    width: Width ? extractInteger(Width) : undefined,
    height: Height ? extractInteger(Height) : undefined,
    onClick,
    onMouseEnter,
    onMouseLeave,
  });
};

export const SidebarWrapper = styled.nav<{ $expanded?: boolean }>`
  width: ${({ $expanded }) => ($expanded ? "220px" : "56px")};
  min-width: 56px;
  height: 100%;
  position: sticky;
  top: 0;
  background: ${theme.colors.bg};
  border-right: 1px solid rgba(0, 229, 255, 0.12);
  display: flex;
  flex-direction: column;
  padding: 2.5rem 0 2rem;
  gap: 2px;
  overflow: hidden;
  transition: width 0.25s ease;
  box-shadow: 2px 0 16px rgba(0, 0, 0, 0.5);
`;

export const AppHeader = styled.header`
  width: 100%;
  height: 56px;
  background: ${theme.colors.bg};
  border-bottom: 1px solid rgba(0, 229, 255, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 24px;
  box-sizing: border-box;
  flex-shrink: 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const SidebarTitle = styled.span<{ $expanded: boolean }>`
  font-family: ${theme.fonts.title};
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: ${theme.colors.important_title};
  text-transform: uppercase;
  padding: 0 0 1.5rem 19px;
  border-bottom: 1px solid rgba(0, 229, 255, 0.08);
  margin-bottom: 1rem;
  white-space: nowrap;
  opacity: ${({ $expanded }) => ($expanded ? 1 : 0)};
  transition: opacity 0.15s ease;
`;

export const NavItem = styled.button<{ $active: boolean; $expanded: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ $expanded }) => ($expanded ? "12px" : "0")};
  padding: ${({ $expanded }) => ($expanded ? "13px 24px" : "13px 0")};
  justify-content: ${({ $expanded }) => ($expanded ? "flex-start" : "center")};
  width: 100%;
  background: ${({ $active }) =>
    $active ? "rgba(0, 229, 255, 0.08)" : "transparent"};
  border: none;
  border-left: 3px solid
    ${({ $active }) => ($active ? theme.colors.accent : "transparent")};
  color: ${({ $active }) =>
    $active ? theme.colors.text : theme.colors.textDim};
  font-family: ${theme.fonts.body};
  font-size: 14px;
  font-weight: ${({ $active }) => ($active ? "600" : "400")};
  cursor: pointer;
  transition:
    background 0.2s ease,
    color 0.2s ease,
    border-left-color 0.2s ease,
    gap 0.25s ease,
    padding 0.25s ease;
  text-align: left;

  &:hover {
    background: rgba(0, 229, 255, 0.06);
    color: ${theme.colors.accentSoft};
    border-left-color: rgba(0, 229, 255, 0.4);
  }
`;

export const NavIcon = styled.span`
  font-size: 15px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

export const NavLabel = styled.span<{ $expanded: boolean }>`
  white-space: nowrap;
  opacity: ${({ $expanded }) => ($expanded ? 1 : 0)};
  transition: opacity 0.15s ease 0.05s;
`;

export const Section = styled.section`
  height: 100vh;
  width: 100%;
  flex-shrink: 0;
  scroll-snap-align: start;
`;

export const Divider = styled.div<IDivider>`
  width: 100%;
  position: relative;

  height: ${(props) => (props.variant === "basic" ? "auto" : "1px")};

  ${(props) =>
    props.variant === "basic" &&
    `
      border-bottom: 1px solid rgba(0, 200, 255, 0.2);
    `}

  ${(props) =>
    props.variant === "gradient" &&
    `
      background: linear-gradient(
        90deg,
        transparent,
        rgba(0, 200, 255, 0.6),
        transparent
      );
    `}

  ${(props) =>
    props.variant === "glow" &&
    `
      background: linear-gradient(
        90deg,
        transparent,
        rgba(0, 200, 255, 0.8),
        transparent
      );
      box-shadow: 0 0 8px rgba(0, 200, 255, 0.4);
    `}

  ${(props) =>
    props.variant === "dots" &&
    `
      background: linear-gradient(
        90deg,
        rgba(0, 200, 255, 0.6),
        transparent
      );

      height: 1px;
    `}

  /* 🔵 Circulitos del lado derecho */
  ${(props) =>
    props.variant === "dots" &&
    `
      &::after {
        content: "";
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);

        width: 24px;
        height: 6px;

        background:
          radial-gradient(circle, rgba(0,200,255,0.9) 2px, transparent 2px),
          radial-gradient(circle, rgba(0,200,255,0.6) 2px, transparent 2px),
          radial-gradient(circle, rgba(0,200,255,0.3) 2px, transparent 2px);

        background-size: 6px 6px;
        background-repeat: no-repeat;
        background-position:
          0px center,
          8px center,
          16px center;
      }
    `}
`;
export const HeaderLine = styled.div`
  height: 2px;
  width: 80px;

  background: linear-gradient(90deg, rgba(0, 200, 255, 0.8), transparent);

  box-shadow: 0 0 6px rgba(0, 200, 255, 0.4);
`;

export const HudCard = styled.div<IHudCard>`
  position: relative;
  padding: 20px;
  border-radius: 12px;
  width: ${(props) => props.Width || "100%"};
  height: ${(props) => props.Height || "100%"};
  background: rgba(255, 255, 255, 0.02);

  /* Forma recortada */
  clip-path: polygon(
    12px 0%,
    calc(100% - 12px) 0%,
    100% 12px,
    100% calc(100% - 12px),
    calc(100% - 12px) 100%,
    12px 100%,
    0% calc(100% - 12px),
    0% 12px
  );

  border: 1px solid rgba(0, 200, 255, 0.25);
`;
