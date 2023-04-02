import React from "react";
import { ActivityRecapTitle } from "../components";
import { Divider } from "@/components";
import { joinClasses } from "@/commands";

export const ActivityRecapMd = ({
  label = "Nom de l'activité",
  adress = "Adresse de l'activité",
  price = 0,
  desc = "Description de l'activité",
  link = "/",
  className,
}) => {
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
        <div id="hour_container" className="aspect-square h-full">
          <span className=" font-bold text-3xl ">
            {" "}
            16h
            <br />
            30
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
