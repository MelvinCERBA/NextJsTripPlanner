/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useRef } from "react";
import { createContext, useState } from "react";
import { useAuth } from "@/commands";
import { useApiTravel } from "@/commands/hooks/useApiTravel";

export const ApiContext = createContext();

export function ApiContextWrapper({ children }) {
  console.log(`API_CONTEXT : Rendering. ${1}`);
  const [saveTravel, getTravels] = useApiTravel();
  const [Travels, setTravels] = useState();
  const [Travel, setTravel] = useState({ name: "", steps: [] });
  const [ActivityToAdd, setActivityToAdd] = useState();
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
    if (await data[0]) {
      setTravel(await data[0]);
    }
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
