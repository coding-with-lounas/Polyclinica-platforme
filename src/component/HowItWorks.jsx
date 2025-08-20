import React from "react";
import Vector from '../assets/Vector.svg'
import date from '../assets/Date.svg'
import searchclinique from '../assets/searchClinique.svg'



const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Recherchez une clinique",
      description: "Entrez simplement le nom de la clinique ou du médecin que vous recherchez et choisissez celui qui vous convient le mieux.",
      icon: searchclinique,
    },
    {
      id: 2,
      title: "Choisissez votre Prenez rendez-vous en ligne",
      description: "Sélectionnez la date et l’heure qui vous conviennent. Finalisez votre demande de rendez-vous en ligne et recevez une notification dès que celui-ci est confirmé par l’établissement.",
      icon: date,
    },
    {
      id: 3,
      title: "Confirmez votre présence",
      description: "Recevez un rappel automatique trois jours avant votre rendez-vous. Confirmez votre présence en un clic pour garantir votre créneau et permettre à l’établissement de mieux organiser son planning.",
      icon: Vector,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Comment ça marche ?</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <p className="flex items-center justify-center rounded-full bg-[#0FDCBC] w-[54px] h-[54px] text-white font-bold">{step.id}</p>
              <img src={step.icon} alt={step.title} className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
