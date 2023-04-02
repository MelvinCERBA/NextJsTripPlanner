import React from "react";
import { ActivityLg, ActivityMd } from ".";

export const Activity = ({ label, adress, price, desc, link }) => {
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
    <>
      <ActivityLg
        className="hidden lg:flex"
        label={label}
        adress={adress}
        price={price}
        desc={desc}
        link={link}
      />
      <ActivityMd
        className="flex lg:hidden"
        label={label}
        adress={adress}
        price={price}
        desc={desc}
        link={link}
      />
    </>
  );
};
