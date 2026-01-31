import React from "react";
import DoctorCard from "../DoctorCard/DoctorCard";

function SearchResults() {
  return (
    <div className="flex flex-col  items-center mt-30 bg-gray-100">
        <div className="flex flex-row justify-between w-full px-4">
      <h2 className="text-2xl font-bold mb-4">Résultats de la recherche</h2>
      <div className="mb-4 flex items-center gap-2 text-gray-600 cursor-pointer border-1 border-black/20 rounded-full px-4 py-2">
        <i class="bi bi-sort-down"></i> Triee par: note{" "}
        <i className="fa-solid fa-caret-down"></i>
      </div>

        </div>
      <div className="grid grid-cols-2 w-full gap-6 p-4">
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
      </div>
    </div>
  );
}

export default SearchResults;
