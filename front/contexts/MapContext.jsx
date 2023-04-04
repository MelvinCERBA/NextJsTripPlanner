import React from "react";
import { createContext, useState } from "react";

export const MapContext = createContext();

export function MapContextWrapper({ children }) {
  const [coords, setCoords] = useState([2.3522219, 48.856614]);
  const [search, setSearch] = useState({ type: "", city: "", radius: "" });

  return (
    <MapContext.Provider
      value={{
        coords,
        setCoords,
        search,
        setSearch,
      }}
    >
      {children}
    </MapContext.Provider>
  );
}
