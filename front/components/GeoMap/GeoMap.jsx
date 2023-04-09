import axios from "axios";
import React, { useState, useRef, useContext, useEffect } from "react";
import { TripSearchBar } from "..";
import mapboxgl from "!mapbox-gl";
import { MapContext, DisplayContext } from "@/contexts";
import { joinClasses } from "@/commands";
import { BsListUl } from "react-icons/bs";

mapboxgl.accessToken =
  "pk.eyJ1Ijoiam9uYXRoYW5lbW1hbnVlbGpvc2UiLCJhIjoiY2xlY3M5ZG5mMDAwODNvcDl0YTd6dDJ4MyJ9.41z7trqtNa8IpWd_J2Q6tw";

// mapboxgl.accessToken =
// // eslint-disable-next-line no-undef
// process.env.GEOMAP_TOKEN ?? process.env.STORYBOOK_GEOMAP_TOKEN;

export function GeoMap({ className }) {
  const [results, setResults] = useState([]); // City suggestions
  const mapContainer = useRef(null);
  const map = useRef(null);
  const { coords, setCoords, search, setSearch } = useContext(MapContext);
  const [displayResults, setDisplayResults] = useState(false);
  const { displayMap, setDisplayMap } = useContext(DisplayContext);
  useEffect(() => {
    if (map.current) {
      map.current.panTo(coords, { duration: 2000 });
    } else {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/jonathanemmanueljose/clecz6z1u003i01kngthxf423",
        center: coords,
        zoom: 12,
      });
    }
  }, [coords]);

  useEffect(() => {
    if (displayResults) {
      (async () => {
        try {
          const { data } = await axios.get(
            `http://localhost:8081/trip/location?location=${search.city}`
          );
          setResults(
            data.data.result.features.map((v) => {
              return { city: v.place_name_fr, coords: v.center };
            })
          );
        } catch (error) {
          error;
        }
      })();
    }
  }, [search]);

  const searchValuesSetters = {
    setType: (e) =>
      setSearch({
        type: e.target.value,
        city: search.city,
        radius: search.radius,
      }),
    setCity: (e) => {
      setSearch({
        type: search.type,
        city: e.target.value,
        radius: search.radius,
      });
      setDisplayResults(true);
    },
    setRadius: (e) => {
      setSearch({
        type: search.type,
        city: search.city,
        radius: e.target.value,
      });
      map.current.setZoom(15 - e.target.value * 0.5);
    },
    setCoords: (city = { city: "", coords: [0, 0] }) => {
      setSearch({
        type: search.type,
        city: city.city,
        radius: search.radius,
      });
      setResults([]);
      setDisplayResults(false);
      setCoords(city.coords);
    },
  };

  return (
    <>
      <div className={joinClasses([className])}>
        <div
          className=" flex content-center px-5 w-full"
          name="searchbar-container"
        >
          <TripSearchBar
            cityResults={results}
            value={search}
            onChange={searchValuesSetters}
            displayResults={displayResults}
            className="w-full bg-white"
          />
        </div>
        <div
          ref={mapContainer}
          className="w-full h-full"
          // md:h-[80vh] sm:h-[60vh] h-[40vh]"
        />
      </div>
      <div
        onClick={() => setDisplayMap(!displayMap)}
        className={`${
          displayMap ? "flex" : "hidden lg:flex"
        } h-[100px] w-[100px] absolute bottom-5 right-5 flex lg:hidden justify-center items-center rounded-full bg-white shadow-xl`}
      >
        <BsListUl className="w-16 h-16 text-orange-main" />
      </div>
    </>
  );
}
