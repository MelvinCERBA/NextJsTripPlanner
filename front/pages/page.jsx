import React from "react";

import { useAuth } from "@/commands";
import { Button, SeoMeta } from "../components";
import { TripSearchBar } from "../components";

export default function Page() {
  const [user, setUser, error] = useAuth();

  return (
    <>
      <SeoMeta title="Test page !" description="Quelle description" />
      <main>
        <TripSearchBar />
        <Button label="Login" onClick={() => setUser("jojo", "password")}/>
      </main>
    </>
  );
}
