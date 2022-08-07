import CountryInfosModel from "../model/CountryInfosModel";

export interface SearchItem {
  name: string;
  capital: string;
  population: number;
  region: string;
  alpha2Code: string;
  flags: {
    png: string;
    svg: string;
  };
}

export interface CountryInfosInterface {
  name: {
    common: string;
    nativeName: any;
  };
  tld: string[];
  population: number;
  region: string;
  subregion: string;
  currencies: any;
  languages: any;
  borders: string[];
  capital: string[];
  flags: {
    svg: string;
    png: string;
  };
}

export interface RootContextInterface {
  countryCode?: string;

  searchQuery?: string;
  filterQuery?: string;

  page?: "list" | "infos";

  countryList?: SearchItem[];
  countryInfos?: CountryInfosInterface;

  search?(query: string): any;
  filter?(query: string): any;
  showCountryList?(): any;
  showCountryInfos?(countryCode: string): any;
}

export interface DispatcherAction {
  type: "search" | "filter" | "open" | "goBack";
  arg?: any;
}
