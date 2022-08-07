import { useEffect, useMemo, useState } from "react";
import useRootContext from "../../data/hooks/useRootContext";
import { SearchItem } from "../../interface";
import CountryConteiner from "../CountryConteiner/CountryConteiner";
import { searchIcon } from "../icons";
import { useQuery } from "@tanstack/react-query";
import axios, { Axios } from "axios";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

interface propsInt {
  children?: any;
  className?: string;
  atributes?: object;
}

function filter(region: string, lista: SearchItem[]) {
  return lista.filter((obj) =>
    region === "all" ? obj : obj.region.toLowerCase() === region.toLowerCase()
  );
}

export default function CountryList(props: propsInt) {
  const { children, className, atributes } = props;

  const {
    searchQuery = "",
    countryList,
    filterQuery = "all",
  } = useRootContext();

  function getTodos(search: string) {
    return axios.get("https://restcountries.com/v2/name/" + search);
  }

  const { data, isFetching, isError } = useQuery(
    [`search?=${searchQuery.toLowerCase()}`],
    getTodos.bind(null, searchQuery)
  );

  return (
    <div
      className={`
    w-full
    h-max
    py-[3.2rem]
    md:px-[3.2rem]



    content-start
    gap-[3.2rem]

    justify-center
    flex
    flex-wrap
    
    items-center

    `}
    >
      {data?.data
        ? filter(filterQuery, data.data).map((e: any) => (
            <CountryConteiner searchItem={e} key={e.name} />
          ))
        : null}
    </div>
  );
}
