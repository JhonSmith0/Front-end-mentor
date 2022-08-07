import axios from "axios";
import {
  createContext,
  Reducer,
  useLayoutEffect,
  useReducer,
  useState,
} from "react";
import { DispatcherAction, RootContextInterface } from "../../interface";

const RootContext = createContext<RootContextInterface>({});

function reducer(state: any, action: any) {
  const { type, arg } = action;
  switch (type) {
    case "search":
      return { ...state, searchQuery: arg, filterQuery: "all" };
    case "filter":
      return { ...state, filterQuery: arg };
    case "showCountryList":
      return { ...state, page: "list" };
    case "showCountryInfos":
      return { ...state, page: "infos", countryCode: arg };
    case "toggleTheme":
      const theme = state.theme === "dark" ? "" : "dark";
      window.localStorage.setItem("theme", theme);

      return { ...state, theme };

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

  return (
    <RootContext.Provider value={state}>{props.children}</RootContext.Provider>
  );
}

export default RootContext;
