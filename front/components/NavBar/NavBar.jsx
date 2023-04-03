import React, { useContext, useEffect } from "react";
import { Button } from "../Button";
import logo from "../../public/logo-no-background.png";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { DisplayContext } from "@/contexts";

export function NavBar() {
  const { DisplayForm, setDisplayForm } = useContext(DisplayContext);

  useEffect(() => {
    console.log(`NAVBAR: displayForm changed : ${DisplayForm}`);
  }, [DisplayForm]);

  function handleClickLogIn() {
    setDisplayForm("log");
    console.log("login fucntion called");
  }
  function handleClickSignIn() {
    setDisplayForm("sign");
    console.log("signin fucntion called");
  }

  let [menuOpen, setOpenMenu] = useState(false);

  return (
    <>
      <div
        className="
            px-4 shadow-2xl h-18 w-full bg-white flex place-items-center place-content-between "
      >
        <div id="Logo" className="flex h-16 place-items-center">
          <Image src={logo} height={50} width={50} alt="Logo" />
          <p id="SiteTitle" className="flex w-auto ml-5 font-Montaga text-xl">
            Trip Tise
          </p>
        </div>
        <div
          id="menu"
          className="
                    relative right-1 hidden h-16 my-2
                    lg:flex lg:justify-center lg:align-center"
        >
          <div id="buffer" className="w-12 flex-shrink"></div>
          <Button
            onClick={handleClickLogIn}
            id="BtnLogIn"
            className=""
            label="Se connecter"
            alternate={true}
          ></Button>
          <div id="buffer" className="w-2 flex-shrink"></div>
          <Button
            onClick={handleClickSignIn}
            id="BtnSignIn"
            className=""
            label="S'enregistrer"
            alternate={false}
          ></Button>
        </div>
        <div
          onClick={() => setOpenMenu(!menuOpen)}
          id="burgerMenu"
          className="w-16 h-16 flex lg:hidden"
        >
          <FiMenu className="w-16 h-16 text-orange-main"></FiMenu>
        </div>
      </div>
      {menuOpen && (
        <div className="absolute top-[80px] w-fit h-fit p-5 rounded-md z-50 shadow-xl flex lg:hidden flex-col right-5 bg-white ">
          <p
            onClick={handleClickLogIn}
            className="text-lg font-bold text-orange-main"
          >
            Se connecter
          </p>
          <p
            onClick={handleClickSignIn}
            className="text-lg font-bold text-orange-main"
          >
            S&apos;enregistrer
          </p>
          <p className="text-lg font-bold text-orange-main">Mes voyages</p>
        </div>
      )}
    </>
  );
}
