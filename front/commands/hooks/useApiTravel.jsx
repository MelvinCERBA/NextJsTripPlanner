/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import useCookie from "react-use-cookie";
import axios from "axios";

export const useApiTravel = () => {
  const [error, setError] = useState("");
  const [Travels, setTravels] = useState(false);

  async function getTravels() {
    try {
      const { data } = await axios.get("http://localhost:8081/trip/roadtrips", {
        headers: {
          "X-Token": cookie_userToken,
        },
      });
      setTravels(data.result);
    } catch (error) {
      setError(error);
    }
  }

  async function saveTravel(travel) {
    travel_json = JSON.stringify(travel);
    try {
      const { data } = await axios.post("http://localhost:8081/trip/save", {
        headers: {
          "X-Token": cookie_userToken,
        },
        data: travel_json,
      });
    } catch (error) {
      setError(error);
    }
  }

  return [Travels, getTravels];
};
