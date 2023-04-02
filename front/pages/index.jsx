import React from "react";
import { GeoMap, SideBar } from "../components";
import { LogInForm } from "@/components";
import { SignInForm } from "@/components";
import { useState } from "react";
import { NavBar } from "../components/";
// eslint-disable-next-line no-unused-vars
import { TimeLineContext, TimeLineContextWrapper } from "@/contexts";

export default function Home() {
  const [displayMap, setDisplayMap] = useState(false);
  const [displayForm, setDisplayForm] = useState("");

  return (
    <>
      <div className="flex h-screen w-screen">
        <div
          className={`${
            displayMap ? "hidden lg:flex" : "flex"
          } flex-col lg:basis-5/12 w-full lg:w-[700px] lg:flex-shrink-0.2 lg:flex-grow-0`}
        >
          <NavBar setDisplayForm={setDisplayForm} />
          <TimeLineContextWrapper>
            <SideBar
              key="sidebar"
              displayMap={displayMap}
              setDisplayMap={setDisplayMap}
            />
          </TimeLineContextWrapper>
        </div>
        <GeoMap
          displayMap={displayMap}
          setDisplayMap={setDisplayMap}
          className={`${
            displayMap ? "flex" : "hidden lg:flex"
          } basis-7/12 flex-col lg:w-[700] lg:flex-shrink-0.8 lg:flex-grow-1`}
        />
      </div>
      {displayForm == "log" && <LogInForm setDisplayForm={setDisplayForm} />}
      {displayForm == "sign" && <SignInForm setDisplayForm={setDisplayForm} />}
    </>
  );
}
