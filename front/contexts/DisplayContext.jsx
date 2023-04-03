import React from "react";
import { createContext, useState } from "react";

export const DisplayContext = createContext();

export function DisplayContextWrapper({ children }) {
  const [DisplaySearchResults, setDisplaySearchResults] = useState(false);
  return (
    <DisplayContext.Provider
      value={{ DisplaySearchResults, setDisplaySearchResults }}
    >
      {children}
    </DisplayContext.Provider>
  );
}
