
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
// import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Button from '@mui/material/Button';
export default function Faqs() {
   const faq = [
  {
    question: "Comment prendre rendez-vous sur Polyclinica ?",
    answer: "Il vous suffit de rechercher votre clinique ou médecin, de choisir la date et l’heure qui vous conviennent, puis de confirmer votre demande en ligne. Vous recevrez une notification dès que votre rendez-vous est validé."
  },
  {
    question: "Est-ce que Polyclinica est gratuit pour les patients ?",
    answer: "L’utilisation de la plateforme est gratuite pour les patients. Cependant, le coût de la consultation dépend du médecin ou de la clinique choisis."
  },
  {
    question: "Comment puis-je annuler ou modifier un rendez-vous ?",
    answer: "Vous pouvez annuler ou modifier un rendez-vous directement depuis votre espace personnel sur Polyclinica, dans la section 'Mes rendez-vous'."
  },
  {
    question: "Comment suis-je averti de la confirmation de mon rendez-vous ?",
    answer: "Vous recevrez une notification par email et/ou SMS dès que votre rendez-vous est confirmé par la clinique ou le médecin."
  }
];


  return (
    <div>
       {faq.map((item,index)=>(
         <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel${index+1}-content`}
          id={`panel${index + 1}-header`}
        >
          <Typography component="span">{item.question}</Typography>
        </AccordionSummary>
        <AccordionDetails>{item.answer}</AccordionDetails>
      </Accordion>
      
       ))}
     
    </div>
  );
}
