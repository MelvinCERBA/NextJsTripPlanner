import React from "react";
import { createContext, useState } from "react";

export const DisplayContext = createContext();

export function DisplayContextWrapper({ children }) {
  const [DisplaySearchResults, setDisplaySearchResults] = useState(false);
  const [DisplayForm, setDisplayForm] = useState("");
  const [displayMap, setDisplayMap] = useState(false);

  return (
    <DisplayContext.Provider
      value={{
        DisplaySearchResults,
        setDisplaySearchResults,
        DisplayForm,
        setDisplayForm,
        displayMap,
        setDisplayMap,
      }}
    >
      {children}
    </DisplayContext.Provider>
  );
}
