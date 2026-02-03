import React from "react";
import logo from "../../assets/logo-header.svg";
import { useContext } from "react";
import { AppContext } from "../../context/appContext";

function Sign_up() {
  const { handleSignUpClose, handleCalendar } = useContext(AppContext);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="relative bg-white w-[400px] h-[600px] rounded-2xl pt-4 pr-8 pb-4 pl-8 gap-2.5">
        <div className="absolute top-4 right-4 z-50">
          <button
            onClick={handleSignUpClose}
            className="group w-10 h-10 rounded-full bg-gradient-to-r from-[#0FDCBC] to-[#0dc9af] flex items-center justify-center text-white shadow-lg hover:cursor-pointer hover:shadow-xl hover:shadow-[#0FDCBC]/30 hover:scale-110 active:scale-95 transition-all duration-300"
          >
            <i className="fa-solid fa-x text-sm transition-transform"></i>
          </button>
        </div>
        <div className="w-[336px] h-[568px] flex flex-col">
          <div className="mb-5 flex flex-col justify-center items-center">
            <img src={logo} alt="logo-Polyclinica" />
            <p className="text-gray-500 mt-2">Creer votre compte patient</p>
          </div>
          <div>
            <form>
              <div className="w-full h-12.5 gap-2">
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
                    />
                    <span className="text-xs">Monsieur</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="civilite"
                      value="Madame"
                      className="w-4 h-4 text-[#0FDCBC]"
                    />
                    <span className="text-xs">Madame</span>
                  </label>
                </div>
                <div className="w-[291px] h-12.5 grid grid-cols-1 gap-4">
                  <div className="flex justify-center gap-4 ml-10">
                    <div className="flex flex-col">
                      <label className="block text-sm font-medium text-gray-700 mb-2 mt-4">
                        Nom
                      </label>
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
                <div className="flex flex-col mt-12">
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <div>
                    <input
                      type="email"
                      className="w-84 h-10 px-4 py-3 border border-gray-300 rounded-4xl focus:ring-2 focus:ring-[#0FDCBC] focus:border-transparent mt-2"
                      placeholder="email"
                      required
                    />
                  </div>
                </div>
                <div className="w-[291px] h-12.5 grid grid-cols-1 gap-4">
                  <div className="flex justify-center gap-4 ml-11">
                    <div className="flex flex-col">
                      <label className="block text-sm font-medium text-gray-700 mb-2 mt-4">
                        Mot de passe
                      </label>
                      <div>
                        <input
                          type="password"
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
                      <div>
                        <input
                          type="password"
                          className="w-40 h-10 px-4 py-3 border border-gray-300 rounded-4xl focus:ring-2 focus:ring-[#0FDCBC] focus:border-transparent"
                          placeholder="Confirmation"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[291px] h-12.5 grid grid-cols-1 gap-4 mt-8">
                  <div className="flex justify-center gap-4 ml-11">
                    <div className="flex flex-col">
                      <label className="block text-sm font-medium text-gray-700 mb-2 mt-4">
                        Date de naissance
                      </label>
                      <div>
                        <input
                          type="text"
                          onFocus={handleCalendar}
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
                      <div>
                        <input
                          type="tel"
                          className="w-40 h-10 px-4 py-3 border border-gray-300 rounded-4xl focus:ring-2 focus:ring-[#0FDCBC] focus:border-transparent"
                          placeholder="Tel"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col mt-16">
                  <button className="relative w-84 h-10 border-transparent bg-gradient-to-r from-[#0FDCBC] to-[#0dc9af] rounded-4xl text-white font-bold shadow-lg hover:cursor-pointer hover:shadow-[0_0_25px_rgba(15,220,188,0.6)] transition-all duration-500 group">
                    <span className="group-hover:text-white/90">Submit</span>
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

export default Sign_up;