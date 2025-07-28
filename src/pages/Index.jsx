import "../styles/shapeDivs.css";
import Cta from "../components/sections/Cta";
import Faq from "../components/sections/Faq";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Steps from "../components/sections/Steps";
import Features from "../components/sections/Features";
import Navbar from "../components/sections/NavbarSocial";
import FooterSocial from "../components/sections/FooterSocial";
import AboutInstagram from "../components/sections/AboutInstagram";
import BackToTopButton from "../components/interactives/BackToTopButton";
import FloatingWhatsappButton from "../components/interactives/FloatingWhatsappButton";
import Maps from "../components/sections/Maps";
import TeamCards from "../components/sections/TeamCards";
import BlogPosts from "../components/sections/BlogPosts";
import WhyUs from "../components/sections/lp01/WhyUs";
import WhyUsCta from "../components/sections/WhyUsCta";
import Frigorifico from "../components/sections/Frigorifico";
import FeaturesParagraphs from "../components/sections/FeaturesParagraphs";
import FeaturesWithIcons from "../components/sections/FeaturesWithIcons";
import FeaturesModalWithCards from "../components/sections/FeaturesModalWithCards";
import DefaultModals from "../components/sections/DefaultModals";
import AvoidAcidents from "../components/sections/AvoidAcidents";
import SubHero from "../components/sectionElements/hero/SubHero";
import News from "../components/sectionElements/News";

export default function Index() {
  // Altere esta constante para: 'default', 'light' ou 'dark'
  const colorMode = "default";

  return (
    <>
      <Navbar colorMode={colorMode} />

      <Hero
        colorMode={colorMode}
        appDownloadButtons={false}
        defaultHero={true}
        influencer={false}
        mesclado={false}
      />
      <SubHero />
      {/* <WhyUs /> */}
      <WhyUsCta />
      <Features
        colorMode={colorMode}
        defaultFeature={true}
        button={false}
        modalWithCards={false}
        paragraphs={false}
        sixCards={false}
        paragraphsModal={false}
      />
      <Frigorifico />
      <DefaultModals />
      <AvoidAcidents />
      {/* <BlogPosts /> */}

      <About modal={true} showGallery={false} colorMode={colorMode} />
      {/* <AboutInstagram
        colorMode={colorMode}
        instagram={true}
        socialPrint={true}
      /> */}
      <Cta colorMode={colorMode} />
      <Steps colorMode={colorMode} />
      <Maps colorMode={colorMode} />
      <News />
      <Faq colorMode={colorMode} />
      <FooterSocial
        colorMode={colorMode}
        addres={true}
        addresSecundario={false}
        phoneSecundario={false}
        phoneTerciario={false}
        expedientesecond={false}
      />
      <FloatingWhatsappButton />
      <BackToTopButton />
    </>
  );
}
