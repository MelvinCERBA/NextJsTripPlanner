import React, { useContext } from "react";
import { CityStep } from "./components";
import { TimeLineContext } from "@/contexts";

export function TimeLine() {
  // function removeEvent(city_name, activity_name) {
  //   cities = cities.filter((city) => city.city == city_name);
  // }

  // const events = [
  //   { name: "activité 1", date: Date.now(), price: 15 },
  //   { name: "activité 2", date: Date.now(), price: 15 },
  // ];
  // const cities = [
  //   {
  //     city: "Lyon",
  //     start: new Date().toLocaleDateString("fr"),
  //     end: new Date().toLocaleDateString("fr"),
  //     events: events,
  //   },
  //   {
  //     city: "Paris",
  //     start: new Date().toLocaleDateString("fr"),
  //     end: new Date().toLocaleDateString("fr"),
  //     events: events,
  //   },
  // ];
  // eslint-disable-next-line no-unused-vars
  const [TimeLine, setTimeLine] = useContext(TimeLineContext);
  console.log(`Consuming TimeLineContext : ${JSON.stringify(TimeLine)}`);

  return (
    <div className="flex flex-col w-full">
      {TimeLine.map((ville) => (
        <CityStep key={ville.city} city={ville} />
      ))}
    </div>
  );
}
