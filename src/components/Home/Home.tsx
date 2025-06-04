import { ContainerFlex, Text, Figure, Image } from "@/styles/style";
import { TITLES } from "@/components/Home/constants";
export const Home = () => {
  return (
    <ContainerFlex
      JustifyContent="start"
      AlignItems="start"
      FlexDirection="column"
      BackGround="#E2E2E2"
      Height="100vh"
      Padding="24px"
    >
      <ContainerFlex Height="500px" FlexDirection="column" JustifyContent="start" AlignItems="start" BackGround="#FFFFFF" Radius="32px">
        <Figure Height="20px" Width="">
          <Image src="/images/logo.png" alt="logo" />
        </Figure>
      </ContainerFlex>

      <ContainerFlex  Height="500px" JustifyContent="start" AlignItems="start">
        <Text FontSize="5rem" Color="#000000">{TITLES.HOME}</Text>
      </ContainerFlex>
    </ContainerFlex>
  );
};
