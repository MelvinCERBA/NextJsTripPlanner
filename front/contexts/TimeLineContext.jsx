import React from "react";
import { createContext, useState } from "react";

export const TimeLineContext = createContext();

export function TimeLineContextWrapper({ children }) {
  const events = [
    { name: "activité 1", date: Date.now(), price: 15 },
    { name: "activité 2", date: Date.now(), price: 15 },
  ];
  const cities = [
    {
      city: "Lyon",
      start: new Date().toLocaleDateString("fr"),
      end: new Date().toLocaleDateString("fr"),
      events: events,
    },
    {
      city: "Paris",
      start: new Date().toLocaleDateString("fr"),
      end: new Date().toLocaleDateString("fr"),
      events: events,
    },
  ];
  const [TimeLine, setTimeLine] = useState(cities);
  console.log(`Setting TimeLineContext value : ${JSON.stringify(TimeLine)}`);
  return (
    <TimeLineContext.Provider value={{ TimeLine, setTimeLine }}>
      {children}
    </TimeLineContext.Provider>
  );
}
