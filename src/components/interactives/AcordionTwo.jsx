import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import content from "../../content/content";

export default function AccordionExpandDefault() {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const getPanelStyle = (panel) => {
    return {
      boxShadow:
        expanded === panel ? "0px 0px 10px -5px rgba(0, 0, 0, 0.1)" : "none",
      border:
        expanded === panel
          ? "1px solid transparent"
          : "1px solid rgba(0, 0, 0, 0.1)",
      borderTop: expanded === panel ? "1px solid rgba(0, 0, 0, 0.1)" : "none",
    };
  };

  return (
    <div>
      {/* Accordion 1 */}
      <Accordion
        className="mb-[3%]"
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        style={getPanelStyle("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>
            <h1 className="font-bold font-secondFont">
              {content.texts.faq.questions.question1.question}
            </h1>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p className="font-secondFont text-paragraph4 text-paragraphLight ">
              {content.texts.faq.questions.question1.answer}
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Accordion 2 */}
      <Accordion
        className="mb-[3%]"
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        style={getPanelStyle("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>
            <h1 className="font-bold font-secondFont">
              {content.texts.faq.questions.question2.question}
            </h1>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p className="font-secondFont text-paragraph4 text-paragraphLight ">
              {content.texts.faq.questions.question2.answer}
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Accordion 3 */}
      <Accordion
        className="mb-[3%]"
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        style={getPanelStyle("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography>
            <h1 className="font-bold font-secondFont">
              {content.texts.faq.questions.question3.question}
            </h1>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p className="font-secondFont text-paragraph4 text-paragraphLight ">
              {content.texts.faq.questions.question3.answer}
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Accordion 4 */}
      <Accordion
        className="mb-[3%]"
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        style={getPanelStyle("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <Typography>
            <h1 className="font-bold font-secondFont">
              {content.texts.faq.questions.question4.question}
            </h1>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p className="font-secondFont text-paragraph4 text-paragraphLight ">
              {content.texts.faq.questions.question4.answer}
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Accordion 5 */}
      <Accordion
        className="mb-[3%]"
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
        style={getPanelStyle("panel5")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5-content"
          id="panel5-header"
        >
          <Typography>
            <h1 className="font-bold font-secondFont">
              {content.texts.faq.questions.question5.question}
            </h1>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p className="font-secondFont text-paragraph4 text-paragraphLight ">
              {content.texts.faq.questions.question5.answer}
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Accordion 6 */}
      <Accordion
        className="mb-[3%]"
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
        style={getPanelStyle("panel6")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6-content"
          id="panel6-header"
        >
          <Typography>
            <h1 className="font-bold font-secondFont">
              {content.texts.faq.questions.question6.question}
            </h1>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p className="font-secondFont text-paragraph4 text-paragraphLight ">
              {content.texts.faq.questions.question6.answer}
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Accordion 7 */}
      <Accordion
        className="mb-[3%]"
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
        style={getPanelStyle("panel7")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7-content"
          id="panel7-header"
        >
          <Typography>
            <h1 className="font-bold font-secondFont">
              {content.texts.faq.questions.question7.question}
            </h1>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p className="font-secondFont text-paragraph4 text-paragraphLight ">
              {content.texts.faq.questions.question7.answer}
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Accordion 7 */}
      <Accordion
        className="mb-[3%]"
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
        style={getPanelStyle("panel7")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7-content"
          id="panel7-header"
        >
          <Typography>
            <h1 className="font-bold font-secondFont">
              {content.texts.faq.questions.question7.question}
            </h1>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p className="font-secondFont text-paragraph4 text-paragraphLight ">
              {content.texts.faq.questions.question7.answer}
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Accordion 8 */}
      <Accordion
        className="mb-[3%]"
        expanded={expanded === "panel8"}
        onChange={handleChange("panel8")}
        style={getPanelStyle("panel8")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel8-content"
          id="panel8-header"
        >
          <Typography>
            <h1 className="font-bold font-secondFont">
              {content.texts.faq.questions.question8.question}
            </h1>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p className="font-secondFont text-paragraph4 text-paragraphLight ">
              {content.texts.faq.questions.question8.answer}
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Accordion 9 */}
      <Accordion
        className="mb-[3%]"
        expanded={expanded === "panel9"}
        onChange={handleChange("panel9")}
        style={getPanelStyle("panel9")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel9-content"
          id="panel9-header"
        >
          <Typography>
            <h1 className="font-bold font-secondFont">
              {content.texts.faq.questions.question9.question}
            </h1>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p className="font-secondFont text-paragraph4 text-paragraphLight ">
              {content.texts.faq.questions.question9.answer}
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Accordion 10 */}
      <Accordion
        className="mb-[3%]"
        expanded={expanded === "panel10"}
        onChange={handleChange("panel10")}
        style={getPanelStyle("panel10")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel10-content"
          id="panel10-header"
        >
          <Typography>
            <h1 className="font-bold font-secondFont">
              {content.texts.faq.questions.question10.question}
            </h1>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p className="font-secondFont text-paragraph4 text-paragraphLight ">
              {content.texts.faq.questions.question10.answer}
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
