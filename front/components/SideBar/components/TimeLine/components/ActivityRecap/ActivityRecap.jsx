import { joinClasses } from "@/commands";
import React from "react";
import { ActivityRecapLg, ActivityRecapMd } from ".";
import { RxCross1 } from "react-icons/rx";

export const ActivityRecap = ({
  label,
  adress = "Adresse inconnue",
  price,
  desc,
  link,
  className,
}) => {
  if (!label) {
    throw new Error("ActivityRecap requires at least a label.");
  }
  return (
    <div className="flex">
      <ActivityRecapLg
        className={joinClasses([className, "hidden lg:flex"])}
        label={label}
        adress={adress}
        price={price}
        desc={desc}
        link={link}
      />
      <ActivityRecapMd
        className={joinClasses([className, "flex lg:hidden"])}
        label={label}
        adress={adress}
        price={price}
        desc={desc}
        link={link}
      />
      <div className="flex px-5 items-center">
        <RxCross1
          className=" text-orange-main hover:text-orange-secondary"
          size={50}
        />
      </div>
    </div>
  );
};
