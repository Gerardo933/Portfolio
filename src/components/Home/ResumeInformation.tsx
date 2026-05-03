import {
  ContainerFlex,
  Text,
} from "@/styles/style";
import { TITLES } from "@/components/Home/constants";
import { theme } from "@/styles/theme";
export const ResumeInformation = () => {
  return (
    <ContainerFlex
      JustifyContent="start"
      AlignItems="start"
      ScrollSnapAlign="start"
      Padding="24px"
      Gap="24px"
    >
      <ContainerFlex BackGround={theme.backGrounds.green} Width="20%" />
      <ContainerFlex JustifyContent="start" AlignItems="start" FlexDirection="column">
        <Text
          FontFamily={theme.fonts.title}
          Color={theme.colors.panel}
          FontWeight="700"
          FontSize="2.5rem"
        >
          {TITLES.NAME}
          <Text Padding="0 12px" FontWeight="500">{TITLES.JOB}</Text>
        </Text>
        <Text
          FontFamily={theme.fonts.body}
          Color={theme.colors.bg}
          FontSize="1.5rem"
        >
          {TITLES.DESCRIPTION}
        </Text>
      </ContainerFlex>
    </ContainerFlex>
  );
};
