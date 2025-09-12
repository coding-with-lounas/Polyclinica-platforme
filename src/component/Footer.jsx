import logo from "../assets/logo-header.svg";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footerpage px-6 py-8 md:px-16 md:py-28 lg:px-28 ">
      <div className="flex flex-col md:flex-row md:flex-wrap gap-8 justify-center ">
        <div className="flex-1 min-w-[250px] md:max-w-[30%] ">
          <a href="">
            <img src={logo} alt="logo-Polyclinica" />
          </a>
          <p className="mt-4 text-[#002C22] leading-relaxed opacity-60">
            Nous facilitons l’accès aux soins en vous <br />
            connectant à un large réseau de cliniques et de <br />
            médecins qualifiés. Prenez rendez-vous en <br />
            quelques clics et gagnez du temps.
          </p>
<ul className="mt-4 flex gap-2 text-xl text-[#0FDCBC]">
  <li>
    <a href="#" aria-label="Facebook" className="hover:opacity-70 transition">
      <FaFacebookF />
    </a>
  </li>
  <li>
    <a href="#" aria-label="Twitter" className="hover:opacity-70 transition">
      <FaTwitter />
    </a>
  </li>
  <li>
    <a href="#" aria-label="Instagram" className="hover:opacity-70 transition">
      <RiInstagramFill />
    </a>
  </li>
  <li>
    <a href="#" aria-label="LinkedIn" className="hover:opacity-70 transition">
      <FaLinkedinIn />
    </a>
  </li>
  <li>
    <a href="#" aria-label="YouTube" className="hover:opacity-70 transition">
      <FaYoutube />
    </a>
  </li>
</ul>
      </div>
     
     
  <div>
  <h2 className="text-lg mb-4 font-bold">Navigation</h2>
  <ul className="space-y-2 text-sm text-[#002C22] opacity-60">
    <li>
      <a href="/" className="hover:text-teal-600 transition-colors">Accueil</a>
    </li>
    <li>
      <a href="/fonctionnement" className="hover:text-teal-600 transition-colors">Fonctionnement</a>
    </li>
    <li>
      <a href="/rendez-vous" className="hover:text-teal-600 transition-colors">Prendre rendez-vous</a>
    </li>
    <li>
      <a href="/avis" className="hover:text-teal-600 transition-colors">Avis</a>
    </li>
  </ul>
</div>

<div>
  <h2 className="text-lg mb-4 font-bold">Légal</h2>
  <ul className="space-y-2 text-sm text-[#002C22] opacity-60">
    <li>
      <a href="/confidentialite" className="hover:text-teal-600 transition-colors">
        Politique de confidentialité
      </a>
    </li>
    <li>
      <a href="/cgu" className="hover:text-teal-600 transition-colors">
        Conditions générales d’utilisation
      </a>
    </li>
    <li>
      <a href="/cookies" className="hover:text-teal-600 transition-colors">
        Politique de cookies
      </a>
    </li>
  </ul>
</div>

<div>
  <h2 className="text-lg mb-4 font-bold">Assistance</h2>
  <ul className="space-y-2 text-sm text-[#002C22] opacity-60">
    <li>
      <a href="/faq" className="hover:text-teal-600 transition-colors">FAQ</a>
    </li>
    <li>
      <a href="/support" className="hover:text-teal-600 transition-colors">Support technique</a>
    </li>
    <li>
      <a href="/contact" className="hover:text-teal-600 transition-colors">Nous contacter</a>
    </li>
  </ul>
</div>

      </div>
    </footer>
  );
}

export default Footer;
