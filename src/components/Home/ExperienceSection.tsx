import {
  ContainerFlex,
  Text,
} from "@/styles/style";
import { TITLES } from "@/components/Home/constants";
import { theme } from "@/styles/theme";
export const ExperienceSection = () => {
  return (
    <ContainerFlex
      JustifyContent="start"
      AlignItems="start"
      ScrollSnapAlign="start"
      Padding="24px 12px"
      Gap="24px"
    >
      <ContainerFlex BackGround={theme.backGrounds.cyan} Width="10%" />
      <ContainerFlex JustifyContent="start" AlignItems="start" FlexDirection="column" >
        <Text
          FontFamily={theme.fonts.title}
          Color={theme.colors.panel}
          FontWeight="700"
          FontSize="2.5rem"
        >
          {TITLES.NAME}
        
        </Text>
          <Text FontWeight="500" FontFamily={theme.fonts.title} Color={theme.colors.sub_frame} >{TITLES.JOB}</Text>
          <Text FontWeight="500" FontFamily={theme.fonts.title} Color={theme.colors.sub_frame} >{TITLES.Tecnologys}</Text>
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
