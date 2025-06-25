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
          <div className="flex w-full justify-between">
            <div className="w-[50%] flex flex-col gap-4">
              <MotionDivDownToUp>
                <p className="flex">
                  ✔ Atendimento médico imediato (pago pela empresa) ✔
                  Afastamento remunerado (auxílio-doença pelo INSS, se
                  necessário) ✔ Estabilidade de 12 meses após retorno (não pode
                  ser demitido sem justa causa) ✔ Indenização em casos de
                  negligência da empresa (como EPI vencido ou falta de
                  treinamento)
                </p>
              </MotionDivDownToUp>
              <MotionDivDownToUp>
                {modal && <AvoidAcidentsModal colorMode={colorMode} />}
              </MotionDivDownToUp>
            </div>
            <div className="w-[50%]"></div>
          </div>
        </SectionWrapper>
      </SectionArea>
    </>
  );
}
