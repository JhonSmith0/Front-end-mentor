import axios from "axios";
import { createContext, useReducer, useState } from "react";
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

    default:
      return state;
  }
}

export function RootContextProvider(props: any) {
  const [state, dispatcher] = useReducer(reducer, {
    countryCode: "",
    searchQuery: "",
    filterQuery: "",

    // countryList: [],
    // countryInfos: null,

    page: "list",
    search,
    filter,
    showCountryList,
    showCountryInfos,
  });

  function search(query: string) {
    dispatcher({
      type: "search",
      arg: query,
    });
  }
  function filter(query: string) {
    dispatcher({
      type: "filter",
      arg: query,
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
      arg: countryCode,
    });
  }

  return (
    <RootContext.Provider value={state}>{props.children}</RootContext.Provider>
  );
}

export default RootContext;
