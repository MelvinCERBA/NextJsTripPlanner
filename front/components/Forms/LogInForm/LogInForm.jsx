import React, { useState, useContext, useEffect } from "react";
import { joinClasses } from "../../../commands/utils";
import { Input } from "@/components";
import { Button } from "@/components";
import { DisplayContext, ApiContext } from "@/contexts";

export function LogInForm({ className = "" }) {
  const { setDisplayForm } = useContext(DisplayContext);
  const [Pseudo, setPseudo] = useState("");
  const [Mdp, setMdp] = useState("");
  const [Retry, setRetry] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const { userDataHandler, AuthError, AuthLoading, AuthConnected } =
    useContext(ApiContext);

  useEffect(() => {
    if (AuthConnected) {
      setDisplayForm("");
    }
  }, [AuthConnected]);

  function handleConnectClicked() {
    setRetry(true);
    userDataHandler(Pseudo, Mdp);
  }

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
            "flex opacity-100 flex-col justify-center z-20 flex-wrap gap-4 w-fit h-fit p-5 rounded-md shadow-xl bg-white ",
          ])}
        >
          <Input
            type="text"
            name="pseudo"
            onChange={(e) => setPseudo(e.target.value)}
            label="Pseudo"
            placeholder="GGdu69"
            className="basis-3/12"
          />
          <Input
            type="password"
            name="Mdp"
            onChange={(e) => setMdp(e.target.value)}
            label="Mot de passe"
            placeholder="p4S5w0Rd"
            className="basis-2/12"
          />
          {Retry && !AuthLoading ? <p>Connection failed.</p> : <></>}
          {AuthLoading ? <p>Loading ...</p> : <></>}
          <Button onClick={handleConnectClicked} label="Connexion" />
          <Button
            onClick={() => setDisplayForm("sign")}
            alternate={true}
            label="S'enregistrer"
          />
        </div>
      </div>
    </>
  );
}
