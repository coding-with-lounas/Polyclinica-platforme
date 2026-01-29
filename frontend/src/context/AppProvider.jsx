import { useState } from "react";
import { AppContext } from "./appContext";

export const AppProvider = ({ children }) => {
  const [showForm, setShowForm] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleForm = () => {
    setShowForm(!showForm);
    setIsBlurred(!isBlurred);
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
    }

  return (
    <AppContext.Provider
      value={{ handleForm, handleSignIn, handleSignUp, handleSignUpClose, showForm, isBlurred, showSignIn, showSignUp }}
    >
      {children}
    </AppContext.Provider>
  );
};
