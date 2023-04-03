import React, { useContext } from "react";
import { joinClasses } from "../../../commands/utils";
import { Input } from "@/components";
import { Button } from "@/components";
import { useState } from "react";
import { DisplayContext } from "@/contexts";

export function SignInForm({ className = "" }) {
  const { setDisplayForm } = useContext(DisplayContext);

  const [email, setEmail] = useState("");
  const [mdp, setMdp] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [mdpConfirm, setMdpConfirm] = useState("");

  return (
    <>
      <div className="absolute top-0 left-0 bg-black h-full w-full flex justify-center items-center opacity-50 z-0" />
      <div
        onClick={() => setDisplayForm("")}
        className="absolute top-0 left-0  h-full w-full flex justify-center items-center z-10"
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={joinClasses([
            className,
            "flex opacity-100 flex-col justify-center z-20 flex-wrap gap-4 w-fit h-fit p-5 rounded-md shadow-xl  bg-white ",
          ])}
        >
          <Input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            placeholder="gg69@gmail.com"
            className="basis-3/12"
          />
          <Input
            type="password"
            onChange={(e) => setMdp(e.target.value)}
            label="Mot de passe"
            placeholder="p4S5w0Rd"
            className="basis-2/12"
          />
          <Input
            type="password"
            onChange={(e) => setMdpConfirm(e.target.value)}
            label="Confirmer mot de passe"
            placeholder="p4S5w0Rd"
            className="basis-2/12"
          />
          <Button
            onClick={() => {
              console.log(`email: ${email} mdp: ${mdp}`);
            }}
            label="Créer un compte"
          />
          <Button
            onClick={() => setDisplayForm("log")}
            alternate={true}
            label="J'ai déjà un compte"
          />
        </div>
      </div>
    </>
  );
}
