import React from "react";

import "../RendezVou.css";
import logo from "../../assets/logo-header.svg";
import { useContext } from "react";
import { AppContext } from "../../context/appContext";

function Sign_up() {
  const { handleSignUpClose } = useContext(AppContext);

    

  return (
    <div className="rendez-vou-container">
      <div className="rendez-vou">
        <div className="absolute top-4 right-4 z-50">
          <button
            onClick={handleSignUpClose}
            className="group w-10 h-10 rounded-full bg-gradient-to-r from-[#0FDCBC] to-[#0dc9af] flex items-center justify-center text-white shadow-lg hover:cursor-pointer hover:shadow-xl hover:shadow-[#0FDCBC]/30 hover:scale-110 active:scale-95 transition-all duration-300"
          >
            <i className="fa-solid fa-x text-sm transition-transform"></i>
          </button>
        </div>
        <div className="rendez">
          <div className="rendez-header">
            <img src={logo} alt="logo-Polyclinica" />
            <p className="text-gray-500">Creer votre compte patient</p>
          </div>
          <div className="rendez-body">
            <form>
              <div className="civilite">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Civilité
                </label>
                <div className="flex gap-6">
                  {" "}
                  {/* gap-6 = 24px d'espace */}
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="civilite"
                      value="Monsieur"
                      className="w-4 h-4 text-[#0FDCBC]"
                    />
                    <span className="text-xs ">Monsieur</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="civilite"
                      value="Madame"
                      className="w-4 h-4 text-[#0FDCBC]"
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
                      {/* Nom */}
                      <div>
                        <input
                          type="text"
                          className="w-40 h-10 px-4 py-3 border border-gray-300 rounded-4xl focus:ring-2 focus:ring-[#0FDCBC] focus:border-transparent"
                          placeholder="nom"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex flex-col h-fit">
                      <label className="block text-sm font-medium text-gray-700 mb-2 mt-4">
                        prénom
                      </label>
                      {/* prénom */}
                      <div>
                        <input
                          type="text"
                          className="w-40 h-10 px-4 py-3 border border-gray-300 rounded-4xl focus:ring-2 focus:ring-[#0FDCBC] focus:border-transparent"
                          placeholder="prénom"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="email mt-12">
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  {/* Email */}
                  <div>
                    <input
                      type="email"
                      className="w-84 h-10 px-4 py-3 border border-gray-300 rounded-4xl focus:ring-2 focus:ring-[#0FDCBC] focus:border-transparent mt-2"
                      placeholder="email"
                      required
                    />
                  </div>
                </div>
                <div className="Nom-Prenom">
                  <div className="flex justify-center gap-4 ">
                    <div className="flex flex-col ">
                      <label className="block text-sm font-medium text-gray-700 mb-2 mt-4">
                        Mot de passe
                      </label>
                      {/* Mot de passe */}
                      <div>
                        <input
                          type="text"
                          className="w-40 h-10 px-4 py-3 border border-gray-300 rounded-4xl focus:ring-2 focus:ring-[#0FDCBC] focus:border-transparent"
                          placeholder="Mot de passe"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex flex-col h-fit">
                      <label className="block text-sm font-medium text-gray-700 mb-2 mt-4">
                        Confirmation
                      </label>
                      {/* Tel */}
                      <div>
                        <input
                          type="text"
                          className="w-40 h-10 px-4 py-3 border border-gray-300 rounded-4xl focus:ring-2 focus:ring-[#0FDCBC] focus:border-transparent"
                          placeholder="Confirmation"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Nom-Prenom mt-8">
                  <div className="flex justify-center gap-4 ">
                    <div className="flex flex-col ">
                      <label className="block text-sm font-medium text-gray-700 mb-2 mt-4">
                        Date de naissance
                      </label>
                      {/* Date de naissance */}
                      <div>
                        <input
                          type="text"
                          className="w-40 h-10 px-4 py-3 border border-gray-300 rounded-4xl focus:ring-2 focus:ring-[#0FDCBC] focus:border-transparent"
                          placeholder="jj / mm / aaaa"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex flex-col h-fit">
                      <label className="block text-sm font-medium text-gray-700 mb-2 mt-4">
                        Num de téléphone
                      </label>
                      {/* Tel */}
                      <div>
                        <input
                          type="text"
                          className="w-40 h-10 px-4 py-3 border border-gray-300 rounded-4xl focus:ring-2 focus:ring-[#0FDCBC] focus:border-transparent"
                          placeholder="Tel"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="email mt-16">
                  <button className="relative w-84 h-10 border-transparent bg-gradient-to-r from-[#0FDCBC] to-[#0dc9af] rounded-4xl text-white font-bold shadow-lg hover:cursor-pointer hover:shadow-[0_0_25px_rgba(15,220,188,0.6)] transition-all duration-500 group">
                    <span className="group-hover:text-white/90">Submit</span>

                    {/* Effet neon externe */}
                    <span className="absolute -inset-1 bg-gradient-to-r from-[#0FDCBC] to-[#0dc9af] rounded-4xl blur opacity-0 group-hover:opacity-70 transition-opacity duration-500 -z-10"></span>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="rendez-footer-info"></div>
          <div className="rendez-footer">
            <button className="submit-button"></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sign_up;
