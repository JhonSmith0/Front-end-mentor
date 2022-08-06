import { useEffect, useState } from "react";
import { SearchItem } from "../App";
import useAxios from "./useAxios";

export default function useSearch(search: string, deps: any[] = []) {
  const [url, setUrl] = useState<string>("");
  const { data, isFetching, error } = useAxios<SearchItem[]>(url, [url]);
  const [filtered, setFiltered] = useState<SearchItem[] | any>([]);

  useEffect(
    () => setUrl(search && `https://restcountries.com/v2/name/${search}`),
    [...deps]
  );

  function filterRegions(region: string) {
    if (region === "all") setFiltered(data);
    else
      setFiltered(
        data?.filter((obj) => obj.region.toLowerCase() === region.toLowerCase())
      );
  }

  return {
    data,
    isFetching,
    error,
    filterRegions,
  };
}
