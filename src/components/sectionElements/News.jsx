import content from "../../content/content";
import { useNavigate } from "react-router-dom";
import Paragraphs from "../sectionElements/Paragraphs";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import SectionWrapper from "../sectionElements/SectionWrapper";
import AccordionExpandDefault from "../interactives/AcordionTwo";
import Button from "../interactives/Button";
import CardNews from "../cards/CardNews";
import { Card } from "@mui/material";

export default function News({ colorMode }) {
  const navigate = useNavigate();

  // Classes de tema
  const bgClasses = {
    dark: "bg-bgSectionOpacityDark",
    light: "bg-bgSectionOpacityLight",
    default: "squares",
  };
  const textClasses = {
    dark: "text-white",
    light: "text-black",
    default: "text-black",
  };
  const bgClass = bgClasses[colorMode] || bgClasses.default;
  const titleColor = textClasses[colorMode] || textClasses.default;

  return (
    <SectionArea className={`${bgClass}`} paddingbot={false}>
      <SectionHeader
        className="text-center"
        miniTitle={content.texts.news.miniTag}
        sectionHeaderTitle={content.texts.news.title}
        sectionHeaderSubtitle={content.texts.news.subtitle}
        color=""
        titleColorSet={titleColor}
        subtitleColorSet={titleColor}
      />

      <SectionWrapper className="flex justify-center">
        <MotionDivDownToUp className="flex justify-center w-full">
          <div className="w-[90%] tablet1:w-[80%] desktop1:w-[80%] max-w-[860px] mb-[26px] tablet1:mb-[40px] desktop1:mb-[80px]">
            <CardNews
              title="Conheça nossa nova plataforma"
              description="Estamos lançando um novo site com funcionalidades exclusivas. Clique no botão abaixo para acessar."
              href="https://reporterbrasil.org.br/2024/07/trabalhadores-denunciam-frigorificos-lesoes-acidentes/"
              buttonText="Acessar agora"
              textColor={colorMode === "dark" ? "text-white" : "text-black"}
              bgColor={colorMode === "dark" ? "bg-neutral-800" : "bg-white"}
              borderColor={
                colorMode === "dark" ? "border-neutral-700" : "border-gray-200"
              }
              buttonClass="bg-buttonColor text-black hover:bg-buttonColor/90 transition desktop1:hover:scale-110"
            />
          </div>
        </MotionDivDownToUp>
      </SectionWrapper>
    </SectionArea>
  );
}
