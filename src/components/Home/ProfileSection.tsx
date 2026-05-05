import { AvatarContainer } from "@/components/Avatar/AvatarStyle";
import { ContainerFlex, Text, Image, Figure } from "@/styles/style";
import { TITLES } from "@/components/Home/constants";
import { theme } from "@/styles/theme";
import FrontLogo from "@/images/frontLogo.png";
import Avatar from "@/images/avatar.jpg";
import { ContactContainer } from "@/components/Home/ContactContainer";
export const ProfileSection = () => {
  return (
    <ContainerFlex
      JustifyContent="start"
      AlignItems="start"
      ScrollSnapAlign="start"
      Padding="24px 12px"
      Gap="24px"
      FlexDirection="column"
    >
      <ContainerFlex Height="60px">
        <ContainerFlex AlignItems="end" JustifyContent="end">
          <ContactContainer />
        </ContainerFlex>
      </ContainerFlex>
      <ContainerFlex>
        <ContainerFlex Width="10%" AlignItems="start" Padding="8px">
          <AvatarContainer>
            <Figure Radius="50%">
              <Image src={Avatar} alt={TITLES.NAME} objectFit="cover" fill />
            </Figure>
          </AvatarContainer>
        </ContainerFlex>
        <ContainerFlex
          JustifyContent="start"
          AlignItems="start"
          FlexDirection="column"
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
            >
              <Text
                FontFamily={theme.fonts.title}
                Color={theme.colors.panel}
                FontWeight="700"
                FontSize="2.5rem"
              >
                {TITLES.NAME}
              </Text>
              <Text
                FontWeight="500"
                FontFamily={theme.fonts.title}
                Color={theme.colors.sub_frame}
              >
                {TITLES.JOB}
              </Text>
              <Text
                FontWeight="500"
                FontFamily={theme.fonts.title}
                Color={theme.colors.sub_frame}
              >
                {TITLES.Tecnologys}
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
            Gap="24px"
            Padding="16px 0"
            Height="max-content"
          >
            <Text
              FontFamily={theme.fonts.body}
              Color={theme.colors.bg}
              FontSize="1.5rem"
            >
              {TITLES.LITTLE_RESUME}
            </Text>
            <Text
              FontFamily={theme.fonts.body}
              Color={theme.colors.bg}
              FontSize="1.5rem"
            >
              {TITLES.DESCRIPTION}
            </Text>
          </ContainerFlex>
          <ContainerFlex
            FlexDirection="column"
            JustifyContent="start"
            AlignItems="start"
            Gap="24px"
            Padding="16px 0"
            Height="max-content"
          >
            <Text
              FontFamily={theme.fonts.body}
              Color={theme.colors.bg}
              FontSize="1.5rem"
              FontWeight="700"
            >
              {TITLES.CORE}
            </Text>
            <Text
              FontFamily={theme.fonts.body}
              Color={theme.colors.bg}
              FontSize="1.5rem"
            >
              {TITLES.CORE_DESCRIPTION}
            </Text>
          </ContainerFlex>
          <ContainerFlex
            FlexDirection="column"
            JustifyContent="start"
            AlignItems="start"
            Gap="24px"
            Padding="16px 0"
            Height="max-content"
          >
            <Text
              FontFamily={theme.fonts.body}
              Color={theme.colors.bg}
              FontSize="1.5rem"
              FontWeight="700"
            >
              {TITLES.TOOLS}
            </Text>
            <Text
              FontFamily={theme.fonts.body}
              Color={theme.colors.bg}
              FontSize="1.5rem"
            >
              {TITLES.TOOLS_DESCRIPTION}
            </Text>
          </ContainerFlex>
        </ContainerFlex>
      </ContainerFlex>
    </ContainerFlex>
  );
};
