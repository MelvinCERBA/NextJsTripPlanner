/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useRef } from "react";
import { createContext, useState } from "react";
import { useAuth } from "@/commands";
import { useApiTravel } from "@/commands/hooks/useApiTravel";

export const ApiContext = createContext();

export function ApiContextWrapper({ children }) {
  console.log(`API_CONTEXT : Rendering. ${1}`);
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
  const [saveTravel, getTravels] = useApiTravel();
  const [Travels, setTravels] = useState();
  const [Travel, setTravel] = useState();
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

  function saveTravelToApi(travel) {
    saveTravel(travel);
    fetchTravels();
  }

  const fetchTravels = useCallback(async () => {
    const data = await getTravels();
    console.log(`APICONTEXT : gotten data ${JSON.stringify(await data)}`);
    setTravels(await data);
    setTravel(await data[0]);
  }, []);

  const dataFetchedRef = useRef(false);
  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    fetchTravels().catch(console.error);
  }, []);

  return (
    <ApiContext.Provider
      value={{
        Travel,
        setTravel,
        Travels,
        setTravels,
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
        saveTravel,
        getTravels,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}
