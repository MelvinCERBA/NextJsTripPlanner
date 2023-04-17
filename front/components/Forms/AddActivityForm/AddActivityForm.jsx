import React from "react";
import { joinClasses } from "../../../commands/utils";
import { Input } from "@/components";
import { Button } from "@/components";
import { useState, useContext } from "react";
import { DisplayContext, ApiContext } from "@/contexts";

export function AddActivityForm({ className = "" }) {
  const [Date, setDate] = useState("");
  // eslint-disable-next-line no-unused-vars
  const { setDisplaySearchResults, DisplayForm, setDisplayForm } =
    useContext(DisplayContext);
  const { setTravel, ActivityToAdd } = useContext(ApiContext);

  function handleChangedInputDate(e) {
    const d = new window.Date(e.target.value).toISOString().slice(0, 10);
    console.log(`ADD ACTIVITY FORM : setting date to ${d}`);
    setDate(d);
  }
  function activityDateComparison(a, b) {
    const a_date = new window.Date(a.date);
    const b_date = new window.Date(b.date);

    if (a_date < b_date) {
      return -1;
    }
    if (a_date > b_date) {
      return 1;
    }
    return 0;
  }

  function addActivityToTravel() {
    console.log(`AddActivityForm: Date = ${Date.toString()}`);
    setDisplaySearchResults(false);
    setTravel((travel) => {
      const new_travel = { ...travel };
      for (const [i, city] of new_travel.steps.entries()) {
        const start = new window.Date(city.start);
        const end = new window.Date(city.end);
        if (new window.Date(Date) > start && new window.Date(Date) < end) {
          console.log(`AddActivityForm: city = ${new_travel.steps[i].city}`);
          new_travel.steps[i].events.push({ ...ActivityToAdd, Date });
          new_travel.steps[i].events.sort(activityDateComparison);
        }
      }
      console.log(
        `AddActivityForm: new_travel = ${JSON.stringify(new_travel)}`
      );
      return new_travel;
    });
    setDisplayForm("");
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
          <h1>{ActivityToAdd.label}</h1>
          <Input
            type="date"
            name="Date"
            onChange={(e) => handleChangedInputDate(e)}
            label="Date"
            className="basis-3/12"
          />
          <Button onClick={addActivityToTravel} label="Ajouter" />
        </div>
      </div>
    </>
  );
}
