import React, { useEffect } from "react";
import { createContext, useState } from "react";

export const TravelContext = createContext();

export function TravelContextWrapper({ children }) {
  //TODO get le voyage depuis l'api
  const events = [
    { name: "activité 1", date: Date.now(), price: 15 },
    { name: "activité 2", date: Date.now(), price: 15 },
  ];
  const cities = [
    {
      city: "Lyon",
      start: new Date().toLocaleDateString("fr"),
      end: new Date().toLocaleDateString("fr"),
      events: events,
    },
    {
      city: "Paris",
      start: new Date().toLocaleDateString("fr"),
      end: new Date().toLocaleDateString("fr"),
      events: [...events, ...events],
    },
  ];
  const [Travel, setTravel] = useState(cities);
  console.log(
    `TRAVEL CONTEXT : Setting TravelContext value : ${JSON.stringify(Travel)}`
  );

  useEffect(() => {
    // TODO update le voyage dans le back quand le voyage est modifié localement
  }, [Travel]);

  return (
    <TravelContext.Provider value={{ Travel, setTravel }}>
      {children}
    </TravelContext.Provider>
  );
}
