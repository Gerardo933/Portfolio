"use client";
import { Image, Text } from "@/styles/style";
import {
  Background,
  Card,
  Footer,
  ImageWrapper,
  SideGlow,
  StatusDot,
} from "@/components/Avatar/AvatarStyle";
import { TITLES } from "@/components/Home/constants";
import Avatar from "@/images/avatar.jpg";
import { theme } from "@/styles/theme";

export const ProfileCard = () => {
  return (
    <Card>
      <Background />
      <SideGlow />

      <ImageWrapper>
        <Image src={Avatar} alt={TITLES.ALT_AVATAR} fill />
      </ImageWrapper>

      <Footer>
        <Text
          FontSize="12px"
          Color="#00c8ff"
          FontFamily={theme.fonts.body}
          style={{ letterSpacing: "1px" }}
        >
          {TITLES.AVIABLE}
        </Text>
        <StatusDot />
      </Footer>
    </Card>
  );
};
