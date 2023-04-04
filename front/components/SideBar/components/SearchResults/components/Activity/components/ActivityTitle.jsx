import React, { useContext } from "react";
import { BiLinkExternal } from "react-icons/bi";
import { joinClasses } from "@/commands";
import { formatCurrency } from "@/commands/utils";
import { MapContext } from "@/contexts";

export const ActivityTitle = ({
  label,
  adress,
  price,
  link = "",
  className = "",
}) => {
  const { setCoords } = useContext(MapContext);

  function handleClickLink(e) {
    e.stopPropagation();
    window.open(link, "_blank").focus();
  }

  function handleClickCoords(e) {
    e.stopPropagation();
    setCoords(adress);
  }

  return (
    <div
      id="title"
      className={joinClasses([
        className,
        "flex flew-row w-full justify-between",
      ])}
    >
      <div id="place" className="flex flex-col align-self-start ">
        <span className="font-bold text-lg truncate w-auto">
          {price && price >= 0 ? label + " - " + formatCurrency(price) : label}
        </span>
        <span
          onClick={(e) => handleClickCoords(e)}
          className=" text-gray-700 text-md truncate"
        >
          {adress ? `${adress[0]}, ${adress[1]}` : ""}
        </span>
      </div>
      {link ? (
        <div
          onClick={(e) => handleClickLink(e)}
          className="flex align-center justify-self-end"
        >
          <BiLinkExternal
            className="justify-self-end h-full aspect-square"
            size={30}
          ></BiLinkExternal>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
