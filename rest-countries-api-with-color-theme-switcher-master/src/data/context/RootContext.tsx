import { createContext, Reducer, useReducer } from "react";
import { RootContextInterface } from "../../interface";

const RootContext = createContext<RootContextInterface>({});

function reducer(
  state: RootContextInterface,
  action: { type: string; arg?: any }
) {
  const { type, arg } = action;
  const { countryPages } = state;

  switch (type) {
    case "search":
      return { ...state, searchQuery: arg, filterQuery: "all" };
    case "filter":
      return { ...state, filterQuery: arg };
    case "showCountryList":
      return { ...state, page: "list", countryPages: [] };
    case "showCountryInfos":
      countryPages?.push(arg);
      return { ...state, page: "infos", countryCode: arg, countryPages };
    case "toggleTheme":
      const theme = state.theme === "dark" ? "" : "dark";
      window.localStorage.setItem("theme", theme);

      return { ...state, theme };
    case "goBack":
      countryPages?.pop();
      if (countryPages?.length === 0) {
        return { ...state, countryPages, page: "list" };
      }
      return { ...state, countryPages, countryCode: countryPages?.at(-1) };

    default:
      return state;
  }
}

export function RootContextProvider(props: any) {
  const [state, dispatcher] = useReducer<Reducer<RootContextInterface, any>>(
    reducer,
    {
      countryCode: "",
      searchQuery: "",
      filterQuery: "",

      theme: String(window.localStorage.getItem("theme")) ?? "dark",

      page: "list",
      search,
      filter,
      showCountryList,
      showCountryInfos,
      toggleTheme,

      goBack,
      countryPages: [],
    }
  );

  function search(query: string) {
    dispatcher({
      type: "search",
      arg: query.toLowerCase(),
    });
  }
  function filter(query: string) {
    dispatcher({
      type: "filter",
      arg: query.toLowerCase(),
    });
  }

  function showCountryList() {
    dispatcher({
      type: "showCountryList",
      arg: "",
    });
  }
  function showCountryInfos(countryCode: string) {
    dispatcher({
      type: "showCountryInfos",
      arg: countryCode.toLowerCase(),
    });
  }

  function toggleTheme() {
    dispatcher({
      type: "toggleTheme",
    });
  }

  function goBack() {
    dispatcher({ type: "goBack" });
  }

  return (
    <RootContext.Provider value={state}>{props.children}</RootContext.Provider>
  );
}

export default RootContext;
