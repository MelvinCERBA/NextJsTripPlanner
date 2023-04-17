import React from "react";
import { formatCurrency } from "@/commands";
import { Divider } from "@/components";

export function CityRecap({ city_name, total_price, start, end }) {
  // const { DisplaySearchResults, setDisplaySearchResults } =
  //   useContext(DisplayContext);

  const options = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <div className="px-5 flex items-center h-[75px]">
      <Divider type="vertical" className="h-4/5" />
      <div className="flex flex-col ">
        <div className="flex">
          <span className="font-bold text-2xl truncate w-auto px-5">
            {city_name}{" "}
            {total_price && total_price > 0
              ? `(${formatCurrency(total_price)})`
              : ""}
          </span>
        </div>
        <span className="text-gray-700 text-md truncate px-5">
          {`${new Date(start).toLocaleString("fr", options)} - ${new Date(
            end
          ).toLocaleString("fr", options)}`}
        </span>
      </div>
    </div>
  );
}
