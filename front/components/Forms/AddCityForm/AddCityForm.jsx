import React from "react";
import { joinClasses } from "../../../commands/utils";
import { Input } from "@/components";
import { Button } from "@/components";
import { useState, useContext } from "react";
import { DisplayContext, MapContext, ApiContext } from "@/contexts";

export function AddCityForm({ className = "" }) {
  const [StartDate, setStartDate] = useState("");
  const [EndDate, setEndDate] = useState("");
  const [CityName, setCityName] = useState("");
  // eslint-disable-next-line no-unused-vars
  const { setDisplaySearchResults, DisplayForm, setDisplayForm } =
    useContext(DisplayContext);
  const { Travel, setTravel } = useContext(ApiContext);
  const { search } = useContext(MapContext);

  function handleChangedInputStartDate(e) {
    const d = new window.Date(e.target.value);
    console.log(`ADD ACTIVITY FORM : setting start date to ${d}`);
    setStartDate(d);
  }
  function handleChangedInputEndDate(e) {
    const d = new window.Date(e.target.value);
    console.log(`ADD ACTIVITY FORM : setting end date to ${d}`);
    setEndDate(d);
  }

  function handleClickAddCity() {
    if (CityName) {
      if (StartDate < EndDate) {
        console.log(
          `ADD CITY FORM : considering adding city to travel ${JSON.stringify(
            Travel
          )}`
        );
        setTravel((travel) => {
          console.log(`ADD CITY FORM : got travel ${JSON.stringify(travel)}`);
          var new_travel = { ...travel };
          // for (const [i, city] of new_travel.steps.entries()) {
          //   const start = new window.Date(city.start);
          //   const end = new window.Date(city.end);
          //   // if dates overlap with another citystep, dont update new_Travel
          //   if (Date > start && Date < end) {
          //     return new_travel;
          //   }
          // }
          new_travel.steps.push({
            city: CityName,
            start: StartDate.toISOString().slice(0, 10),
            end: EndDate.toISOString().slice(0, 10),
            events: [],
          });
          new_travel.steps.sort(CityDateComparison);
          console.log(
            `ADD CITY FORM : new travel : ${JSON.stringify(new_travel)}`
          );
          return new_travel;
        });
      }
    }
    setDisplayForm("");
  }

  function CityDateComparison(a, b) {
    const a_date = new window.Date(a.start);
    const b_date = new window.Date(b.start);

    if (a_date < b_date) {
      return -1;
    }
    if (a_date > b_date) {
      return 1;
    }
    return 0;
  }

  return (
    <>
      <div className="absolute top-0 left-0 bg-black h-full w-full flex justify-center items-center opacity-50 z-0" />
      <div
        onClick={() => setDisplayForm("")}
        className="absolute top-0 left-0  h-full w-full flex justify-center items-center z-10"
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={joinClasses([
            className,
            "flex opacity-100 flex-col justify-center z-20 flex-wrap gap-4 w-fit h-fit p-5 rounded-md shadow-xl bg-white ",
          ])}
        >
          <Input
            type="text"
            value={search.city}
            name="CityName"
            onChange={(e) => setCityName(e.target.value)}
            label="Ville"
            className="basis-3/12"
          />
          <Input
            type="date"
            name="Date"
            onChange={(e) => handleChangedInputStartDate(e)}
            label="Arrivée"
            className="basis-3/12"
          />
          <Input
            type="date"
            name="Date"
            onChange={(e) => handleChangedInputEndDate(e)}
            label="Départ"
            className="basis-3/12"
          />
          <Button onClick={handleClickAddCity} label="Ajouter" />
        </div>
      </div>
    </>
  );
}
