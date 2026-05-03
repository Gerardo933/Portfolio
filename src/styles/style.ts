import NextImage, { ImageProps } from "next/image";
import { extractInteger } from "@/hook/FormatUtils";
import { IContainerFlex, IText, IFigure, IImage } from "@/styles/interface";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import React from "react";
import { breakpoints } from "@/styles/breakPoints";
import { theme } from "@/styles/theme";
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
  scrollSnapType:  ${(props) => props.ScrollSnapType || ""};
   scrollSnapAlign: ${(props) => props.ScrollSnapAlign || ""};
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
`;

export const Figure = styled.figure<IFigure>`
  width: ${(props) => props.Width || "100%"};
  height: ${(props) => props.Height || "100%"};
  position: ${(props) => props.Position || "relative"};
  overflow: ${(props) => props.Overflow || "hidden"};
  border-radius: ${(props) => props.Radius || "hidden"};
  margin: ${(props) => props.Margin || "hidden"};
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
  width: ${({ $expanded }) => $expanded ? '220px' : '56px'};
  min-width: 56px;
  height: 100vh;
  position: sticky;
  top: 0;
  background: ${theme.colors.panel_w};
  border-right: 1px solid rgba(0, 229, 255, 0.12);
  display: flex;
  flex-direction: column;
  padding: 2.5rem 0 2rem;
  gap: 2px;
  overflow: hidden;
  transition: width 0.25s ease;
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
  opacity: ${({ $expanded }) => $expanded ? 1 : 0};
  transition: opacity 0.15s ease;
`;

export const NavItem = styled.button<{ $active: boolean; $expanded: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ $expanded }) => $expanded ? '12px' : '0'};
  padding: ${({ $expanded }) => $expanded ? '13px 24px' : '13px 0'};
  justify-content: ${({ $expanded }) => $expanded ? 'flex-start' : 'center'};
  width: 100%;
  background: ${({ $active }) => $active ? 'rgba(0, 229, 255, 0.08)' : 'transparent'};
  border: none;
  border-left: 3px solid ${({ $active }) => $active ? theme.colors.accent : 'transparent'};
  color: ${({ $active }) => $active ? theme.colors.panelSoft : theme.colors.panelSoft};
  font-family: ${theme.fonts.body};
  font-size: 14px;
  font-weight: ${({ $active }) => $active ? '600' : '400'};
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease, border-left-color 0.2s ease,
              gap 0.25s ease, padding 0.25s ease;
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
  opacity: ${({ $expanded }) => $expanded ? 1 : 0};
  transition: opacity 0.15s ease 0.05s;
`;

export const Section = styled.section`
  height: 100vh;
  width: 100%;
  flex-shrink: 0;
  scroll-snap-align: start;
`;