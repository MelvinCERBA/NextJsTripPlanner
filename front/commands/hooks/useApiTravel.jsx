/* eslint-disable no-undef */
import { useState } from "react";
import axios from "axios";

export const useApiTravel = () => {
  const [error, setError] = useState("");

  async function getTravels() {
    try {
      const { data } = await axios.get("http://localhost:8081/trip/roadtrips", {
        headers: {
          "X-Token": cookie_userToken,
        },
      });
      console.log(
        `USEAPICONTEXT: travels recuperated : ${JSON.stringify(data.result)}`
      );
      return data.result;
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
      return data.result;
    } catch (error) {
      setError(error);
    }
  }

  return [saveTravel, getTravels, error];
};
