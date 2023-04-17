import React from "react";
import { joinClasses } from "@/commands/utils";
import { useContext } from "react";
import { DisplayContext, ApiContext } from "@/contexts";

export function ChooseTravelForm({ className = "" }) {
  // eslint-disable-next-line no-unused-vars
  const { setDisplaySearchResults, DisplayForm, setDisplayForm } =
    useContext(DisplayContext);
  // eslint-disable-next-line no-unused-vars
  const { Travels, setTravel } = useContext(ApiContext);

  function handleClickSetTravel(event, travel) {
    setTravel(travel);
    setDisplayForm("");
    setDisplaySearchResults(false);
  }

  function displayTravels() {
    if (Travels) {
      return Travels.map((t) => (
        <h1
          key={t.name ? t.name : JSON.stringify(t.steps[0].city)}
          onClick={(e) => handleClickSetTravel(e, t)}
          className="text-orange-main hover:text-orange-secondary"
        >
          {t.name}
        </h1>
      ));
      // Travels.map((t) => console.log(JSON.stringify(t)));
    }
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
          {displayTravels()}
        </div>
      </div>
    </>
  );
}
