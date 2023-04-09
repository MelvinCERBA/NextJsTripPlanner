import { joinClasses } from "@/commands";
import React, { useContext } from "react";
import { ActivityRecapLg, ActivityRecapMd } from ".";
import { RxCross1 } from "react-icons/rx";
import { ApiContext } from "@/contexts";

export const ActivityRecap = ({ city, event, className }) => {
  const { setTravel } = useContext(ApiContext);

  function removeEvent(e) {
    e.stopPropagation();
    setTravel((travel) => {
      console.log(
        `REMOVE ACTIVITY : browsing travel = ${JSON.stringify(travel)}`
      );
      var new_travel = { ...travel };
      for (const [i, step] of new_travel.steps.entries()) {
        if (step.city == city) {
          new_travel.steps[i].events = new_travel.steps[i].events.filter(
            (t) => t.label !== event.label
          );
          return new_travel;
        }
      }
      return travel;
    });
  }
  return (
    <div className="flex">
      <ActivityRecapLg
        className={joinClasses([className, "hidden lg:flex"])}
        label={event.label}
        adress={event.adress}
        price={event.price ? event.price : ""}
        desc="Pas de description pour cette activité."
        link="https://google.fr"
        date={event.Date}
      />
      <ActivityRecapMd
        className={joinClasses([className, "flex lg:hidden"])}
        label={event.label}
        adress={event.adress}
        price={event.price ? event.price : ""}
        desc="Pas de description pour cette activité."
        link="https://google.fr"
        date={event.Date}
      />
      <div className="flex px-5 items-center">
        <RxCross1
          onClick={(e) => removeEvent(e)}
          className=" text-orange-main hover:text-orange-secondary"
          size={50}
        />
      </div>
    </div>
  );
};
