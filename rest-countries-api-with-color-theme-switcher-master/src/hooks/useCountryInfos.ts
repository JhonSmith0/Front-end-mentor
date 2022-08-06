import { useState } from "react";
import { SearchItem } from "../interface";
import useAxios from "./useAxios";

import CountryInfosModel from "../model/CountryInfosModel";

export default function useCountryInfos(countryCode: string) {
  const {
    data: DATA,
    isFetching,
    error,
  } = useAxios<SearchItem[]>(
    `https://restcountries.com/v3.1/alpha/${countryCode}`,
    [countryCode]
  );
  const [data, setData] = useState<CountryInfosModel>();
  const [borders, setBorders] = useState<string | string[]>();

  if (!data && DATA && !borders) {
    const copy: any = DATA?.[0];
    const _data = new CountryInfosModel(copy);
    setData(_data);
    _data
      .borders()
      .then((e) => setBorders(e))
      .catch((err) => setBorders("An error ocurred!"));
  }

  return {
    data,
    isFetching,
    error,
    borders,
  };
}
