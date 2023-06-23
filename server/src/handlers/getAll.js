const axios = require("axios");

const getAll = async () => {
  const response = await axios.get(`http://localhost:5000/countries`);
  const countries = response.data;

  const result = countries.map((country) => ({
    name: country.name.official,
    flag: country.flags.svg,
    continent: country.region,
    capital: country.capital,
    subregion: country.subregion,
    area: country.area,
    population: country.population
  }));

  return result;
};

module.exports = getAll;
