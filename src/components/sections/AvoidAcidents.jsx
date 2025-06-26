import Button from "../interactives/Button";
import content from "../../content/content";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import AvoidAcidentsModal from "../sectionElements/avoidAcidents/avoidAcidentsModal";
import acidents from "../../assets/imgs/acidents/avoidAcidents.webp";

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
          <div className="flex flex-col gap-6 desktop1:gap-0 items-center desktop1:flex-row-reverse w-full justify-between">
            <div className="w-auto desktop1:w-[40%] items-center desktop1:items-start flex flex-col gap-4">
              <MotionDivDownToUp>
                <p className="flex text-center desktop1:text-start">
                  ✔ Atendimento médico imediato (pago pela empresa)
                  <br />
                  <br />✔ Afastamento remunerado (auxílio-doença pelo INSS, se
                  necessário)
                  <br />
                  <br />✔ Estabilidade de 12 meses após retorno (não pode ser
                  demitido sem justa causa)
                  <br />
                  <br />✔ Indenização em casos de negligência da empresa (como
                  EPI vencido ou falta de treinamento)
                </p>
              </MotionDivDownToUp>
              <MotionDivDownToUp>
                {modal && <AvoidAcidentsModal colorMode={colorMode} />}
              </MotionDivDownToUp>
            </div>
            <MotionDivDownToUp className="relative w-[90%] desktop1:w-[415px] desktop2:w-[450px] flex justify-center rounded-xl">
              <img
                src={acidents}
                alt="imagem de corte de carne"
                className="w-[100%] desktop1:w-[415px] desktop2:w-[485px] rounded-xl shadow-custom-opacity shadow-shadowAbouts/10"
              />
            </MotionDivDownToUp>
          </div>
        </SectionWrapper>
      </SectionArea>
    </>
  );
}
