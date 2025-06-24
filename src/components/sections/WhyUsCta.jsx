import Button from "../interactives/Button";
import content from "../../content/content";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";

export default function WhyUsCta({ colorMode = "default" }) {
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
      <SectionArea className={`${bgClass}`}>
        <SectionWrapper>
          <SectionHeader
            className={`text-center ${textClass}`}
            miniTitle={content.texts.whyUsCta.sectionHeader.miniTag}
            sectionHeaderTitle={content.texts.whyUsCta.sectionHeader.title}
            sectionHeaderSubtitle={
              content.texts.whyUsCta.sectionHeader.subtitle
            }
            titleColorSet={textClass}
            subtitleColorSet={textClass}
          />
          <p className="w-[90%] tablet1:w-[80%] text-center mb-12">
            {content.texts.whyUsCta.description}
          </p>
          <Button
            aria-label={content.texts.hero.ctaButtonAriaLabel}
            label={content.texts.whyUsCta.ctaButtonText}
            animation
            icon={<FaWhatsapp size={24} />}
          />
          <p className="mt-4">...porque seu trabalho merece respeito.</p>
        </SectionWrapper>
      </SectionArea>
    </>
  );
}
