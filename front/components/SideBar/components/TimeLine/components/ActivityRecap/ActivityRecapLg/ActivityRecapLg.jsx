import React from "react";
import { ActivityRecapTitle } from "../components";
import { Divider } from "@/components";
import defaultImg from "/public/default_activity_image.jpg";
import Image from "next/image";
import { joinClasses } from "@/commands";

export const ActivityRecapLg = ({
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
        "flex place-items-center px-5 py-5 gap-2 w-full max-h-[150px]",
      ])}
    >
      <div id="hour_container" className="aspect-square h-full ">
        <span className=" font-bold text-3xl ">
          {" "}
          16h
          <br />
          30
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
