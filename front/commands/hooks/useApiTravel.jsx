/* eslint-disable no-undef */
import { useState } from "react";
import axios from "axios";
import { Cookies } from "react-cookie";

export const useApiTravel = () => {
  const [error, setError] = useState("");
  const cookies = new Cookies();

  async function getTravels() {
    try {
      const { data } = await axios.get("http://localhost:8081/trip/roadtrips", {
        headers: {
          "X-Token": cookies.get("TT_USER_TOKN"),
          "Access-Control-Allow-Origin": "*",
        },
      });
      console.log(
        `USEAPICONTEXT: travels recuperated : ${JSON.stringify(
          data.data.result
        )}`
      );
      return data.data.result;
    } catch (error) {
      console.log(`USEAPITRAVEL : got error ${error}`);
      setError(error);
    }
  }

  async function saveTravel(travel) {
    if (!travel.name) {
      console.log("Travel needs a name to be saved.");
      return;
    }
    let travel_json = JSON.stringify(travel);
    console.log(
      `USEAPITRAVEL : saving Travel ${travel_json}, using cookie ${cookies.get(
        "TT_USER_TOKN"
      )}`
    );
    try {
      const { data } = await axios.post(
        "http://localhost:8081/trip/save",
        travel,
        {
          headers: {
            "X-Token": JSON.stringify(cookies.get("TT_USER_TOKN")),
            // "Access-Control-Allow-Origin": "*",
          },
        }
      );
      console.log(`USEAPITRAVEL : got result ${JSON.stringify(data.result)}`);
      return data.result;
    } catch (error) {
      console.log(`USEAPITRAVEL : got error ${error}`);
      setError(error);
    }
  }

  return [saveTravel, getTravels, error];
};
