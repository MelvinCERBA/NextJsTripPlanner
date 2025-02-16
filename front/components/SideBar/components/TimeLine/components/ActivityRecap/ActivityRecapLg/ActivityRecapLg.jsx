import React from "react";
import { ActivityRecapTitle } from "../components";
import { Divider } from "@/components";
import { joinClasses } from "@/commands";

export const ActivityRecapLg = ({
  label,
  adress,
  price,
  desc,
  link,
  date,
  className,
}) => {
  const full_date = new Date(date);

  return (
    <div
      id="activity"
      className={joinClasses([
        className,
        "flex place-items-center px-5 py-5 gap-2 w-full max-h-[150px]",
      ])}
    >
      <div
        id="hour_container"
        className="aspect-square flex flex-col justify-center h-full "
      >
        <span className=" font-bold text-2xl self-end ">
          {full_date.toLocaleString("fr", { weekday: "short" })}
          <br />
          {full_date.toLocaleString("fr", { day: "numeric", month: "short" })}
        </span>
      </div>
      <Divider type="vertical" className="h-4/5" />
      <div
        id="info"
        className="flex flex-col justify-between w-4/5 h-full gap-2 "
      >
        <ActivityRecapTitle
          className=""
          price={price}
          label={label}
          adress={adress}
          desc={desc}
          link={link}
        />
        <p id="desc" className="block-with-text">
          {desc}
        </p>
      </div>
    </div>
  );
};
