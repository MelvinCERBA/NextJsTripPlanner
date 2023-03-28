import React from "react";

import { Input, Divider } from "..";
import { BsSearch } from "react-icons/bs";
import { MdFilterAlt } from "react-icons/md";

export const TripSearchBar = ({
  onChange = {
    setType: (e) => {
      e;
    },
    setCity: (e) => {
      e;
    },
    setRadius: (e) => {
      e;
    },
    setCoords: () => {},
  },
  value = { type: "", city: "", radius: "" },
  cityResults = [],
  displayResults = false,
}) => {
  return (
    <>
      <div className="hidden sm:block rounded-xl shadow-2xl px-8 py-5">
        <div className="flex flex-row justify-center flex-wrap gap-4">
          <Input
            value={value.type}
            onChange={onChange.setType}
            type="select"
            label="Chercher"
            className="basis-3/12"
            selectOptions={[
              <option
                onClick={onChange.setType}
                value="shopping"
                key="shopping"
              >
                Shoppings
              </option>,
              <option onClick={onChange.setType} value="hotels" key="hotels">
                Hotels
              </option>,
              <option onClick={onChange.setType} value="airport" key="airport">
                Aéroport
              </option>,
            ]}
          />
          <div className="basis-3/12 overflow-visible">
            <Input
              value={value.city}
              onChange={onChange.setCity}
              label="Où ?"
              placeholder="Lyon"
            />
            {displayResults &&
              cityResults.map((city, id) => (
                <div
                  key={id}
                  className="text-black border bg-white hover:bg-slate-200 transition-all py-2 px-5"
                  onClick={() => onChange.setCoords(city)}
                >
                  {city.city}
                </div>
              ))}
          </div>
          <Input
            value={value.radius}
            onChange={onChange.setRadius}
            label="Rayon (en km)"
            placeholder="20"
            className="basis-2/12"
          />
          <Divider />
          <BsSearch size="2.5em" className="basis-1/12 justify-end" />
          <MdFilterAlt size="2.5em" className="basis-1/12" />
        </div>
      </div>
      <div className="sm:hidden rounded-xl shadow-2xl px-8 py-5 flex flex-col gap-4">
        <div className="flex flex-row justify-center flex-wrap gap-4">
          <Input
            value={value.type}
            onChange={onChange.setType}
            type="select"
            label="Chercher"
            selectOptions={[
              <option
                onClick={onChange.setType}
                value="shopping"
                key="shopping"
              >
                Shoppings
              </option>,
              <option onClick={onChange.setType} value="hotels" key="hotels">
                Hotels
              </option>,
              <option onClick={onChange.setType} value="airport" key="airport">
                Aéroport
              </option>,
            ]}
          />
          <div>
            <Input
              value={value.city}
              onChange={onChange.setCity}
              label="Où ?"
              placeholder="Lyon"
            />
            {displayResults &&
              cityResults.map((city, id) => (
                <div
                  key={id}
                  className="text-black border bg-white hover:bg-slate-200 transition-all py-2 px-5"
                  onClick={() => onChange.setCoords(city)}
                >
                  {city.city}
                </div>
              ))}
          </div>
          <Input
            value={value.radius}
            onChange={onChange.setRadius}
            label="Rayon (en km)"
            placeholder="20"
          />
        </div>
        <div className="flex justify-center flex-col-2 gap-4">
          <BsSearch size="2.5em" className="basis-1/2" />
          <MdFilterAlt size="2.5em" className="basis-1/2" />
        </div>
      </div>
    </>
  );
};
