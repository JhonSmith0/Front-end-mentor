import { SearchItem } from "../../App";
import { searchIcon } from "../icons";
import InfosLine from "../InfosList/InfosLine";

interface propsInt {
  children?: any;
  className?: string;
  atributes?: object;

  searchItem: SearchItem;
  onClick?(item: SearchItem): any;
}

export const formatter = Intl.NumberFormat(window.navigator.language);

export default function CountryConteiner(props: propsInt) {
  const { children, className, atributes, searchItem, onClick } = props;

  function getName(): string {
    return searchItem.name ?? "";
  }

  return (
    <div
      className="
    country-conteiner
    w-max
    h-max
    max-w-[320px]
    rounded-[5px]
    overflow-hidden
    panel-color
    text-white
    shadow"
    >
      <div
        className="
      
      
      "
      >
        <img
          onClick={onClick?.bind(null, searchItem)}
          src={searchItem.flags.svg}
          alt=""
          className="w-full h-full cursor-pointer"
        />
      </div>
      <div
        className="
      p-[2.4rem]
      pb-[4.2rem]
      "
      >
        <h2
          className="lg-font font-bold
        mb-6
        "
        >
          {searchItem.name ?? ""}
        </h2>
        <ul className="md-font">
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
