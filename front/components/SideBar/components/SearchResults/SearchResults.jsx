import React, { useEffect } from "react";
import { MapContext } from "@/contexts";
import { useContext } from "react";
import { Activity } from "./components";

export function SearchResults() {
  // eslint-disable-next-line no-unused-vars
  const { SearchResults, setSearchResults } = useContext(MapContext);

  useEffect(() => {
    console.log(
      `SEARCH RESULTS (useEffect): Consuming ApiContext : ${JSON.stringify(
        SearchResults
      )}`
    );
  }, [SearchResults]);

  return (
    <div className="flex flex-col w-full h-full overflow-scroll">
      {SearchResults ? (
        SearchResults.map((a) => (
          <Activity
            key={a.dupeId}
            label={a.name}
            adress={[a.geoCode.longitude, a.geoCode.latitude]}
            price={-1}
            desc={""}
            link={""}
          />
        ))
      ) : (
        <></>
      )}
    </div>
  );
}
