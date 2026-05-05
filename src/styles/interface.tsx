import { StaticImageData } from "next/image";

export interface IContainerFlex {
  Height?: string;
  Width?: string;
  FlexDirection?: string;
  Position?: string;
  Bottom?: string;
  Left?: string;
  JustifyContent?: string;
  AlignItems?: string;
  Gap?: string;
  BackGround?: string;
  Padding?: string;
  ColumnGap?: string;
  Border?: string;
  Cursor?: string;
  Margin?: string;
  Radius?: string;
  GridColumn?: string;
  OverFlowY?: string;
  ScrollSnapType?: string;
  ScrollSnapAlign?: string;
}
export interface IText {
  FontSize?: string;
  FontWeight?: string;
  Color?: string;
  TextAlign?: string;
  LineHeight?: string;
  FontFamily?: string;
  Cursor?: string;
  BackGround?: string;
  BackGroundClip?: string;
  FillColor?: string;
  Padding?: string;

}
export interface IFigure {
  Width?: string;
  Height?: string;
  Position?: string;
  Overflow?: string;
  Radius?: string;
  Margin?: string;
  Cursor?: string;
  HasHover?: boolean;
  PRight?: string;
  PBottom?: string;
  PLeft?: string;
  PTop?: string;
  ZIndex?: string;
}

export interface IImage {
  Height?: string;
  Width?: string;
  sizes?: string;
  layout?: string;
  fill?: boolean;
  Radius?: string;
  src: string | StaticImageData;
  objectFit?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  alt: string;
}
