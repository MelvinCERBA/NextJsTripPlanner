import React, { useContext } from "react";
import { ActivityLg, ActivityMd } from ".";
import { ApiContext } from "@/contexts";

export const Activity = ({ label, adress, price, desc, link }) => {
  if (!label) {
    throw new Error("Activty needs a name.");
  }
  const { setActivityToAdd } = useContext(ApiContext);
  function setSelectedActivity() {
    setActivityToAdd({ label, adress, price, desc, link });
  }

  return (
    <>
      <ActivityLg
        className="hidden lg:flex"
        setSelectedActivity={setSelectedActivity}
        label={label}
        adress={adress}
        price={price}
        desc={desc}
        link={link}
      />
      <ActivityMd
        className="flex lg:hidden"
        setSelectedActivity={setSelectedActivity}
        label={label}
        adress={adress}
        price={price}
        desc={desc}
        link={link}
      />
    </>
  );
};
