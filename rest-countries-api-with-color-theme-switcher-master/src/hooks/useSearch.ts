import { useEffect, useState } from "react";
import { SearchItem } from "../interface";
import useAxios from "./useAxios";

export default function useSearch(search: string, deps: any[] = []) {
  const [url, setUrl] = useState<string>("");
  const { data, isFetching, error } = useAxios<SearchItem[]>(url, [url]);

  useEffect(
    () => setUrl(search && `https://restcountries.com/v2/name/${search}`),
    [...deps]
  );

  return {
    data,
    isFetching,
    error,
  };
}
