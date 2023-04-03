import React from "react";
import { SearchResultsContext } from "@/contexts";
import { useContext } from "react";
import { Activity } from "./components";

export function SearchResults() {
  // eslint-disable-next-line no-unused-vars
  const { SearchResults, setSearchResults } = useContext(SearchResultsContext);
  console.log(
    `SEARCHRESULTS : Consuming SearchResultsContext : ${JSON.stringify(
      SearchResults
    )}`
  );

  return (
    <>
      <div className="flex flex-col w-full">
        {SearchResults.map((a) => (
          <Activity
            key={a.name}
            label={a.name}
            adress={a.adress}
            price={a.price}
            desc={a.desc}
            link={a.link}
          />
        ))}
      </div>
    </>
  );
}
