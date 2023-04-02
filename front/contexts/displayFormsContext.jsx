import { createContext, useState } from "react";

export const displayFormsContext = createContext(null);

export default function displayFormsContextWrapper({ children }) {
  const [displayForms, setDisplayForms] = useState("null");
  return (
    <displayFormsContext.Provider value={{ displayForms, setDisplayForms }}>
      {children}
    </displayFormsContext.Provider>
  );
}
