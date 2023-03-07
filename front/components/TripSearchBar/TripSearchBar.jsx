import React from "react";

import { Input, Divider } from "..";
import { BsSearch } from "react-icons/bs";
import { MdFilterAlt } from "react-icons/md";
import { useResponsive } from "../../commands";
import { BREAKPOINTS } from "../../commands";

export const TripSearchBar = () => {
  const breakpoint = useResponsive();
  return (
    BREAKPOINTS[breakpoint] > BREAKPOINTS.xs ? (
      <div className="rounded-xl shadow-2xl px-8 py-5">
        <div className="flex flex-row justify-center flex-wrap gap-4">
          <Input label="Chercher" placeholder="Restaurant" className="basis-3/12" />
          <Input label="Où ?" placeholder="Lyon" className="basis-3/12" />
          <Input label="Rayon (en km)" placeholder="20" className="basis-2/12" />
          <Divider />
          <BsSearch size="2.5em" className="basis-1/12 justify-end" />
          <MdFilterAlt size="2.5em" className="basis-1/12" />
        </div>
      </div>
    ) : (
      <div className="rounded-xl shadow-2xl px-8 py-5 flex flex-col gap-4">
        <div className="flex flex-row justify-center flex-wrap gap-4">
          <Input label="Chercher" placeholder="Restaurant" />
          <Input label="Où ?" placeholder="Lyon" />
          <Input label="Rayon (en km)" placeholder="20" />
        </div>
        <div className="flex justify-center flex-col-2 gap-4">
          <BsSearch size="2.5em" className="basis-1/2" />
          <MdFilterAlt size="2.5em" className="basis-1/2" />
        </div>
      </div>
    )
  );
};
