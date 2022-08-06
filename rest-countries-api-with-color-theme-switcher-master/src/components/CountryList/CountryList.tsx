import { SearchItem } from "../../App";
import CountryConteiner from "../CountryConteiner/CountryConteiner";
import { searchIcon } from "../icons";

interface propsInt {
  children?: any;
  className?: string;
  atributes?: object;

  items: SearchItem[];
  onClick?(item: SearchItem): any;
}

export default function CountryList(props: propsInt) {
  const { children, className, atributes, items } = props;
  return (
    <div
      className={`
    w-full
    h-max
    p-[3.2rem]



    content-start
    gap-[3.2rem]

    justify-center
    flex
    flex-wrap
    
    items-center

    `}
    >
      {items.map((item) => (
        <CountryConteiner
          key={item.name}
          searchItem={item}
          onClick={props.onClick}
        />
      ))}
    </div>
  );
}
