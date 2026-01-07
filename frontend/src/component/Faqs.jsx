// import * as React from 'react';
import Accordion from "@mui/material/Accordion";
// import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
// import Button from '@mui/material/Button';
export default function Faqs() {
  const faq = [
    {
      question: "Comment prendre rendez-vous sur Polyclinica ?",
      answer:
        "Il vous suffit de rechercher votre clinique ou médecin, de choisir la date et l’heure qui vous conviennent, puis de confirmer votre demande en ligne. Vous recevrez une notification dès que votre rendez-vous est validé.",
    },
    {
      question: "Est-ce que Polyclinica est gratuit pour les patients ?",
      answer:
        "L’utilisation de la plateforme est gratuite pour les patients. Cependant, le coût de la consultation dépend du médecin ou de la clinique choisis.",
    },
    {
      question: "Comment puis-je annuler ou modifier un rendez-vous ?",
      answer:
        "Vous pouvez annuler ou modifier un rendez-vous directement depuis votre espace personnel sur Polyclinica, dans la section 'Mes rendez-vous'.",
    },
    {
      question:
        "Comment suis-je averti de la confirmation de mon rendez-vous ?",
      answer:
        "Vous recevrez une notification par email et/ou SMS dès que votre rendez-vous est confirmé par la clinique ou le médecin.",
    },
  ];
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="w-[50%] mx-auto p-4">
      {faq.map((item, index) => (
        <Accordion
          className="mb-3 rounded-2xl "
          expanded={expanded === index}
          onChange={handleChange(index)}
          sx={{
            borderRadius: "1rem", // 👈 round the whole accordion
            overflow: "hidden",
            backgroundColor:
              expanded === index ? "rgba(7,217,191,0.07)" : "#ffffff",
            transition: "background-color 0.3s ease",
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                sx={{ color: expanded === index ? "#02D6C6" : "#000000" }}
              />
            }
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
            className="bg-[02D6C6] to-teal-50 rounded-t-2xl"
            sx={{
              height: "86.42px",
              flexDirection: "row-reverse", // move icon to left
              "& .MuiAccordionSummary-expandIconWrapper": {
                marginRight: "8px", // spacing between icon and text
              },
            }}
          >
            <Typography
              component="span"
              sx={{
                fontWeight: "bold",
                color: expanded === index ? "#02D6C6" : "#000000",
                fontSize: "1.25rem",
                lineHeight: 1.6, // espace vertical entre lignes
                letterSpacing: "0.5px", // léger espacement horizontal
                paddingY: "6px", // espace haut/bas
              }}
            >
              {item.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{ color: "rgba(0, 44, 34, 0.7)", height: "100px" }}
          >
            {item.answer}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
