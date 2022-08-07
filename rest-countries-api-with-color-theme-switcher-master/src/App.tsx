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
  const { page, theme, showCountryList } = useRootContext();

  useEffect(() => {
    theme
      ? document.body.classList.add(theme)
      : document.body.classList.remove("dark");
  }, [theme]);

  return (
    <>
      <PageHeader>
        <h1 className="lg:text-4xl cursor-pointer" onClick={showCountryList}>
          Where in the world?
        </h1>
      </PageHeader>
      <section
        className="py-[2.8rem] px-12 h-full relative
      
      md:px-[5rem]
      md:pt-[6rem]
      text-[#111517];
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
      </section>
    </>
  );
}

export default App;

// <h1 className="mx-auto mt-10 text-white font-bold uppercase w-max p-5 lg-font">
// {error.message}!
// </h1>
