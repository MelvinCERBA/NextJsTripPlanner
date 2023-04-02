import React from "react";
import { ActivityRecap } from "..";
import { CityRecap } from "..";

export function CityStep({ city }) {
  return (
    <>
      <div key={city.city} className="w-full">
        <CityRecap
          city_name={city.city}
          total_price={city.events.reduce((acc, e) => acc + e.price, 0)}
          start={city.start}
          end={city.end}
        />
        <ul>
          {city.events.map((e) => (
            <ActivityRecap
              key={e.name}
              label={e.name}
              adress="cwx<ccxw<"
              price={e.price}
              desc="cs<cwv<"
              link="https://google.fr"
              className=" pl-20"
            />
          ))}
        </ul>
      </div>
    </>
  );
}
