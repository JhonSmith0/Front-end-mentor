import useRootContext from "../../data/hooks/useRootContext";
import { SearchItem } from "../../interface";
import InfosLine from "../InfosList/InfosLine";

interface propsInt {
  children?: any;
  className?: string;
  atributes?: object;
  searchItem: SearchItem;
}

export const formatter = Intl.NumberFormat(window.navigator.language);

export default function CountryConteiner(props: propsInt) {
  const { searchItem } = props;

  const { showCountryInfos } = useRootContext();

  return (
    <div
      className="
    country-conteiner
    w-full
    max-w-[30rem]
    h-max
    rounded-[5px]
    overflow-hidden
    dark:bg-[#2b3743]
    dark:text-white

    bg-white
    

    shadow
    
    "
    >
      <div
        className="
      
      
      "
      >
        <img
          onClick={showCountryInfos?.bind(null, searchItem.alpha2Code)}
          src={searchItem.flags.svg}
          alt={`${searchItem.name} Flag`}
          className="w-full h-full cursor-pointer"
        />
      </div>
      <div
        className="
      p-[2.4rem]
      py-[2.8rem]
      "
      >
        <h2
          className="lg-font font-bold
        mb-6
        "
        >
          {searchItem.name ?? ""}
        </h2>
        <ul className="text-[1.7rem] grid gap-5">
          <InfosLine
            label={"Population"}
            value={formatter.format(searchItem.population) + ""}
          />
          <InfosLine label={"Region"} value={searchItem.region} />
          <InfosLine label={"Capital"} value={searchItem.capital} />
        </ul>
      </div>
    </div>
  );
}
