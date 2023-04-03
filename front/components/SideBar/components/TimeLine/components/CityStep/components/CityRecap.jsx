import React, { useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { formatCurrency } from "@/commands";
import { Divider } from "@/components";
import { DisplayContext } from "@/contexts";

export function CityRecap({ city_name, total_price, start, end }) {
  const { DisplaySearchResults, setDisplaySearchResults } =
    useContext(DisplayContext);
  function handleSearchActivityClick(e) {
    e.stopPropagation();
    setDisplaySearchResults(true);
    console.log(
      `CITYRECAP : clicked searchactivitybutton, displaySearchResults = ${DisplaySearchResults}`
    );
  }
  return (
    <div className="px-5 flex items-center h-[75px]">
      <Divider type="vertical" className="h-4/5" />
      <div className="flex flex-col ">
        <div className="flex">
          <span className="font-bold text-2xl truncate w-auto px-5">
            {city_name} ({formatCurrency(total_price)})
          </span>
          <div
            onClick={(e) => handleSearchActivityClick(e)}
            className="flex text-orange-main items-center hover:text-orange-secondary"
          >
            <AiOutlineSearch size={30} />
            <p>Activités</p>
          </div>
        </div>
        <span className="text-gray-700 text-md truncate px-5">
          {start} - {end}
        </span>
      </div>
    </div>
  );
}
