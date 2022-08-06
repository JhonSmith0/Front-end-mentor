import CountryInfosModel from "../model/CountryInfosModel";

export interface SearchItem {
  name: string;
  capital: string;
  population: number;
  region: string;
  alpha2Code?: string;
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
  searchQuery?: string;
  searchItems?: SearchItem[];
  filteredSearch?: SearchItem[];
  filterQuery?: string;
  currentCountryObject?: CountryInfosModel;
  curretCountryCode?: string;
  page?: "list" | "infos";
  search?(searchQuery: string): any;
  filter?(searchQuery: string): any;
  open?(countryCode: string): any;
  goBack?(): any;
}

export interface DispatcherAction {
  type: "search" | "filter" | "open" | "goBack";
  arg?: any;
}
