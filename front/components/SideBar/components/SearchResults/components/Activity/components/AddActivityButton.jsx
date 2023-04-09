import React, { useContext } from "react";
import { FiPlus } from "react-icons/Fi";
import { DisplayContext, ApiContext } from "@/contexts";

export function AddActivityButton({ activity }) {
  const { setDisplayForm } = useContext(DisplayContext);
  const { setActivityToAdd } = useContext(ApiContext);

  function handleClickAddActivity(e) {
    e.stopPropagation();
    setActivityToAdd(activity);
    console.log(
      `ADD ACTIVITY BUTTON: set ActivityToAdd to ${JSON.stringify(activity)}`
    );
    setDisplayForm("add-activity");
  }
  return (
    <div
      onClick={(e) => handleClickAddActivity(e)}
      className="flex text-orange-main items-center hover:text-orange-secondary gap-1 w-fit"
    >
      <div id="icon-container">
        <FiPlus />
      </div>
      <span className=" font-bold font-montserat "> Ajouter une activité.</span>
    </div>
  );
}
