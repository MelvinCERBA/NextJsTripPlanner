import React from "react";
import { BiLinkExternal } from "react-icons/Bi";
import { joinClasses } from "@/commands";
import { formatCurrency } from "@/commands/utils";

export const ActivityRecapTitle = ({
  label,
  adress,
  price,
  className = "",
}) => {
  return (
    <div
      id="title"
      className={joinClasses([
        className,
        "flex flew-row w-full justify-between",
      ])}
    >
      <div id="place" className="flex flex-col align-self-start ">
        <span className="text-2xl font-light truncate w-auto">
          {price > 0 ? label + " - " + formatCurrency(price) : label}
        </span>
        <span className=" text-gray-500 text-md truncate">
          {adress ? `${adress[0]}, ${adress[1]}` : ""}
        </span>
      </div>
    </div>
  );
};
