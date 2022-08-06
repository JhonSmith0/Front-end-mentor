import { getNameOfDeclaration } from "typescript";
import { CountryInfosInterface } from "../../App";
import useAxios from "../../hooks/useAxios";
import Button from "../Button/Button";
import { formatter } from "../CountryConteiner/CountryConteiner";
import { arrowLeft } from "../icons";
import InfosLine from "../InfosList/InfosLine";

interface propsInt {
  children?: any;
  className?: string;
  atributes?: object;

  countryCode?: string;
  onBack?(): any;
}

function camelCaseToString(string: string) {
  return [...string].reduce((nova, letter, i, arr) => {
    if (i === 0) {
      nova += letter.toUpperCase();
    } else if (+letter) {
      nova += letter;
    } else if (letter === letter.toUpperCase()) {
      nova += " ";
      nova += letter;
    } else {
      nova += letter;
    }
    return nova;
  }, "");
}

export default function CountryInfos(props: propsInt) {
  const { children, className, atributes, countryCode } = props;

  const {
    data: DATA,
    isFetching,
    error,
  } = useAxios<CountryInfosInterface[]>(
    `https://restcountries.com/v3.1/alpha/${countryCode}`,
    []
  );

  const data = DATA?.[0];

  console.log(data, isFetching, countryCode);

  function getNativeName() {
    const values: any = Object.values(data?.name?.nativeName);
    return values?.[0].official || "";
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
      {!isFetching && data ? (
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
              alt=""
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
            {data?.name.common || ""}
          </h2>

          <ul className="my-[1rem]">
            <InfosLine label="Native Name" value={getNativeName() ?? ""} />
            <InfosLine
              label="Population"
              value={formatter.format(data?.population ?? 0) + ""}
            />
            <InfosLine label="Region" value={data?.region} />
            <InfosLine label="Sub Region" value={data?.subregion} />
            <InfosLine
              label="Capital"
              value={Object.values(data?.capital ?? []).join(" ")}
            />
          </ul>
          <ul className="my-[2.4rem]">
            <InfosLine
              label="Top Level Domain"
              value={Object.values(data?.tld ?? [])[0]}
            />
            <InfosLine
              label="Currencies"
              value={Object.keys(data?.currencies ?? []).join(" ")}
            />
            <InfosLine
              label="Languages"
              value={Object.values(data?.languages ?? []).join(" ")}
            />
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
          <div className="border-countries flex gap-3">
            <Button>France</Button>
            <Button>Germany</Button>
            <Button>Netherlands</Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
