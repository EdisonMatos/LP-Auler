import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import content from "../../../content/content";
import Button from "../../interactives/Button";
import { FaWhatsapp } from "react-icons/fa";
import "../../../styles/shapeDivs.css";

export default function SubHero({ appDnloadButtons, colorMode }) {
  // Definindo cores de fundo com base no tema
  const backgroundClasses = {
    dark: "bg-bgFixedDark",
    light: "bg-bgFixedLight",
    default: "from-bgSectionDark to-darker",
  };

  const bgGradient = backgroundClasses[colorMode] || backgroundClasses.default;
  const titleColor = colorMode === "light" ? "text-black" : "text-white";
  const subtitleColor = colorMode === "light" ? "text-black" : "text-white";
  const obsTextColor = colorMode === "light" ? "text-black" : "text-white";
  const descriptionColor = colorMode === "light" ? "text-black" : "text-white";

  return (
    <div
      className={`w-full bg-center bg-repeat font-mainFont bg-gradient-to-b bg-black`}
      id="home"
    >
      <div className="relative z-10 flex w-full items-left">
        <div className="w-full text-secondary justify-evenly">
          <div className=" " />
          <div className="flex flex-col-reverse gap-[40px] desktop1:flex-row desktop1:justify-between mx-auto w-[90%] max-w-[1215px] items-center desktop1:pb-[96px]">
            <div className="flex flex-col w-full desktop1:w-[100%] m-auto">
              <MotionDivDownToUp>
                <div
                  className={`flex justify-center desktop1:justify-center font-bold leading-[40px] phone3:leading-[42px] tablet1:leading-[45px] mb-4 desktop1:leading-[60px] desktop2:leading-[45px] text-center text-title4 phone2:text-title5 phone3:text-title5 tablet1:text-title5 desktop1:pb-10 ${titleColor}`}
                >
                  <h1>
                    Se o seu trabalho tem cobrado da sua saúde mais do que
                    deveria
                  </h1>
                </div>
              </MotionDivDownToUp>

              {/* Subtítulo */}
              <MotionDivDownToUp>
                <div
                  className={`flex justify-center w-full text-center desktop1:text-center desktop1:justify-center font-secondFont text-paragraph4 phone3:text-paragraph5 ${subtitleColor}`}
                >
                  <p className="mb-[32px]">
                    Talvez seja hora de entender o que a lei tem a dizer sobre
                    isso
                  </p>
                </div>
              </MotionDivDownToUp>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
