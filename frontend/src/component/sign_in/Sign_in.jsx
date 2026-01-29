import React from "react";

import "../RendezVou.css";
import logo from "../../assets/logo-header.svg";
import { useContext } from "react";
import { AppContext } from "../../context/appContext";

function Sign_in() {
  const { handleSignIn , handleSignUp } = useContext(AppContext);
  return (
    <div className="rendez-vou-container ">
      <div className="rendez-vou">
        <div className="absolute top-4 right-4 z-50">
          <button
            onClick={handleSignIn}
            className="group w-10 h-10 rounded-full bg-gradient-to-r from-[#0FDCBC] to-[#0dc9af] flex items-center justify-center text-white shadow-lg hover:cursor-pointer hover:shadow-xl hover:shadow-[#0FDCBC]/30 hover:scale-110 active:scale-95 transition-all duration-300"
          >
            <i className="fa-solid fa-x text-sm transition-transform"></i>
          </button>
        </div>
        <div className="rendez">
          <div className="rendez-header">
            <img src={logo} alt="logo-Polyclinica" />
            <p className="text-gray-500">Acceder a votre espace patient</p>
          </div>
          <div className="rendez-body">
            <form>
              <div className="civilite">
                <div className="email mt-12">
                  <label className="block text-sm font-medium text-gray-700">
                    Adresse e-mail
                  </label>
                  {/* Email */}
                  <div>
                    <input
                      type="email"
                      className="w-84 h-14 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0FDCBC] focus:border-transparent mt-2"
                      placeholder="Entrer votre adresse e-mail"
                      required
                    />
                  </div>
                </div>
                <div className="email mt-7">
                  <label className="block text-sm font-medium text-gray-700">
                    Mote de passe
                  </label>
                  {/* Email */}
                  <div>
                    <input
                      type="text"
                      className="w-84 h-14 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0FDCBC] focus:border-transparent mt-2"
                      placeholder="Entrer votre mote de passe"
                      required
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-7 gap-3 ">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remember-me"
                      className="h-4 w-4 text-[#0FDCBC] focus:ring-[#0FDCBC] hover:cursor-pointer border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-xs text-gray-700">
                      Se souvenir de moi
                    </label>
                  </div>
                  <a href="#" className="text-xs text-[#dc3b0f] hover:underline">
                    Mot de passe oublié ?
                  </a>
                </div>
                <div className="email mt-8">
                  <button className="relative w-84 h-10 border-transparent bg-gradient-to-r from-[#0FDCBC] to-[#0dc9af] rounded-4xl text-white font-bold shadow-lg hover:cursor-pointer hover:shadow-[0_0_25px_rgba(15,220,188,0.6)] transition-all duration-500 group">
                    <span className="group-hover:text-white/90">Submit</span>

                    {/* Effet neon externe */}
                    <span className="absolute -inset-1 bg-gradient-to-r from-[#0FDCBC] to-[#0dc9af] rounded-4xl blur opacity-0 group-hover:opacity-70 transition-opacity duration-500 -z-10"></span>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="rendez-footer">
            <button className="submit-button"></button>
          </div>
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex items-center">
         <p className="text-gray-500 text-xs">pas de compte ? </p>
         <a onClick={handleSignUp} className="ml-2 text-[#0FDCBC] hover:cursor-pointer hover:underline text-xs">Creer un compte</a>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Sign_in;
