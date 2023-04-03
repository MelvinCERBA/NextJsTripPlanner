import React from "react";
import { ActivityTitle, AddActivityButton } from "../components";
import { Divider } from "@/components";
import defaultImg from "/public/default_activity_image.jpg";
import Image from "next/image";
import { joinClasses } from "@/commands";

export const ActivityLg = ({
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
      <div id="img_container" className="aspect-square h-full ">
        <Image
          src={defaultImg}
          style={{ objectFit: "cover" }}
          width={150}
          height={150}
          className="aspect-square rounded-3xl"
          alt="Activity Image"
        ></Image>
      </div>
      <Divider type="vertical" className="h-4/5"></Divider>
      <div
        id="info"
        className="flex flex-col justify-between w-4/5 h-full gap-2 "
      >
        <ActivityTitle
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
        <AddActivityButton />
      </div>
    </div>
  );
};
