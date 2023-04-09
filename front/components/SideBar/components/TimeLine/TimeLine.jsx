import React, { useContext, useState } from "react";
import { CityStep } from "./components";
import { ApiContext, DisplayContext } from "@/contexts";
import { Button, Input } from "@/components";
import { BsPlusLg } from "react-icons/bs";

export function TimeLine() {
  // eslint-disable-next-line no-unused-vars
  const { Travel, setTravel, saveTravel } = useContext(ApiContext);
  const { setDisplayForm } = useContext(DisplayContext);
  const [ TravelName, setTravelName] = useState("");

  function handleClickSave(e) {
    e.stopPropagation();
    setTravel({ ...Travel, name: TravelName });
    saveTravel(Travel);
    console.log(`TIMELINE : Travel saved ${1}`);
  }

  function handleClickAddCity(e) {
    e.stopPropagation();
    setDisplayForm("add-city");
  }

  return (
    <div className="flex flex-col w-full overflow-scroll">
      <div className="flex items-center justify-center bg-white shadow-xl rounded-xl m-5 p-5">
        <Input
          type="text"
          label="Nom du voyage"
          placeholder="Voyage à Bangkok !!"
          className=" px-5 text-xl w-1/2 bg-transparent self-center"
          onChange={(e) => setTravelName(e.target.value)}
        />
        <Button
          label="Enregistrer"
          onClick={(e) => handleClickSave(e)}
          className=" mx-5 my-3"
        />
      </div>
      {Travel ? (
        Travel.steps.map((ville) => <CityStep key={ville.city} city={ville} />)
      ) : (
        <></>
      )}
      <div
        onClick={(e) => handleClickAddCity(e)}
        className="flex text-orange-main items-center hover:text-orange-secondary"
      >
        <BsPlusLg size={30} />
        <p>Ajouter une étape</p>
      </div>
    </div>
  );
}
