import React, { useContext } from "react";
import { CityStep } from "./components";
import { ApiContext } from "@/contexts";
import { Button, Input } from "@/components";

export function TimeLine() {
  // eslint-disable-next-line no-unused-vars
  const { Travel, setTravel, saveTravel } = useContext(ApiContext);

  function handleClickSave(e) {
    e.stopPropagation();
    saveTravel(Travel);
    console.log(`TIMELINE : Travel saved ${1}`);
  }

  return (
    <div className="flex flex-col w-full overflow-scroll">
      <Input
        type="text"
        label="Nom du voyage"
        placeholder="Voyage à Bangkok !!"
        className=" text-xl w-1/2 bg-transparent self-center"
        onChange={(e) => setTravel({ ...Travel, name: e.target.value })}
      />
      {Travel ? (
        Travel.steps.map((ville) => <CityStep key={ville.city} city={ville} />)
      ) : (
        <></>
      )}
      <Button
        label="Sauvegarder le voyage"
        onClick={(e) => handleClickSave(e)}
      />
    </div>
  );
}
