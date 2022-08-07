import { formatter } from "../components/CountryConteiner/CountryConteiner";
import { CountryInfosInterface } from "../interface";

export default class CountryInfosModel {
  private _name: {
    common: string;
    nativeName: any;
  };
  private _tld: string[];
  private _currencies: any;
  private _languages: any;
  private _borders: string[];
  private _capital: string[];
  population: string;
  region: string;
  subregion: string;
  flags: {
    svg: string;
    png: string;
  };

  constructor(object: CountryInfosInterface) {
    this._name = object.name;
    this._tld = object.tld;
    this.population = formatter.format(object.population);
    this.region = object.region;
    this.subregion = object.subregion;

    this._currencies = object.currencies;
    this._languages = object.languages;
    this._borders = object.borders;
    this._capital = object.capital;

    this.flags = object.flags;
  }

  get name() {
    return this._name.common;
  }

  get nativeName() {
    return (
      Object.values<{ official: string }>(this._name.nativeName || {})[0]
        ?.official || ""
    );
  }

  get tld() {
    return this._tld?.[0] ?? "";
  }

  get currencies() {
    return Object.keys(this._currencies ?? {}).join(" ");
  }

  get capital() {
    return this._capital?.join(" ") ?? "";
  }

  get languages() {
    return Object.values(this._languages ?? {}).join(" ");
  }

  get borders() {
    return this._borders ?? [];
  }
}
