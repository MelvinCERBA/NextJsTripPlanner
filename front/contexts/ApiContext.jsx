/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { createContext, useState } from "react";
import axios from "axios";
import { useAuth } from "@/commands";
import { useApiTravel } from "@/commands/hooks/useApiTravel";

export const ApiContext = createContext();

export function ApiContextWrapper({ children }) {
  const events = [
    { name: "activité 1", date: Date.now(), price: 15 },
    { name: "activité 2", date: Date.now(), price: 15 },
  ];
  const travel1 = {
    name: "voyage à lyon",
    steps: [
      {
        city: "Lyon",
        start: new Date().toLocaleDateString("fr"),
        end: new Date().toLocaleDateString("fr"),
        events: events,
      },
    ],
  };
  const travel2 = {
    name: "voyage à Paris",
    steps: [
      {
        city: "Paris",
        start: new Date().toLocaleDateString("fr"),
        end: new Date().toLocaleDateString("fr"),
        events: events,
      },
      {
        city: "Orléans",
        start: new Date().toLocaleDateString("fr"),
        end: new Date().toLocaleDateString("fr"),
        events: [...events, ...events],
      },
    ],
  };
  const travel3 = {
    name: "voyage à Marseille",
    steps: [
      {
        city: "Marseille",
        start: new Date().toLocaleDateString("fr"),
        end: new Date().toLocaleDateString("fr"),
        events: [...events, ...events],
      },
      {
        city: "Salon-de-Provence",
        start: new Date().toLocaleDateString("fr"),
        end: new Date().toLocaleDateString("fr"),
        events: [...events, ...events],
      },
    ],
  };
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
  const [Travel, setTravel] = useState(travel1);
  const [AllTravels, setAllTravels] = useState([travel1, travel2, travel3]);
  const [Travels, setTravels] = useState("");
  const [SearchResults, setSearchResults] = useState(activities);
  const [ActivityToAdd, setActivityToAdd] = useState(null);
  const [User, setUser] = useState(null);
  const [
    { username, token },
    userDataHandler,
    disconnect,
    AuthError,
    AuthLoading,
    AuthConnected,
  ] = useAuth();
  const [saveTravel, getTravels] = useApiTravel();

  useEffect(() => {
    setAllTravels(getTravels()); // Todo:  Put Travels in the useTravelApi hook
    console.log(
      `APICONTEXT: useEffect Called, allTravels : ${JSON.stringify(AllTravels)}`
    );
  }, [AuthConnected]);

  useEffect(() => {
    try {
      setTravels(getTravels);
    } catch (e) {
      console.log(e);
    }
  }, [AuthConnected]);

  useEffect(() => {
    // TODO update le voyage dans le back quand le voyage est modifié localement
  }, [Travel]);

  return (
    <ApiContext.Provider
      value={{
        Travel,
        setTravel,
        AllTravels,
        setAllTravels,
        SearchResults,
        setSearchResults,
        ActivityToAdd,
        setActivityToAdd,
        User,
        setUser,
        userDataHandler,
        AuthError,
        AuthLoading,
        AuthConnected,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}
