import React from "react";
import { FiPlus } from "react-icons/Fi";

export const AddActivityButton = () => {
  return (
    <div className="flex text-orange-main items-center hover:text-orange-secondary gap-1 w-fit">
      <div id="icon-container">
        <FiPlus />
      </div>
      <span className=" font-bold font-montserat "> Ajouter une activité.</span>
    </div>
  );
};
