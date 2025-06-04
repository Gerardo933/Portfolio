import { IContainerFlex, IText, IFigure, IImage } from "@/styles/interface";
import styled from "@emotion/styled";
import NextImage, { ImageProps } from "next/image";
import React from "react";
export const ContainerFlex = styled.div<IContainerFlex>`
  height: ${(props) => props.Height || "100%"};
  width: ${(props) => props.Width || "100%"};
  display: flex;
  flex-direction: ${(props) => props.FlexDirection || "row"};
  justify-content: ${(props) => props.JustifyContent || "center"};
  align-items: ${(props) => props.AlignItems || "center"};
  background: ${(props) => props.BackGround || ""};
  padding:  ${(props) => props.Padding || ""};
  column-gap:  ${(props) => props.ColumnGap || ""};
  gap: ${(props) => props.Gap || "0"};
  box-sizing: border-box;
  border: ${(props) => props.Border || ""};
  margin: ${(props) => props.Margin || "hidden"};
  boder-radius: ${(props) => props.Radius || "hidden"};
  border: ${(props) => props.Border || "hidden"};
`;
export const Text = styled.span<IText>`
  font-size: ${(props) => props.FontSize || "16px"};
  font-weight: ${(props) => props.FontWeight || "normal"};
  color: ${(props) => props.Color || "black"};
  text-align: ${(props) => props.TextAlign || "left"};
  line-height: ${(props) => props.LineHeight || "1.5"};
  font-family: ${(props) => props.FontFamily || "Arial, sans-serif"};
`;

export const Figure = styled.figure<IFigure>`
  width: ${(props) => props.Width || "100%"};
  height: ${(props) => props.Height || "100%"};
  position: ${(props) => props.Position || "relative"};
  overflow: ${(props) => props.Overflow || "hidden"};
  boder-radius: ${(props) => props.Radius || "hidden"};
  margin: ${(props) => props.Margin || "hidden"};
`;

export const Image = ({ alt, src }: IImage): React.ReactElement<ImageProps> => {
  return React.createElement(NextImage, {
    src,
    alt,
    width: 24,
    height: 24,
  });
};
