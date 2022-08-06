import React, { useEffect, useMemo, useState } from "react";
import logo from "./logo.svg";
import PageHeader from "./components/PageHeader/PageHeader";
import SearchBar from "./components/SearchBar/SearchBar";
import FilterConteiner from "./components/FilterConteiner/FilterConteiner";
import CountryList from "./components/CountryList/CountryList";
import CountryInfos from "./components/CountryInfos/CountryInfos";

import useAxios from "./hooks/useAxios";
import useSearch from "./hooks/useSearch";
import { SearchItem } from "./interface";

function filterRegions(lista: SearchItem[] = [], region: string) {
  if (region.toLowerCase() === "all") return lista;

  return lista?.filter(
    (obj) => obj.region.toLowerCase() === region.toLowerCase()
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState<
    "countryInfos" | "countryList"
  >("countryList");

  const [countryCode, setCountryCode] = useState<any>();

  const [search, setSearch] = useState<string>("");
  const { data, isFetching, error } = useSearch(search, [search]);
  const [filteredSearch, setFilteredSearch] = useState<SearchItem[]>();

  function onSubmit(input: string) {
    setSearch(input);
    setFilteredSearch(undefined);
  }

  function filter(region: string) {
    setFilteredSearch(filterRegions(data, region));
  }

  function countryClick(country: SearchItem) {
    setCountryCode(country.alpha2Code);
    setCurrentPage("countryInfos");
  }

  function onBack() {
    setCurrentPage("countryList");
  }

  return (
    <>
      <PageHeader>Where in the world?</PageHeader>
      <main
        className="py-[2.8rem] px-12 h-full
        relative 

      "
      >
        {currentPage === "countryList" ? (
          <>
            <SearchBar onSubmit={onSubmit} />
            <FilterConteiner onClick={filter} />

            {error ? (
              <h1 className="mx-auto mt-10 text-white font-bold uppercase w-max p-5 lg-font">
                {error.message}!
              </h1>
            ) : (
              isFetching || (
                <CountryList
                  items={filteredSearch ?? data}
                  onClick={countryClick}
                />
              )
            )}
          </>
        ) : (
          <CountryInfos countryCode={countryCode} onBack={onBack} />
        )}
      </main>
    </>
  );
}

export default App;
