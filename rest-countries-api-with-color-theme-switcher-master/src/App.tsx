import React, { useEffect, useMemo, useState } from "react";
import logo from "./logo.svg";
import PageHeader from "./components/PageHeader/PageHeader";
import SearchBar from "./components/SearchBar/SearchBar";
import FilterConteiner from "./components/FilterConteiner/FilterConteiner";
import CountryList from "./components/CountryList/CountryList";
import CountryInfos from "./components/CountryInfos/CountryInfos";
import useAxios from "./hooks/useAxios";
import useSearch from "./hooks/useSearch";

export interface SearchItem {
  name: any;
  capital: string;
  population: number;
  region: string;
  alpha2Code?: string;
  flags: {
    png: string;
    svg: string;
  };
}

export interface CountryInfosInterface extends SearchItem {
  nativeName: string;
  subregion: string;
  tld?: string[];
  currencies: { code: string; name: string; symbol: string }[];
  languages: { name: string }[];
  borders?: string[];
}

function App() {
  const [currentPage, setCurrentPage] = useState<
    "countryInfos" | "countryList"
  >("countryList");

  const [country, setCountry] = useState<SearchItem>();

  const [search, setSearch] = useState<string>("");
  const { data, isFetching, error } = useSearch(search, [search]);

  function onSubmit(input: string) {
    setSearch(input);
  }

  return (
    <>
      {/* <button onClick={() => setSearch("china")}>China</button> */}
      <PageHeader>Where in the world?</PageHeader>
      <main
        className="py-[2.8rem] px-10 h-full
        overflow-x-hidden     
        relative 

      "
      >
        {currentPage === "countryList" ? (
          <>
            <SearchBar onSubmit={onSubmit} />
            <FilterConteiner />

            {isFetching || (
              <CountryList
                items={data ?? []}
                onClick={(e) => {
                  setCurrentPage("countryInfos");
                  setCountry(e);
                }}
              />
            )}
          </>
        ) : (
          <CountryInfos
            countryCode={country?.alpha2Code}
            onBack={setCurrentPage.bind(null, "countryList")}
          />
        )}
      </main>
    </>
  );
}

export default App;
