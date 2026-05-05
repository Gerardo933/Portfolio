import {
  ContainerFlex,
  Text,
  Image,
  Divider,
  HeaderLine,
  HudCard,
} from "@/styles/style";
import { ALT_IMAGES, TITLES } from "@/components/Home/constants";
import { theme } from "@/styles/theme";
import ReactLogo from "@/images/react.svg";
import NextJs from "@/images/nextjsLogo.svg";
import TypeScript from "@/images/typeScript.svg";
export const StackSections = () => {
  return (
    <ContainerFlex
      JustifyContent="start"
      AlignItems="start"
      Gap="24px"
      Padding="16px 0"
      Height="max-content"
      FlexDirection="column"
    >
      <ContainerFlex Width="min(40%, 100%)" ColumnGap="16px" Gap="16px">
        <Text
          FontFamily={theme.fonts.title}
          Color={theme.colors.accent}
          FontSize="1.5rem"
          FontWeight="700"
        >
          {TITLES.STACK}
        </Text>
        <Divider variant="dots" />
      </ContainerFlex>
      <ContainerFlex Gap="32px">
        <HudCard Width="50%" Height="160px">
          <ContainerFlex Gap="16px" Width="100%" Height="20px">
            <Text
              FontFamily={theme.fonts.title}
              FontWeight="700"
              Color={theme.colors.accent}
            >
              {TITLES.CORE}
            </Text>
            <Divider variant="dots" />
          </ContainerFlex>
          <ContainerFlex JustifyContent="space-between">
            <ContainerFlex FlexDirection="column">
              <Image
                src={ReactLogo}
                alt={ALT_IMAGES.REACT}
                Width="60px"
                Height="60px"
              />
              <Text FontFamily={theme.fonts.body} Color={theme.colors.bg}>
                {ALT_IMAGES.REACT}
              </Text>
            </ContainerFlex>
            <ContainerFlex FlexDirection="column">
              <Image
                src={NextJs}
                alt={ALT_IMAGES.NEXTJS}
                Width="60px"
                Height="60px"
              />
              <Text FontFamily={theme.fonts.body} Color={theme.colors.bg}>
                {ALT_IMAGES.NEXTJS}
              </Text>
            </ContainerFlex>
            <ContainerFlex FlexDirection="column">
              <Image
                src={TypeScript}
                alt={ALT_IMAGES.TYPESCRIPT}
                Width="60px"
                Height="60px"
              />
              <Text FontFamily={theme.fonts.body} Color={theme.colors.bg}>
                {ALT_IMAGES.TYPESCRIPT}
              </Text>
            </ContainerFlex>
          </ContainerFlex>
          <HeaderLine />
        </HudCard>
        <HudCard Width="50%">
          <ContainerFlex Gap="16px" Width="100%">
            <Text
              FontFamily={theme.fonts.title}
              FontWeight="700"
              Color={theme.colors.accent}
            >
              {TITLES.TOOLS}
            </Text>
            <ContainerFlex></ContainerFlex>
            <Divider variant="dots" />
          </ContainerFlex>
          <HeaderLine />
        </HudCard>
      </ContainerFlex>
    </ContainerFlex>
  );
};
