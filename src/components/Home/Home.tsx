import {
  ContainerFlex,
  Text,
  Figure,
  Image,
  ContainerGrid,
} from "@/styles/style";
import { KNOWLEDGE, RadiantTitles, TITLES } from "@/components/Home/constants";
import AVATAR from "@/images/image.png";
import { Footer } from "@/components/Footer/Footer";
export const Home = () => {
  return (
    <ContainerFlex
      JustifyContent="start"
      AlignItems="start"
      FlexDirection="column"
      Height="100%"
      BackGround="linear-gradient(165deg,rgba(0, 0, 0, 1) 0%, rgba(0, 24, 38, 1) 100%)"
    >
      <ContainerFlex Gap="24px" Padding="24px" ColumnGap="24px">
        <ContainerFlex Width="30%">
          <Figure Height="250px" Width="250px" Radius="50%">
            <Image src={AVATAR} alt={TITLES.ALT_AVATAR} fill />
          </Figure>
        </ContainerFlex>

        <ContainerFlex Gap="16px" FlexDirection="column" AlignItems="start">
          <Text FontSize="2rem" FontWeight="700" Color="#FFFFFF">
            {TITLES.NAME}
          </Text>
          <Text FontSize="1.5rem" FontWeight="600" {...RadiantTitles}>
            {TITLES.JOB}
          </Text>
          <Text
            FontSize="1.5rem"
            FontWeight="700"
            Color="#FFFFFF"
            TextAlign="start"
          >
            {TITLES.DESCRIPTION}
          </Text>
        </ContainerFlex>
      </ContainerFlex>

      <ContainerFlex FlexDirection="column">
        <Text FontSize="2rem" Color="#FFFFFF" FontWeight="700">
          {TITLES.KNOWLEDGE}
        </Text>
        <ContainerGrid GridColumn="repeat(5,1fr)">
          {KNOWLEDGE.map((data, index) => {
            return (
              <ContainerFlex
                FlexDirection="column"
                Cursor="pointer"
                Gap="16px"
                key={index}
              >
                <Image
                  src={data.image}
                  alt={data.title}
                  Width="128px"
                  Height="128px"
                />
                <Text FontSize="1.5rem" Cursor="pointer" {...RadiantTitles}>
                  {data.title}
                </Text>
              </ContainerFlex>
            );
          })}
        </ContainerGrid>
      </ContainerFlex>
      <Footer />
    </ContainerFlex>
  );
};
