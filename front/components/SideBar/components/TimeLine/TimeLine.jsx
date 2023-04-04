import React, { useContext } from "react";
import { CityStep } from "./components";
import { ApiContext } from "@/contexts";

export function TimeLine() {
  // function removeEvent(city_name, activity_name) {
  //   cities = cities.filter((city) => city.city == city_name);
  // }

  // eslint-disable-next-line no-unused-vars
  const { Travel, setTravel } = useContext(ApiContext);
  console.log(`TIMELINE : Consuming ApiContext : ${JSON.stringify(Travel)}`);

  return (
    <div className="flex flex-col w-full overflow-scroll">
      {Travel.map((ville) => (
        <CityStep key={ville.city} city={ville} />
      ))}
    </div>
  );
}
