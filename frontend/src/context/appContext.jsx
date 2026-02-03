import { createContext } from "react";

export const AppContext = createContext({
  handleForm: () => {},
  handleSignIn: () => {},
  handleSignUp: () => {},
  handleSignUpClose: () => {},
  handleCalendar: () => {},
  handleSchedule: () => {},
  handleLocation: () => {},
  handleSearchResults: () => {},
  updateSelectedDate: () => {},
  updateSelectedAppointment: () => {},
  showForm: false,
  isBlurred: false,
  showSignIn: false,
  showSignUp: false,
  showCalendar: false,
  showSchedule: false,
  showLocation: false,
  showSearchResults: false,
  selectedDate: null,
  selectedAppointment: null,
});