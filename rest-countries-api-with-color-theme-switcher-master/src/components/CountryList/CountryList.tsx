import useRootContext from "../../data/hooks/useRootContext";
import { SearchItem } from "../../interface";
import CountryConteiner from "../CountryConteiner/CountryConteiner";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface propsInt {
  children?: any;
  className?: string;
  atributes?: object;
}

function filter(region: string, lista: SearchItem[]) {
  return lista.filter((obj) =>
    region === "all" ? obj : obj.region.toLowerCase() === region.toLowerCase()
  );
}

export default function CountryList(props: propsInt) {
  const { searchQuery = "", filterQuery = "all" } = useRootContext();

  function getTodos(search: string) {
    if (!search) return;
    return axios.get("https://restcountries.com/v2/name/" + search);
  }

  const { data } = useQuery(
    [`search?=${searchQuery.toLowerCase()}`],
    getTodos.bind(null, searchQuery)
  );

  return (
    <div
      className={`
    w-full
    h-max
    py-[3.2rem]
    md:px-[3.2rem]
    md:py-[8rem]



    content-start
    gap-[3.2rem]

    justify-center
    flex
    flex-wrap
    
    items-center

    `}
    >
      {data?.data
        ? filter(filterQuery, data.data).map((e: any) => (
            <CountryConteiner searchItem={e} key={e.name} />
          ))
        : null}
    </div>
  );
}
