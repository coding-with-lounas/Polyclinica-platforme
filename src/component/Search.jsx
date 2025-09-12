import React from "react";
import localisation from "../assets/localisation.svg";

const Search = () => {
  return (
    <div className="w-full bg-gray-100/10 px-4 py-3 rounded-lg mt-10 max-w-3xl mx-auto">
      <div className="relative flex items-center">
        {/* search icon */}
        <img
          className="absolute left-3 h-5 w-5 "
          src={localisation}
          alt="search"
        />
        {/* input */}
        <label htmlFor="search" className="sr-only">
          Search Movies
        </label>
        <input
          type="text"
          placeholder="  Entrer le nom de la clinique ou medecin  "
          className="w-full bg-transparent py-4 px-6 pl-10 not-only-of-type:text-base text-black placeholder-gray-200 outline-none shadow-md focus:shadow-lg rounded-full  border  border-gray-100 focus:border-blue-500 focus:ring-1 focus:ring-gray-500 transition-colors"
        />

        <button className="absolute right-2 top-1/2 -translate-y-1/2 px-3 md:px-6 py-3 rounded-full font-medium text-sm md:text-base  bg-[#0FDCBC] text-white hover:bg-[#0cc7a9] transition">
          Rechercher
        </button>
      </div>
    </div>
  );
};

export default Search;
