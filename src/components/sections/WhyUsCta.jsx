import Button from "../interactives/Button";
import content from "../../content/content";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import convencimento from "../../assets/imgs/acidents/convencimento.webp";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";

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
          <div className="flex items-center justify-between flex-col-reverse desktop1:flex-row-reverse gap-8 w-full">
            <div className="flex flex-col items-center desktop1:items-start">
              <p className="w-[90%] tablet1:w-[90%] desktop1:w-[415px] desktop2:w-[570px] m-auto desktop1:ml-0 text-center mb-6 desktop1:text-start">
                {content.texts.whyUsCta.description}
              </p>
              <Button
                aria-label={content.texts.hero.ctaButtonAriaLabel}
                label={content.texts.whyUsCta.ctaButtonText}
                animation
                icon={<FaWhatsapp size={24} />}
              />
            </div>
            <div>
              <MotionDivDownToUp className="relative w-[90%] desktop1:w-[415px] desktop2:w-[485px] m-auto flex justify-center rounded-xl">
                <img
                  src={convencimento}
                  alt="imagem de corte de carne"
                  className="w-[100%] desktop1:w-[415px] desktop2:w-[485px] rounded-xl shadow-custom-opacity shadow-shadowAbouts/10"
                />
              </MotionDivDownToUp>
            </div>
          </div>
        </SectionWrapper>
      </SectionArea>
    </>
  );
}
