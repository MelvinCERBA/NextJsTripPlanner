import "../styles/main.css";
import React from "react";
import { ApiContextWrapper, DisplayContextWrapper } from "@/contexts";

export default function App({ Component, pageProps }) {
  return (
    <>
      <DisplayContextWrapper>
        <ApiContextWrapper>
          <Component {...pageProps} />
        </ApiContextWrapper>
      </DisplayContextWrapper>
    </>
  );
}
