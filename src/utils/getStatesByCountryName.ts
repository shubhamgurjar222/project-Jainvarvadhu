import { Country, State, ICountry, IState } from 'country-state-city';

export default function getStatesByCountryName(countryName: string): IState[] {
  const allCountries: ICountry[] = Country.getAllCountries();

  const country: ICountry | undefined = allCountries.find(
    (c: ICountry) => c.name.toLowerCase() === countryName.toLowerCase()
  );

  if (!country) {
    return [];
  }

  const states: IState[] = State.getStatesOfCountry(country.isoCode);
  return states;
}