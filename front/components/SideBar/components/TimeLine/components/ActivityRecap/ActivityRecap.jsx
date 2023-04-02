import { joinClasses } from "@/commands";
import React from "react";
import { ActivityRecapLg, ActivityRecapMd } from ".";
import { RxCross1 } from "react-icons/rx";

export const ActivityRecap = ({
  label,
  adress,
  price,
  desc,
  link,
  className,
}) => {
  if (!label | !adress | !price | !desc | !link) {
    throw new Error("Missing parameter.");
  } else if (
    (typeof label != "string") |
    (typeof adress != "string") |
    (typeof desc != "string") |
    (typeof link != "string") |
    (typeof price != "number")
  ) {
    throw new Error("Incorrect parameter type.");
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
