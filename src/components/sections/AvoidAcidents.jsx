import Button from "../interactives/Button";
import content from "../../content/content";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import AvoidAcidentsModal from "../sectionElements/avoidAcidents/avoidAcidentsModal";

export default function AvoidAcidents({ colorMode = "default", modal = true }) {
  const navigate = useNavigate();

  // Definir classes de tema
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
  const textClass = textClasses[colorMode] || textClasses.default;

  return (
    <>
      <SectionArea className={`${bgClass}`} paddingtop={false}>
        <SectionWrapper>
          <SectionHeader
            className={`text-center ${textClass}`}
            miniTitle={content.texts.avoidAcidents.miniTag}
            sectionHeaderTitle={content.texts.avoidAcidents.title}
            sectionHeaderSubtitle={content.texts.avoidAcidents.subtitle}
            titleColorSet={textClass}
            subtitleColorSet={textClass}
          />
          <MotionDivDownToUp>
            {modal && <AvoidAcidentsModal colorMode={colorMode} />}
          </MotionDivDownToUp>
        </SectionWrapper>
      </SectionArea>
    </>
  );
}
