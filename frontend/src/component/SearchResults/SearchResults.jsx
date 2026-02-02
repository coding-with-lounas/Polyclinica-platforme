import React, { useState } from "react";
import DoctorCard from "../DoctorCard/DoctorCard";
import { mockDoctors, sortDoctors } from "./mocks";

function SearchResults() {
  // État pour stocker les médecins
  const [doctors, setDoctors] = useState(mockDoctors);
  const [sortBy, setSortBy] = useState("rating");
  const [showSort, setShowSort] = useState(false);

  const handleShowSort = () => {
    setShowSort(!showSort);
  };

  // Fonction pour gérer le tri
  const handleSort = (criteria) => {
    setSortBy(criteria);
    const sortedDoctors = sortDoctors(doctors, criteria);
    setDoctors(sortedDoctors);
  };

  // Fonction utilitaire pour afficher le label du tri
  const getSortLabel = (sortBy) => {
    switch(sortBy) {
      case 'rating': return 'note';
      case 'experience': return 'expérience';
      case 'name': return 'nom';
      case 'price': return 'prix';
      default: return 'note';
    }
  };

  return (
    <div className="flex flex-col items-center mt-14 bg-gray-100 min-h-screen">
      {/* En-tête avec titre et filtre */}
      <div className="flex flex-row justify-between w-full px-4 py-4 ">
        <h2 className="text-2xl font-bold text-gray-800">{doctors.length} Résultats trouvés</h2>
        
        {/* Menu de tri */}
        <div className="relative">
          <div 
            className="mb-4 flex items-center gap-2 text-gray-600 cursor-pointer 
                      border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-50"
            onClick={() => {
              // Tu peux ajouter un menu déroulant ici
              handleShowSort()
            }}
          >
            <i className="bi bi-sort-down"></i> 
            <span>Trié par: {getSortLabel(sortBy)}</span>
            <i className="fa-solid fa-caret-down ml-2"></i>
          </div>
          
          {/* Menu déroulant pour le tri (optionnel) */}
          {showSort &&
          <div className="absolute right-0 mt-1 bg-white border rounded shadow-lg z-10">
            <button onClick={() => {handleSort("rating"); handleShowSort();}} className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
              Note
            </button>
            <button onClick={() => {handleSort("experience"); handleShowSort();}} className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
              Expérience
            </button>
            <button onClick={() => {handleSort("name"); handleShowSort();}} className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
              Nom
            </button>
            <button onClick={() => {handleSort("price"); handleShowSort();}} className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
              Prix
            </button>
          </div>
          }
        </div>
      </div>
      
      {/* Grille des cartes de médecins */}
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-6 p-4 max-w-7xl">
        {doctors.map((doctor) => (
          <DoctorCard 
            key={doctor.id}
            doctor={{
              initials: doctor.initials,
              name: doctor.name,
              specialization: doctor.specialization,
              email: doctor.email,
              phone: doctor.phone,
              address: doctor.address,
              rating: doctor.rating,
              reviews: doctor.reviews,
              imageUrl: doctor.imageUrl,
              // Ajoute d'autres propriétés si nécessaire
            }}
            onBookAppointment={() => console.log(`Prendre RDV avec ${doctor.name}`)}
          />
        ))}
      </div>
      
    </div>
  );
}

export default SearchResults;