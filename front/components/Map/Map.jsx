import React from "react";
import { joinClasses } from "../../commands";
import { GiWorld } from "react-icons/gi";

export function Map({ displayMap, setDisplayMap, className = "" }) {
  return (
    <>
      <div className={joinClasses(["bg-slate-100", className])}>
        {/* <TripSearchBar></TripSearchBar> */}
      </div>
      <div
        onClick={() => setDisplayMap(!displayMap)}
        className="h-[100px] w-[100px] absolute bottom-5 right-5 flex lg:hidden justify-center items-center rounded-full bg-white shadow-xl"
      >
        <GiWorld className="w-16 h-16 text-orange-main"></GiWorld>
      </div>
    </>
  );
}
