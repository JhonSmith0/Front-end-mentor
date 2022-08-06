import { getNameOfDeclaration } from "typescript";
import { CountryInfosInterface, SearchItem } from "../../interface";
import useAxios from "../../hooks/useAxios";
import Button from "../Button/Button";
import { formatter } from "../CountryConteiner/CountryConteiner";
import { arrowLeft } from "../icons";
import InfosLine from "../InfosList/InfosLine";

import CountryInfosModel from "../../model/CountryInfosModel";
import { useState } from "react";
import useCountryInfos from "../../hooks/useCountryInfos";

interface propsInt {
  children?: any;
  className?: string;
  atributes?: object;

  countryCode: string;
  onBack?(): any;
}

export default function CountryInfos(props: propsInt) {
  const { children, className, atributes, countryCode } = props;

  const { data, borders, error, isFetching } = useCountryInfos(countryCode);

  function handleBorders() {
    if (!borders) return undefined;
    if (typeof borders === "string") return borders;
    else return borders.map((e) => <Button key={e}>{e}</Button>);
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
        atributes={{ onClick: props.onBack }}
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
       "
            >
              <div
                className="
        mt-[6.4rem]
        mb-[4.2rem]
        w-full
        aspect-video
       
        
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

              <h2
                className="
        text-[2.8rem]
        font-bold
        "
              >
                {data?.name}
              </h2>

              <ul className="my-[1rem]">
                <InfosLine label={"Native Name"} value={data.nativeName} />
                <InfosLine label={"Population"} value={data.population} />
                <InfosLine label={"Region"} value={data.region} />
                <InfosLine label={"Sub region"} value={data.subregion} />
                <InfosLine label={"Capital"} value={data.capital} />
              </ul>
              <ul className="mt-[3rem]">
                <InfosLine label={"Top Level Domain"} value={data.tld} />
                <InfosLine label={"Currencies"} value={data.currencies} />
                <InfosLine label={"Languages"} value={data.languages} />
              </ul>

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
          )}
    </div>
  );
}
