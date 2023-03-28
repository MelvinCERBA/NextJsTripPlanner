import React, { useState } from "react";
import { joinClasses } from "@/commands";
import { NavBar, LogInForm, SignInForm, Map, SideBar } from "../components";

export default function Home() {
  // Can be null (no form displayed), 'log' or 'sign'
  const [displayMap, setDisplayMap] = useState(false);
  const [displayForm, setDisplayForm] = useState("");

  return (
    <>
      <div className="flex h-screen w-screen">
        <div
          className={joinClasses([
            displayMap ? "hidden lg:flex" : "flex",
            "flex lg:basis-5/12 w-full lg:w-[700px] lg:flex-shrink-0.2 lg:flex-grow-0",
          ])}
        >
          <NavBar setDisplayForm={setDisplayForm} />
          <SideBar displayMap={displayForm} setDisplayMap={setDisplayMap} />
        </div>
        <Map
          displayMap={displayMap}
          setDisplayMap={setDisplayMap}
          className={joinClasses([
            displayMap ? "flex" : "hidden lg:flex",
            "basis-7/12 hidden lg:flex lg:w-[700] lg:flex-shrink-0.8 lg:flex-grow-1",
          ])}
        />
      </div>
      {displayForm == "log" && <LogInForm></LogInForm>}
      {displayForm == "sign" && <SignInForm></SignInForm>}
    </>
  );
}
