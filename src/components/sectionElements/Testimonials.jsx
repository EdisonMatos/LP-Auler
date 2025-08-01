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
import CarouselHero from "../interactives/CarouselHero";

export default function Testimonials({
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
        <div className="w-[90%] desktop1:w-[550px] desktop2:w-[900px] m-auto">
          <SectionHeader
            className="text-center"
            miniTitle="DEPOIMENTOS"
            sectionHeaderTitle="O que dizem nossos clientes"
            sectionHeaderSubtitle="Experiências reais de quem confiou no nosso trabalho e teve seus direitos garantidos com responsabilidade, preparo e acolhimento."
            color={colorMode}
            type=""
            titleColorSet={titleColor}
            subtitleColorSet={subtitleColor}
          />
          <MotionDivDownToUp>
            <CarouselHero />
          </MotionDivDownToUp>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
