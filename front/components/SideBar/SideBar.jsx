// import { Activity } from "./components";
import React, { useContext, useEffect } from "react";
import { joinClasses } from "../../commands";
import { GiWorld } from "react-icons/gi";
import { TimeLine } from "./components";
import { SearchResults } from "./components";
import { DisplayContext } from "@/contexts";

export function SideBar({ displayMap, setDisplayMap, className = "" }) {
  // eslint-disable-next-line no-unused-vars
  const { DisplaySearchResults, setDisplaySearchResults } =
    useContext(DisplayContext);
  console.log(`SIDEBAR: DisplaySearchResults = ${DisplaySearchResults}`);
  useEffect(() => {
    console.log(
      `SIDEBAR: DisplaySearchResults changed : ${DisplaySearchResults}`
    );
  }, [DisplaySearchResults]);
  return (
    <>
      <div className={joinClasses(["flex flex-col h-full", className])}>
        {DisplaySearchResults ? <SearchResults /> : <TimeLine />}
      </div>
      <div
        onClick={() => setDisplayMap(!displayMap)}
        className="h-[100px] w-[100px] absolute bottom-5 right-5 flex lg:hidden justify-center items-center rounded-full bg-white shadow-xl"
      >
        <GiWorld className="w-16 h-16 text-orange-main"></GiWorld>
      </div>
      {/* <LogInForm> </LogInForm> */}
    </>
  );
}
