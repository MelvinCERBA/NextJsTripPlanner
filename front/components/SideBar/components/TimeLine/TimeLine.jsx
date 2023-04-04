import React, { useContext } from "react";
import { CityStep } from "./components";
import { ApiContext } from "@/contexts";

export function TimeLine() {
  // eslint-disable-next-line no-unused-vars
  const { Travel, setTravel } = useContext(ApiContext);

  return (
    <div className="flex flex-col w-full overflow-scroll">
      {Travel.steps.map((ville) => (
        <CityStep key={ville.city} city={ville} />
      ))}
    </div>
  );
}
