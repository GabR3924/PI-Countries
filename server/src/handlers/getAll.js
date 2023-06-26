const axios = require("axios");
const { Country } = require('../db.js'); // Asegúrate de importar el modelo Country

const getAll = async () => {
  const response = await axios.get(`http://localhost:5000/countries`);
  const countries = response.data;

  const result = countries.map((country) => ({
    name: country.name.official,
    imagen: country.flags.svg,
    continente: country.region,
    capital: country.capital,
    subregion: country.subregion,
    area: country.area,
    poblacion: country.population
  }));

  
  await Country.bulkCreate(result);

  const countriesDb = await Country.findAll()

  // console.log('countriesDb', countriesDb)
  return countriesDb;
};

module.exports = getAll;
