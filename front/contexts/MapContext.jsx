import React, { useEffect } from "react";
import { createContext, useState } from "react";
import axios from "axios";

export const MapContext = createContext();

export function MapContextWrapper({ children }) {
  const [coords, setCoords] = useState([2.3522219, 48.856614]);
  const [search, setSearch] = useState({
    type: "hotels",
    city: "Paris",
    coords: [2.3522219, 48.856614],
    radius: "5",
  });
  const [SearchResults, setSearchResults] = useState();
  const [Error, setError] = useState();

  const askAmadeus = async () => {
    try {
      const request = `http://localhost:8081/trip/event?longitude=${
        coords[0]
      }&latitude=${coords[1]}&${
        search.type ? `${search.type}=true&` : ""
      }radius=${search.radius}`;

      const { data } = await axios.get(request);
      console.log(
        `MAP CONTEXT: search ${request} = ${JSON.stringify(
          search
        )} => results = ${JSON.stringify(await data.data.result)}`
      );
      setSearchResults(data.data.result[search.type].data);
    } catch (error) {
      console.log(`MAP CONTEXT: : got error ${error} : `);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      setError(error);
    }
  };

  useEffect(() => {
    console.log(`MAP CONTEXT : search updated = ${JSON.stringify(search)}`);
  }, [search]);

  useEffect(() => {
    console.log(`MAP CONTEXT : coords updated = ${JSON.stringify(coords)}`);
  }, [coords]);

  return (
    <MapContext.Provider
      value={{
        coords,
        setCoords,
        search,
        setSearch,
        askAmadeus,
        SearchResults,
        setSearchResults,
      }}
    >
      {children}
    </MapContext.Provider>
  );
}
