import React, { useContext } from "react";
import "./App.css";
import "./index.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Navbar from "./component/Navbar";
import Search from "./component/Search";
import OurStat from "./component/OurStat";
import HowItWorks from "./component/HowItWorks";
import MySwiper from "./component/MySwiper";
import Faqs from "./component/Faqs";
import Footer from "./component/Footer";
import RendezVou from "./component/RendezVou";
import Sign_in from "./component/sign_in/Sign_in";
import Sign_up from "./component/sign_up/Sign_up";
import { AppContext } from "./context/appContext";
import WilayaList from "./component/WilayaList/WilayaList";
import Calendar from "./component/calendar/Calendar";
import Location from "./component/WilayaList/Location";
import SuccessMessage from "./component/SuccessMessage/SuccessMessage";
import ErrorMessage from "./component/ErrorMessage/ErrorMessage";
import Schedule from "./component/Schedule/Schedule";
import DoctorCard from "./component/DoctorCard/DoctorCard";
import SearchResults from "./component/SearchResults/SearchResults";

function App() {
  const { showForm, isBlurred, showSignIn , showSignUp, showCalendar , showSchedule, showLocation , showSearchResults } = useContext(AppContext);

  return (
    <>
      <div className={`relative ${isBlurred ? "bg-black/50 blur-sm" : ""}`}>
        <Navbar />
        <div className="relative text-center mt-10 px-4 top-[62px]">
          {!showSearchResults && 
          <div>
          <h1 className=" text-4xl lg:text-5xl font-bold leading-snug font-sans">
            Prenez votre <span className="text-[#0FDCBC]">rendez-vous</span>{" "}
            <br />
            <span className="text-[#0FDCBC]">médical</span> en quelques clics !
          </h1>
          <p className="mt-4 text-gray-600 text-lg font-sans">
            Trouvez votre clinique et réservez facilement en ligne, <br />
            où que vous soyez.
          </p>
          </div>
          }
          <Search />
        </div>
        {showSearchResults && <SearchResults />}
        {!showSearchResults &&
        <div>
          <OurStat />
        </div>
        }
        {!showSearchResults &&<HowItWorks />}
        {!showSearchResults &&<MySwiper />}
        {!showSearchResults &&<Faqs />}
        <Footer />
      </div>
      {showForm && <RendezVou />}
      {showSignIn && <Sign_in />}
      {showSignUp && <Sign_up />}
      {showCalendar && <Calendar />}
      {showSchedule && <Schedule />}
      {showLocation && <Location />}
      {showLocation && <WilayaList />}
    </>
  );
}

export default App;
