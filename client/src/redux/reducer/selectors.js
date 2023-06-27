export function getVisibleCountries(state) {
    const { countries, selectedContinent } = state;
    return selectedContinent && selectedContinent !== "All"
      ? countries.filter((country) => country.continent === selectedContinent)
      : countries;
  }
