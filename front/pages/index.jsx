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
  // eslint-disable-next-line no-unused-vars
  const { displayMap, setDisplayMap, DisplayForm, setDisplayForm } = useContext(DisplayContext);

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
    <div className="h-screen w-screen">
      <div className="flex h-full w-full">
        <div
          className={`${
            displayMap ? "hidden lg:flex" : "flex"
          } flex-col w-full lg:basis-1 h-full lg:flex-shrink-0.2 lg:flex-grow-0`}
        >
          <NavBar />
          <SideBar
            key="sidebar"
            displayMap={displayMap}
            setDisplayMap={setDisplayMap}
          />
        </div>
        <GeoMap
          displayMap={displayMap}
          setDisplayMap={setDisplayMap}
          className={`${
            displayMap ? "flex" : "hidden lg:flex"
          } flex-col h-[90vh] lg:basis-[700px] lg:flex-shrink-0.8 lg:flex-grow-1`}
        />
      </div>
      {renderForm()}
    </div>
  );
}
