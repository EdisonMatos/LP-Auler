import React from "react";
import SectionArea from "../sectionElements/SectionArea";
import "react-image-gallery/styles/css/image-gallery.css";
import SectionHeader from "../sectionElements/SectionHeader";
import AboutModal from "../sectionElements/about/AboutModal";
import content from "../../content/content";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import GalleryAbout from "../sectionElements/about/GalleryAbout";
import ParagraphSemFading from "../sectionElements/about/ParagraphSemFading";
import ParagraphWithFading from "../sectionElements/about/ParagraphWithFading";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import img1 from "../../assets/imgs/about/imgGaleria1.webp";
import img2 from "../../assets/imgs/about/imgGaleria2.webp";
import img3 from "../../assets/imgs/about/imgGaleria3.webp";
import Button from "../interactives/Button";
import { FaWhatsapp } from "react-icons/fa";
import FrigorificoModal from "../sectionElements/frigorifico/frigorificoModal";

export default function Frigorifico({
  modal = true,
  showGallery = false,
  colorMode,
}) {
  // Definir classes de tema
  const bgClasses = {
    dark: "bg-bgFixedDark",
    light: "bg-bgFixedLight",
    default: "bg-bgSectionDark",
  };
  const textClasses = {
    dark: "text-white",
    light: "text-black",
    default: "text-white",
  };
  const bgClass = bgClasses[colorMode] || bgClasses.default;
  const titleColor = textClasses[colorMode] || textClasses.default;
  const subtitleColor = colorMode === "light" ? "text-black/80" : "text-white";

  return (
    <SectionArea className={`${bgClass} transition-colors duration-1000`}>
      <SectionWrapper className="flex flex-col desktop1:flex-row gap-[40px] desktop1:gap-x-[40px] desktop2:gap-0 desktop1:justify-between">
        <MotionDivDownToUp className="relative w-[90%] desktop1:w-[415px] desktop2:w-[450px] flex justify-center rounded-xl">
          <img
            src={content.texts.frigorifico.img}
            alt={content.texts.about.imagem.alt}
            className="w-[100%] desktop1:w-[415px] desktop2:w-[485px] rounded-xl shadow-custom-opacity shadow-shadowAbouts/50"
          />
        </MotionDivDownToUp>

        <div className="desktop1:w-[550px] desktop2:w-[570px]">
          <SectionHeader
            className="text-center"
            miniTitle={content.texts.frigorifico.sectionHeader.miniTag}
            sectionHeaderTitle={content.texts.frigorifico.sectionHeader.title}
            sectionHeaderSubtitle={
              content.texts.frigorifico.sectionHeader.subtitle
            }
            color={colorMode}
            type="article"
            titleColorSet={titleColor}
            subtitleColorSet={subtitleColor}
          />
          <MotionDivDownToUp>
            <p className="text-white text-opacity-80  font-mainFont">
              {content.texts.frigorifico.description}
            </p>
          </MotionDivDownToUp>

          <MotionDivDownToUp>
            {modal && <FrigorificoModal colorMode={colorMode} />}
          </MotionDivDownToUp>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
