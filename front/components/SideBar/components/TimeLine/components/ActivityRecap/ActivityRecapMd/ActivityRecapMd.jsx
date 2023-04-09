import React from "react";
import { ActivityRecapTitle } from "../components";
import { Divider } from "@/components";
import { joinClasses } from "@/commands";

export const ActivityRecapMd = ({
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
        "flex flex-col items-center justify-between mx-5 my-5 gap-2 max-h-[100px] w-auto",
      ])}
    >
      <div
        id="activity_header"
        className="flex w-full max-h-[50px] items-center gap-2"
      >
        <div
          id="hour_container"
          className="aspect-square flex flex-col justify-center h-full "
        >
          <span className=" font-bold text-xl ">
            {full_date.toLocaleString("fr", { day: "numeric" })}
            <br />
            {full_date.toLocaleString("fr", { month: "short" })}
          </span>
        </div>
        <Divider type="vertical" className=" h-4/5 "></Divider>
        <ActivityRecapTitle
          className=""
          label={label}
          price={price}
          adress={adress}
          desc={desc}
          link={link}
        />
      </div>
      <div
        id="info"
        className="flex flex-col justify-between w-full h-full gap-2 "
      >
        <p id="desc" className="block-with-text">
          {desc}
        </p>
      </div>
    </div>
  );
};
