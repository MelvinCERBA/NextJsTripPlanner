import React from "react";
import { createContext, useState } from "react";

export const SearchResultsContext = createContext(null);

export function SearchResultsContextWrapper({ children }) {
  const activities = [
    { name: "activité 1", date: new Date().toLocaleDateString("fr") },
    {
      name: "activité 2",
      date: new Date().toLocaleDateString("fr"),
      desc: "bsqfhsdjfousdhq qdsfhqisofhilqus sduihfqsidfjoisqdh",
    },
    {
      name: "activité 3",
      date: new Date().toLocaleDateString("fr"),
      desc: "bsqfhsdjfousdhq qdsfhqisofhilqus sduihfqsidfjoisqdh",
      price: 15.55,
    },
    {
      name: "activité 4",
      date: new Date().toLocaleDateString("fr"),
      desc: "bsqfhsdjfousdhq qdsfhqisofhilqus sduihfqsidfjoisqdh",
      adress: "32 rue Emile Zola",
    },
  ];
  const [SearchResults, setSearchResults] = useState(activities);

  return (
    <SearchResultsContext.Provider value={{ SearchResults, setSearchResults }}>
      {children}
    </SearchResultsContext.Provider>
  );
}
