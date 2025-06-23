import content from "../../../content/content";
import contentLp01 from "../../../content/contentLp01";
import SectionArea from "../../sectionElements/SectionArea";
import SectionHeader from "../../sectionElements/SectionHeader";
import SectionWrapper from "../../sectionElements/SectionWrapper";
import FeatureCardLP from "./FeatureCardLP";

export default function WhyUs({}) {
  return (
    <>
      <SectionArea>
        <SectionWrapper>
          <SectionHeader
            miniTitle={content.texts.whyUs.sectionHeader.miniTag}
            className="text-center"
            sectionHeaderTitle={content.texts.whyUs.sectionHeader.title}
            sectionHeaderSubtitle={content.texts.whyUs.sectionHeader.subtitle}
            color=""
            titleColorSet="text-secondary"
            subtitleColorSet="text-secondary"
          />
          <div className="w-full flex flex-wrap justify-evenly gap-y-[32px]">
            <FeatureCardLP
              icon={content.texts.whyUs.cards.card1.icon}
              title={content.texts.whyUs.cards.card1.title}
              description={content.texts.whyUs.cards.card1.description}
            />
            <FeatureCardLP
              icon={content.texts.whyUs.cards.card2.icon}
              title={content.texts.whyUs.cards.card2.title}
              description={content.texts.whyUs.cards.card2.description}
            />
            <FeatureCardLP
              icon={content.texts.whyUs.cards.card3.icon}
              title={content.texts.whyUs.cards.card3.title}
              description={content.texts.whyUs.cards.card3.description}
            />
            <FeatureCardLP
              icon={content.texts.whyUs.cards.card4.icon}
              title={content.texts.whyUs.cards.card4.title}
              description={content.texts.whyUs.cards.card4.description}
            />
          </div>
        </SectionWrapper>
      </SectionArea>
    </>
  );
}
