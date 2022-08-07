import { getNameOfDeclaration } from "typescript";
import { CountryInfosInterface, SearchItem } from "../../interface";
import Button from "../Button/Button";
import { formatter } from "../CountryConteiner/CountryConteiner";
import { arrowLeft } from "../icons";
import InfosLine from "../InfosList/InfosLine";

import CountryInfosModel from "../../model/CountryInfosModel";
import { useEffect, useState } from "react";
import useRootContext from "../../data/hooks/useRootContext";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface propsInt {
  children?: any;
  className?: string;
  atributes?: object;
}

export default function CountryInfos(props: propsInt) {
  const { children, className, atributes } = props;

  const { countryCode = "", showCountryList } = useRootContext();
  const {
    data: Data,
    isFetching,
    error,
  } = useQuery([`infos?=${countryCode}`], () =>
    axios.get(`https://restcountries.com/v3.1/alpha/${countryCode}`)
  );

  const data = Data?.data?.[0] ? new CountryInfosModel(Data?.data?.[0]) : null;
  const [borders, setBorders] = useState<any>();

  useEffect(() => {
    if (!data || borders) return;

    data
      .borders()
      .then((e: any) => setBorders(e))
      .catch((e) => setBorders("Error!"));
  }, [data]);

  function handleBorders() {
    if (!borders) return;
    if (typeof borders === "string") return borders;
    return borders.map((e: any) => <Button key={e}>{e}</Button>);
  }

  return (
    <div
      className={`
    text-white
    h-full
    lg-font
    leading-[2]
    mx-auto

    `}
    >
      <Button
        atributes={{ onClick: showCountryList }}
        className={`
        shadow-xl

      `}
      >
        <span
          className="
        mr-3
        w-6
        h-6
        "
        >
          {arrowLeft}
        </span>
        Back
      </Button>

      {error
        ? "An Error Ocurred!"
        : data && (
            <div
              className="

       pb-[4rem]
       grid
       grid-cols-2


       md:flex-row
       md:justify-between
       md:-between
       "
            >
              <div
                className="
        mt-[6.4rem]
        mb-[4.2rem]
        w-full
        aspect-video

        md:w-max
        md:h-full



        "
              >
                <img
                  src={data?.flags.svg}
                  alt={""}
                  className="
            w-full
            "
                />
              </div>

              <div className="md:w-max hidden">
                <h2
                  className="
            text-[2.8rem]
            font-bold
        "
                >
                  {data?.name}
                </h2>

                <div className="grid gap-[3rem] md:grid-cols-2">
                  <ul className="">
                    <InfosLine label={"Native Name"} value={data.nativeName} />
                    <InfosLine label={"Population"} value={data.population} />
                    <InfosLine label={"Region"} value={data.region} />
                    <InfosLine label={"Sub region"} value={data.subregion} />
                    <InfosLine label={"Capital"} value={data.capital} />
                  </ul>
                  <ul className="">
                    <InfosLine label={"Top Level Domain"} value={data.tld} />
                    <InfosLine label={"Currencies"} value={data.currencies} />
                    <InfosLine label={"Languages"} value={data.languages} />
                  </ul>
                </div>

                <h3
                  className="

        lg-font
        font-semibold
        mt-[4rem]
        mb-[1.4rem]
        "
                >
                  Border Countries
                </h3>
                <div className="border-countries flex flex-wrap gap-3">
                  {handleBorders()}
                </div>
              </div>
            </div>
          )}
    </div>
  );
}
