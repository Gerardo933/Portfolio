"use client";
import { ContainerFlex, Image } from "@/styles/style";
import { ButtonContact } from "@/components/Avatar/AvatarStyle";
import { ALT_IMAGES } from "@/components/Home/constants";
import GitHub from "@/images/gitHubVector.svg";
import LinkedIn from "@/images/linkedIn.svg";
import Mail from "@/images/mail.svg";

export const ContactContainer = () => {
  return (
    <ContainerFlex Gap="24px" Width="max-content">
      <ButtonContact
        href="https://github.com/Gerardo933"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={GitHub} alt={ALT_IMAGES.GIT} Width="24px" Height="24px" />
      </ButtonContact>

      <ButtonContact
        href="https://www.linkedin.com/in/gerardo-flores-5a34b721b/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={LinkedIn} alt={ALT_IMAGES.LID} Width="24px" Height="24px" />
      </ButtonContact>

      <ButtonContact href="mailto:gerfloresn.1997@gmail.com">
        <Image src={Mail} alt={ALT_IMAGES.MAIL} Width="24px" Height="24px" />
      </ButtonContact>
    </ContainerFlex>
  );
};
