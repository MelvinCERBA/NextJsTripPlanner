import React from "react";
import { createContext, useState } from "react";

export const SearchResultsContext = createContext(null);

export default function SearchResultsContextWrapper({ children }) {
  const [SearchResults, setSearchResults] = useState("null");
  return (
    <SearchResultsContext.Provider value={{ SearchResults, setSearchResults }}>
      {children}
    </SearchResultsContext.Provider>
  );
}
