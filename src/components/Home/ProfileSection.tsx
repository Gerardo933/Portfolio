import { ContainerFlex, Text, Image, Divider } from "@/styles/style";
import { TITLES } from "@/components/Home/constants";
import { theme } from "@/styles/theme";
import FrontLogo from "@/images/frontLogo.png";
import { ProfileCard } from "@/components/Avatar/AvatarComponent";
import { StackSections } from "@/components/Home/StackContainer/Stack";
export const ProfileSection = () => {
  return (
    <ContainerFlex
      JustifyContent="start"
      AlignItems="start"
      ScrollSnapAlign="start"
      Padding="24px 12px"
      Gap="24px"
      FlexDirection="column"
      BackGround="white"
    >
      <Divider variant="glow" />

      <ContainerFlex ColumnGap="24px" Gap="24px">
        <ContainerFlex Width="mas-content" AlignItems="start" Padding="8px">
          <ProfileCard />
        </ContainerFlex>
        <ContainerFlex
          JustifyContent="start"
          AlignItems="start"
          FlexDirection="column"
          Gap="24px"
        >
          <ContainerFlex
            JustifyContent="start"
            AlignItems="start"
            Gap="24px"
            Height="max-content"
          >
            <ContainerFlex
              JustifyContent="start"
              AlignItems="start"
              FlexDirection="column"
              Position="relative"
              Width="max-content"
              Height="max-content"
              Gap="16px"
            >
              <Text
                FontFamily={theme.fonts.title}
                Color={theme.colors.panel}
                FontWeight="700"
                FontSize="clamp(1.4rem, 5vw, 2.5rem)"
              >
                {TITLES.NAME}
              </Text>
              <Divider variant="dots" />
              <Text
                FontWeight="500"
                FontFamily={theme.fonts.title}
                Color={theme.colors.accent}
                FontSize="clamp(1.1rem, 4vw, 2rem)"
              >
                {TITLES.JOB}
              </Text>
            </ContainerFlex>
            <ContainerFlex Width="max-content" AlignItems="start">
              <Image
                src={FrontLogo}
                alt={TITLES.JOB}
                Width="32px"
                Height="32px"
              />
            </ContainerFlex>
          </ContainerFlex>

          <ContainerFlex
            FlexDirection="column"
            JustifyContent="start"
            AlignItems="start"
            Height="max-content"
          >
            <Text
              FontWeight="500"
              FontFamily={theme.fonts.body}
              Color={theme.colors.bg}
              FontSize="clamp(0.9rem, 2.5vw, 1.5rem)"
            >
              {TITLES.Tecnologys}
            </Text>
            <Text
              FontFamily={theme.fonts.body}
              Color={theme.colors.bg}
              FontSize="clamp(0.9rem, 2.5vw, 1.5rem)"
            >
              {TITLES.LITTLE_RESUME}
            </Text>
            <Text
              FontFamily={theme.fonts.body}
              Color={theme.colors.bg}
              FontSize="clamp(0.9rem, 2.5vw, 1.5rem)"
            >
              {TITLES.DESCRIPTION}
            </Text>
          </ContainerFlex>
          <StackSections />
        </ContainerFlex>
      </ContainerFlex>
    </ContainerFlex>
  );
};
