import "../styles/main.css";
import React from "react";
import {
  ApiContextWrapper,
  DisplayContextWrapper,
  MapContextWrapper,
} from "@/contexts";

export default function App({ Component, pageProps }) {
  return (
    <>
      <MapContextWrapper>
        <DisplayContextWrapper>
          <ApiContextWrapper>
            <Component {...pageProps} />
          </ApiContextWrapper>
        </DisplayContextWrapper>
      </MapContextWrapper>
    </>
  );
}
