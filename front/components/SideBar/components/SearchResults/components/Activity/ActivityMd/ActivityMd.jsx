import React from "react";
import { ActivityTitle, AddActivityButton } from "../components";
import { Divider } from "@/components";
import defaultImg from "/public/default_activity_image.jpg";
import Image from "next/image";
import { joinClasses } from "@/commands";

export const ActivityMd = ({
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
        <div id="img_container" className="aspect-square h-full">
          <Image
            src={defaultImg}
            width={50}
            height={50}
            style={{ objectFit: "cover" }}
            className="aspect-square rounded-xl"
            alt="Activity Image"
          ></Image>
        </div>
        <Divider type="vertical" className=" h-4/5 "></Divider>
        <ActivityTitle
          className=""
          label={label}
          price={price}
          adress={adress}
          desc={desc}
          link={link}
        ></ActivityTitle>
      </div>
      <div
        id="info"
        className="flex flex-col justify-between w-full h-full gap-2 "
      >
        <p id="desc" className="block-with-text">
          {desc}
        </p>
        <AddActivityButton></AddActivityButton>
      </div>
    </div>
  );
};
