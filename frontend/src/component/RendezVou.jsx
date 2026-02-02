import React, { useState, useContext, useEffect } from "react";
import "./RendezVou.css";
import logo from "../assets/logo-header.svg";
import { AppContext } from "../context/appContext";

function RendezVou() {
  const { 
    handleForm, 
    handleCalendar, 
    handleSchedule,
    selectedDate // Récupère la date du contexte
  } = useContext(AppContext);

  const [formData, setFormData] = useState({
    civilite: "",
    nom: "",
    prenom: "",
    email: "",
    dateNaissance: "",
    telephone: "",
    dateRendezVous: ""
  });

  // Fonction pour formater la date au format jj/mm/aaaa
  const formatDateToFrench = (date) => {
    if (!date) return "";
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day} / ${month} / ${year}`;
  };

  // Mettre à jour le champ dateNaissance quand selectedDate change
  useEffect(() => {
    if (selectedDate) {
      const formattedDate = formatDateToFrench(selectedDate);
      setFormData(prev => ({
        ...prev,
        dateNaissance: formattedDate
      }));
    } else {
      // IMPORTANT : Si selectedDate est null, vider le champ
      setFormData(prev => ({
        ...prev,
        dateNaissance: ""
      }));
    }
  }, [selectedDate]);

  // Fonction pour gérer les changements dans les inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Préparer les données pour l'envoi au backend
    const submissionData = {
      ...formData,
      // Convertir la date formatée en objet Date pour le backend
      dateNaissanceObj: selectedDate,
      // Ou garder la chaîne formatée
      dateNaissanceFormatted: formData.dateNaissance.replace(/ /g, '') // Enlever les espaces
    };
    
    console.log("Données à envoyer au backend:", submissionData);
    
    // Ici tu enverras les données à ton backend
    // Exemple :
    // fetch('/api/rendezvous', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(submissionData)
    // })
    
    // Réinitialiser le formulaire
    setFormData({
      civilite: "",
      nom: "",
      prenom: "",
      email: "",
      dateNaissance: "",
      telephone: "",
      dateRendezVous: ""
    });
    
    // Fermer le formulaire
    handleForm();
  };

  // Fonction pour réinitialiser la date manuellement (optionnel)
  const handleClearDate = () => {
    setFormData(prev => ({
      ...prev,
      dateNaissance: ""
    }));
  };

  return (
    <div className="rendez-vou-container">
      <div className="rendez-vou">
        <div className="absolute top-4 right-4 z-50">
          <button
            onClick={handleForm}
            className="group w-10 h-10 rounded-full bg-gradient-to-r from-[#0FDCBC] to-[#0dc9af] flex items-center justify-center text-white shadow-lg hover:cursor-pointer hover:shadow-xl hover:shadow-[#0FDCBC]/30 hover:scale-110 active:scale-95 transition-all duration-300"
          >
            <i className="fa-solid fa-x text-sm transition-transform"></i>
          </button>
        </div>
        <div className="rendez">
          <div className="rendez-header">
            <img src={logo} alt="logo-Polyclinica" />
            <p className="text-gray-500">Prendre rapidement un rendez-vous</p>
          </div>
          <div className="rendez-body">
            <form onSubmit={handleSubmit}>
              <div className="civilite">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Civilité
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="civilite"
                      value="Monsieur"
                      className="w-4 h-4 text-[#0FDCBC]"
                      checked={formData.civilite === "Monsieur"}
                      onChange={handleInputChange}
                    />
                    <span className="text-xs ">Monsieur</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="civilite"
                      value="Madame"
                      className="w-4 h-4 text-[#0FDCBC]"
                      checked={formData.civilite === "Madame"}
                      onChange={handleInputChange}
                    />
                    <span className="text-xs ">Madame</span>
                  </label>
                </div>
                <div className="Nom-Prenom">
                  <div className="flex justify-center gap-4 ">
                    <div className="flex flex-col ">
                      <label className="block text-sm font-medium text-gray-700 mb-2 mt-4">
                        Nom
                      </label>
                      <div>
                        <input
                          type="text"
                          name="nom"
                          className="w-40 h-10 px-4 py-3 border border-gray-300 rounded-4xl focus:ring-2 focus:ring-[#0FDCBC] focus:border-transparent"
                          placeholder="nom"
                          required
                          value={formData.nom}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col h-fit">
                      <label className="block text-sm font-medium text-gray-700 mb-2 mt-4">
                        Prénom
                      </label>
                      <div>
                        <input
                          type="text"
                          name="prenom"
                          className="w-40 h-10 px-4 py-3 border border-gray-300 rounded-4xl focus:ring-2 focus:ring-[#0FDCBC] focus:border-transparent"
                          placeholder="prénom"
                          required
                          value={formData.prenom}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="email mt-12">
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <div>
                    <input
                      type="email"
                      name="email"
                      className="w-84 h-10 px-4 py-3 border border-gray-300 rounded-4xl focus:ring-2 focus:ring-[#0FDCBC] focus:border-transparent mt-2"
                      placeholder="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="Nom-Prenom">
                  <div className="flex justify-center gap-4 ">
                    <div className="flex flex-col ">
                      <label className="block text-sm font-medium text-gray-700 mb-2 mt-4">
                        Date de naissance
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="dateNaissance"
                          onFocus={handleCalendar}
                          className="w-40 h-10 px-4 py-3 border border-gray-300 rounded-4xl focus:ring-2 focus:ring-[#0FDCBC] focus:border-transparent pr-8"
                          placeholder="jj / mm / aaaa"
                          required
                          value={formData.dateNaissance}
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="flex flex-col h-fit">
                      <label className="block text-sm font-medium text-gray-700 mb-2 mt-4">
                        Num de téléphone
                      </label>
                      <div>
                        <input
                          type="text"
                          name="telephone"
                          className="w-40 h-10 px-4 py-3 border border-gray-300 rounded-4xl focus:ring-2 focus:ring-[#0FDCBC] focus:border-transparent"
                          placeholder="Tel"
                          required
                          value={formData.telephone}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="email mt-12">
                  <label className="block text-sm font-medium text-gray-700">
                    Sélectionner la date et heure
                  </label>
                  <div>
                    <input
                      type="text"
                      name="dateRendezVous"
                      onFocus={handleSchedule}
                      className="w-84 h-10 px-4 py-3 border border-gray-300 rounded-4xl focus:ring-2 focus:ring-[#0FDCBC] focus:border-transparent mt-2"
                      placeholder="18 / 08 / 2026 à 11:15"
                      required
                      value={formData.dateRendezVous}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="email mt-8">
                  <button 
                    type="submit"
                    className="relative w-84 h-10 border-transparent bg-gradient-to-r from-[#0FDCBC] to-[#0dc9af] rounded-4xl text-white font-bold shadow-lg hover:cursor-pointer hover:shadow-[0_0_25px_rgba(15,220,188,0.6)] transition-all duration-500 group"
                  >
                    <span className="group-hover:text-white/90">Soumettre</span>
                    <span className="absolute -inset-1 bg-gradient-to-r from-[#0FDCBC] to-[#0dc9af] rounded-4xl blur opacity-0 group-hover:opacity-70 transition-opacity duration-500 -z-10"></span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RendezVou;