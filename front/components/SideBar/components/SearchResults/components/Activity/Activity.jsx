import React from "react";
import { ActivityLg, ActivityMd } from ".";

export const Activity = ({ label, adress, price, desc, link }) => {
  if (!label) {
    throw new Error("Activty needs a name.");
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
