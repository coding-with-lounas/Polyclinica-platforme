import logo from "../assets/logo-header.svg";

const Navbar = () => {
  return (
    <header className="flex items-center justify-evenly  z-30 h-15 shadow-level-2 lg:h-[92px] bg-surface-neutral-high shadow-level-2">
      <div className="logo-header">
        <a href="">
          <img src={logo} alt="logo-Polyclinica" />
        </a>
      </div>
      <div>
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-gray-400">
          <a
            href="/"
            className="hover:text-[#0FDCBC] hover:underline transition-colors"
          >
            Accueil
          </a>
          <a
            href="/fonctionnement"
            className="hover:text-[#0FDCBC] hover:underline transition-colors"
          >
            Fonctionnement
          </a>
          <a
            href="/faq"
            className="hover:text-[#0FDCBC] hover:underline transition-colors"
          >
            FAQ's
          </a>
          <a
            href="/contact"
            className="hover:text-[#0FDCBC] hover:underline transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>

      <div>
        <a
          href=""
          className="px-4 py-2 rounded-xl bg-[#0FDCBC] text-white hover:bg-[#0cc7a9] transition"
        >
          se connecter
        </a>
      </div>
    </header>
  );
};
export default Navbar;
