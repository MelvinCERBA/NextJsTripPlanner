import React from "react";
import { GeoMap, SideBar } from "../components";
import {
  LogInForm,
  SignInForm,
  AddActivityForm,
  AddCityForm,
  ChooseTravelForm,
} from "@/components";
import { useContext } from "react";
import { NavBar } from "../components/";
import { DisplayContext } from "@/contexts";

export default function Home() {
  // eslint-disable-next-line no-unused-vars
  const { displayMap, setDisplayMap, DisplayForm, setDisplayForm } =
    useContext(DisplayContext);

  function renderForm() {
    if (DisplayForm === "log") {
      return <LogInForm />;
    }
    if (DisplayForm === "sign") {
      return <SignInForm />;
    }
    if (DisplayForm === "add-activity") {
      return <AddActivityForm />;
    }
    if (DisplayForm === "choose-travel") {
      return <ChooseTravelForm />;
    }
    if (DisplayForm === "add-city") {
      return <AddCityForm />;
    }
  }
  return (
    <div className="h-screen w-screen">
      <div className="flex h-full w-full">
        <div
          className={`${
            displayMap ? "hidden lg:flex" : "flex"
          } flex-col w-full lg:basis-5/12 h-full lg:flex-shrink-0.2 lg:flex-grow-0`}
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
          } flex-col h-[90vh] lg:basis-7/12 lg:flex-shrink-0.8 lg:flex-grow-1`}
        />
      </div>
      {renderForm()}
    </div>
  );
}
