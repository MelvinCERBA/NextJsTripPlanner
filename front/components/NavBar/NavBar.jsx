import React, { useContext, useEffect } from "react";
import { Button } from "../Button";
// import logo from "@/public/logo-no-background.png";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { ApiContext, DisplayContext } from "@/contexts";

export function NavBar() {
  const { DisplayForm, setDisplayForm } = useContext(DisplayContext);
  const { AuthConnected, userDataHandler } = useContext(ApiContext);

  function handleClickLogIn(e) {
    setOpenMenu(false);
    e.stopPropagation();
    setDisplayForm("log");
  }
  function handleClickSignIn(e) {
    setOpenMenu(false);
    e.stopPropagation();
    setDisplayForm("sign");
  }
  function handleClickDisconnect(e) {
    e.stopPropagation();
    userDataHandler("", "", { register: false, disconnect: true });
  }

  const [menuOpen, setOpenMenu] = useState(false);

  return (
    <>
      <div
        className="
            px-4 shadow-2xl h-18 w-full bg-white flex place-items-center place-content-between "
      >
        <div id="Logo" className="flex h-16 place-items-center">
          <Image
            src={require(".//../../public/logo-no-background.png")}
            height={50}
            width={50}
            alt="Logo"
          />
          <p id="SiteTitle" className="flex w-auto ml-5 font-Montaga text-xl">
            Trip Tise
          </p>
        </div>
        <div
          id="menu"
          className="
                    relative right-1 hidden h-16 my-2
                    lg:flex lg:justify-center lg:items-center"
        >
          <div id="buffer" className="w-12 flex-shrink" />
          {AuthConnected ? (
            <div className="flex text-orange-main">
              <p
                onClick={() => setDisplayForm("choose-travel")}
                className="hover:text-orange-secondary"
              >
                Voyages
              </p>
              <div id="buffer" className="w-4 flex-shrink"></div>
              <p
                onClick={(e) => {
                  handleClickDisconnect(e);
                }}
                className="hover:text-orange-secondary"
              >
                Déconnexion
              </p>
            </div>
          ) : (
            <>
              <Button
                onClick={handleClickLogIn}
                id="BtnLogIn"
                className=""
                label="Se connecter"
                alternate={true}
              />
              <div id="buffer" className="w-2 flex-shrink"></div>
              <Button
                onClick={handleClickSignIn}
                id="BtnSignIn"
                className=""
                label="S'enregistrer"
                alternate={false}
              />
            </>
          )}
        </div>
        <div
          onClick={() => setOpenMenu(!menuOpen)}
          id="burgerMenu"
          className="w-16 h-16 flex lg:hidden"
        >
          <FiMenu className="w-16 h-16 text-orange-main" />
        </div>
      </div>
      {menuOpen && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute top-[80px] w-fit h-fit p-5 rounded-md z-50 shadow-xl flex lg:hidden flex-col right-5 bg-white "
        >
          <p
            onClick={() => setDisplayForm("log")}
            className="text-lg font-bold text-orange-main"
          >
            Se connecter
          </p>
          <p
            onClick={(e) => handleClickSignIn(e)}
            className="text-lg font-bold text-orange-main"
          >
            S&apos;enregistrer
          </p>
          <p
            onClick={() => setDisplayForm("choose-travel")}
            className="text-lg font-bold text-orange-main"
          >
            Mes voyages
          </p>
        </div>
      )}
    </>
  );
}
