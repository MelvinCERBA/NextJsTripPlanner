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
  const { ActivityToAdd, setActivityToAdd } = useContext(ApiContext);

  function addActivityToTravel() {
    console.log(`AddActivityForm: Date = ${Date.toString()}`);
    setDisplaySearchResults(false);
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
            type="datetime"
            name="Date"
            onChange={(e) => setDate(e.target.value)}
            label="Date"
            className="basis-3/12"
          />
          <Button onClick={addActivityToTravel} label="Ajouter" />
        </div>
      </div>
    </>
  );
}
