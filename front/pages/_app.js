import "../styles/main.css";
import React from "react";
import {
  TravelContextWrapper,
  SearchResultsContextWrapper,
  DisplayContextWrapper,
} from "@/contexts";

export default function App({ Component, pageProps }) {
  return (
    <>
      <DisplayContextWrapper>
        <SearchResultsContextWrapper>
          <TravelContextWrapper>
            <Component {...pageProps} />
          </TravelContextWrapper>
        </SearchResultsContextWrapper>
      </DisplayContextWrapper>
    </>
  );
}
