import React, { useEffect, useMemo, useState } from "react";
import logo from "./logo.svg";
import PageHeader from "./components/PageHeader/PageHeader";
import SearchBar from "./components/SearchBar/SearchBar";
import FilterConteiner from "./components/FilterConteiner/FilterConteiner";
import CountryList from "./components/CountryList/CountryList";
import CountryInfos from "./components/CountryInfos/CountryInfos";
import { SearchItem } from "./interface";
import useRootContext from "./data/hooks/useRootContext";

function filterRegions(lista: SearchItem[] = [], region: string) {
  if (region.toLowerCase() === "all") return lista;

  return lista?.filter(
    (obj) => obj.region.toLowerCase() === region.toLowerCase()
  );
}

function App() {
  const { page } = useRootContext();

  return (
    <>
      <PageHeader>Where in the world?</PageHeader>
      <main
        className="py-[2.8rem] px-12 h-full relative
      
      md:px-[50px]
      
      "
      >
        {page === "list" ? (
          <>
            <div
              className="
            flex
            flex-col
            md:flex-row
            md:justify-between
            md:items-center
            gap-[32px]
            "
            >
              <SearchBar />
              <FilterConteiner />
            </div>
            <CountryList />
          </>
        ) : (
          <CountryInfos />
        )}
      </main>
    </>
  );
}

export default App;

// <h1 className="mx-auto mt-10 text-white font-bold uppercase w-max p-5 lg-font">
// {error.message}!
// </h1>
