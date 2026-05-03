import { ContainerFlex } from "@/styles/style";
import { ResumeInformation } from "@/components/Home/ResumeInformation";
import { Sidebar } from "@/components/Sidebar/Sidebar";

export const Home = () => {
  return (
    <ContainerFlex
      JustifyContent="start"
      AlignItems="start"
      FlexDirection="row"
      Height="100vh"
      BackGround="white"
    >
      <Sidebar />
      <ContainerFlex
        FlexDirection="column"
        Gap="32px"
        OverFlowY="scroll"
        Height="100vh"
        ScrollSnapType="y mandatory"
        JustifyContent="start"
        AlignItems="start"
      >
        <ResumeInformation />
      </ContainerFlex>
    </ContainerFlex>
  );
};
