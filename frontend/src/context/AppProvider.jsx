import { useState } from "react";
import { AppContext } from "./appContext";

export const AppProvider = ({ children }) => {
  const [showForm, setShowForm] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);

  const handleForm = () => {
    setShowForm(!showForm);
    setIsBlurred(!isBlurred);
    setShowSignIn(false);
    setShowSignUp(false);
    setShowCalendar(false);
    setShowSchedule(false);
  };

  const handleSignIn = () => {
    setShowSignIn(!showSignIn);
    setIsBlurred(!isBlurred);
  };

  const handleSignUp = () => {
    setShowSignUp(!showSignUp);
    setShowSignIn(false);
  };

  const handleSignUpClose = () => {
    setShowSignUp(!showSignUp);
    setIsBlurred(!isBlurred);
    setShowCalendar(false);
  };

  const handleCalendar = () => {
    setShowCalendar(!showCalendar);
    setShowSchedule(false);
  };

  const handleSchedule = () => {
    setShowSchedule(!showSchedule);
    setShowCalendar(false);
  };

  const handleLocation = () => {
    setShowLocation(!showLocation);
  }

  const handleSearchResults = () => {
    setShowSearchResults(!showSearchResults);
  }


  return (
    <AppContext.Provider
      value={{
        handleForm,
        handleSignIn,
        handleSignUp,
        handleSignUpClose,
        handleCalendar,
        handleSchedule,
        handleLocation,
        handleSearchResults,
        showForm,
        isBlurred,
        showSignIn,
        showSignUp,
        showCalendar,
        showSchedule,
        showLocation,
        showSearchResults,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
