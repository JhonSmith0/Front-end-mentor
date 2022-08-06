import { createContext, useReducer, useState } from "react";
import { DispatcherAction, RootContextInterface } from "../../interface";

const RootContext = createContext<RootContextInterface>({});

function reducer(state: RootContextInterface, action: DispatcherAction) {
  const { type, arg } = action;

  switch (type) {
    case "search":
      break;
    case "filter":
      break;
    case "open":
      break;
    case "goBack":
      break;
  }

  return state;
}

export function RootContextProvider(props: any) {
  const [state, dispatcher] = useReducer(reducer, {
    searchQuery: "",
    searchItems: [],
    filteredSearch: [],
    filterQuery: "",
    currentCountryObject: undefined,
    curretCountryCode: "",
    page: "list",
    search,
    filter,
    open,
    goBack,
  });

  function search(searchQuery: string) {}
  function filter(searchQuery: string) {}
  function open(countryCode: string) {}
  function goBack() {}

  return (
    <RootContext.Provider value={state}>{props.children}</RootContext.Provider>
  );
}

export default RootContext;
