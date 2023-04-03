import React from "react";
import { createContext, useState } from "react";

export const DisplayContext = createContext();

export function DisplayContextWrapper({ children }) {
  const [DisplaySearchResults, setDisplaySearchResults] = useState(false);
  const [DisplayForm, setDisplayForm] = useState("");
  const [ActivityToAdd, setActivityToAdd] = useState(null);
  return (
    <DisplayContext.Provider
      value={{
        DisplaySearchResults,
        setDisplaySearchResults,
        DisplayForm,
        setDisplayForm,
        ActivityToAdd,
        setActivityToAdd,
      }}
    >
      {children}
    </DisplayContext.Provider>
  );
}
