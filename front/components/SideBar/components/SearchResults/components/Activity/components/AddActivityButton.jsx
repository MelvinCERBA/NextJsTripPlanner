import React, { useContext } from "react";
import { FiPlus } from "react-icons/Fi";
import { DisplayContext } from "@/contexts";


export function AddActivityButton({ setSelectedActivity }) {
  const { setDisplayForm } = useContext(DisplayContext);

  function handleClick(e) {
    e.stopPropagation();
    setSelectedActivity();
    setDisplayForm("add-activity");
  }
  return (
    <div
      onClick={handleClick}
      className="flex text-orange-main items-center hover:text-orange-secondary gap-1 w-fit"
    >
      <div id="icon-container">
        <FiPlus />
      </div>
      <span className=" font-bold font-montserat "> Ajouter une activité.</span>
    </div>
  );
}
