import React from "react";
import { GeoMap, SideBar } from "../components";
import {
  LogInForm,
  SignInForm,
  AddActivityForm,
  AddCityForm,
  ChooseTravelForm,
} from "@/components";
import { useState, useEffect, useContext } from "react";
import { NavBar } from "../components/";
import { DisplayContext } from "@/contexts";

export default function Home() {
  const [displayMap, setDisplayMap] = useState(false);
  // const [displayForm, setDisplayForm] = useState("");
  // eslint-disable-next-line no-unused-vars
  const { DisplayForm, setDisplayForm } = useContext(DisplayContext);

  function renderForm() {
    switch (DisplayForm) {
      case "log":
        return <LogInForm />;
      case "sign":
        return <SignInForm />;
      case "add-activity":
        return <AddActivityForm />;
      case "choose-travel":
        return <ChooseTravelForm />;
      case "add-city":
        return <AddCityForm />;
      default:
        return <></>;
    }
  }
  return (
    <>
      <div className="flex h-screen w-screen">
        <div
          className={`${
            displayMap ? "hidden lg:flex" : "flex"
          } flex-col lg:basis-5/12 w-full h-full lg:w-[700px] lg:flex-shrink-0.2 lg:flex-grow-0`}
        >
          <NavBar />
          <SideBar
            key="sidebar"
            displayMap={displayMap}
            setDisplayMap={setDisplayMap}
            className=""
          />
        </div>
        <GeoMap
          displayMap={displayMap}
          setDisplayMap={setDisplayMap}
          className={`${
            displayMap ? "flex" : "hidden lg:flex"
          } basis-7/12 flex-col lg:w-[700] lg:flex-shrink-0.8 lg:flex-grow-1`}
        />
      </div>
      {renderForm()}
    </>
  );
}
