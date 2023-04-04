import React, { useEffect } from "react";
import { createContext, useState } from "react";
import axios from "axios";
import { useAuth } from "@/commands";

export const ApiContext = createContext();

export function ApiContextWrapper({ children }) {
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
  const activities = [
    { name: "activité 1", date: new Date().toLocaleDateString("fr") },
    {
      name: "activité 2",
      date: new Date().toLocaleDateString("fr"),
      desc: "bsqfhsdjfousdhq qdsfhqisofhilqus sduihfqsidfjoisqdh",
      link: "https://google.fr",
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
  //TODO get le voyage et les resultats de la recherche depuis l'api
  const [Travel, setTravel] = useState(cities);
  const [SearchResults, setSearchResults] = useState(activities);
  const [ActivityToAdd, setActivityToAdd] = useState(null);
  const [User, setUser] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [{ username, token }, userDataHandler, disconnect, error] = useAuth();

  useEffect(() => {
    // TODO update le voyage dans le back quand le voyage est modifié localement
  }, [Travel]);

  return (
    <ApiContext.Provider
      value={{
        Travel,
        setTravel,
        SearchResults,
        setSearchResults,
        ActivityToAdd,
        setActivityToAdd,
        User,
        setUser,
        userDataHandler,
        error,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}
