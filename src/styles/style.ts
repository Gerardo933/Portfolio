import { extractInteger } from "@/hook/FormatUtils";
import { IContainerFlex, IText, IFigure, IImage } from "@/styles/interface";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import NextImage, { ImageProps } from "next/image";
import React from "react";
import { breakpoints } from "@/styles/breakPoints";
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
  -webkit-background-clip: ${(props) => props.BackGroundClip || ""};
  -webkit-text-fill-color: ${(props) => props.FillColor || ""};
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
