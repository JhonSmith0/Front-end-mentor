import Button from "../Button/Button";
import { arrowLeft } from "../icons";
import InfosLine from "../InfosList/InfosLine";

import CountryInfosModel from "../../model/CountryInfosModel";
import useRootContext from "../../data/hooks/useRootContext";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface propsInt {
  children?: any;
  className?: string;
  atributes?: object;
}

export default function CountryInfos(props: propsInt) {
  const { countryCode = "", showCountryInfos, goBack } = useRootContext();
  const { data: Data, error } = useQuery([`infos?=${countryCode}`], () =>
    axios.get(`https://restcountries.com/v3.1/alpha/${countryCode}`)
  );

  const data = Data?.data?.[0] ? new CountryInfosModel(Data?.data?.[0]) : null;
  const borders = data?.borders;

  function handleBorders() {
    return borders?.map((e: any) => (
      <Button
        className="md:px-4 m-1"
        atributes={{ onClick: showCountryInfos?.bind(null, e) }}
        key={e}
      >
        {e}
      </Button>
    ));
  }

  return (
    <div className={`dark:text-white h-full lg-font leading-[2] mx-auto`}>
      <Button atributes={{ onClick: goBack }} className={`shadow-xl`}>
        <span className="mr-3 w-6 h-6">{arrowLeft}</span>
        Home
      </Button>

      {error
        ? "An Error Ocurred!"
        : data && (
            <div
              style={{
                gridTemplateColumns: "1fr auto",
              }}
              className="py-[4rem] flex gap-[4.2rem] flex-col 
              md:grid
              md:grid-cols-2
              md:items-center
              md:gap-x-8
              md:gap-16
              md:max-w-[80rem]
              mx-auto
              "
            >
              <div className="h-max country-infos-img md:justify-self-start shadow-md ">
                <img
                  src={data?.flags.svg}
                  alt={`${data?.name} Flag`}
                  className="md:max-w-[32rem] dark:border-[#2B3743] border-black"
                />
              </div>

              <div className="justify-self-end">
                <h2 className="text-[2.8rem] font-bold mb-4">{data?.name}</h2>

                <div className="flex flex-col gap-[4rem] country-infos-infos md:text-[1.5rem] md:flex-row">
                  <ul className="grid gap-y-6 content-start">
                    <InfosLine label={"Native Name"} value={data.nativeName} />

                    <InfosLine label={"Population"} value={data.population} />
                    <InfosLine label={"Region"} value={data.region} />
                    <InfosLine label={"Sub region"} value={data.subregion} />
                    <InfosLine label={"Capital"} value={data.capital} />
                  </ul>
                  <ul className="grid gap-y-6 content-start">
                    <InfosLine label={"Top Level Domain"} value={data.tld} />
                    <InfosLine label={"Currencies"} value={data.currencies} />
                    <InfosLine label={"Languages"} value={data.languages} />
                  </ul>
                </div>
              </div>

              <div className="mt-[4rem] md:m-0 md:col-span-2 ">
                <h3 className="lg-font whitespace-nowrap mb-[1.4rem] font-semibold">
                  Border Countries:
                </h3>
                <div className="flex flex-wrap">{handleBorders()}</div>
              </div>
            </div>
          )}
    </div>
  );
}
