const axios = require("axios");
const { Country } = require('../db.js'); 

const getAll = async (name) => {
  // Verificar si ya hay datos en la tabla Country
  const count = await Country.count();
  if (count === 0) {
    // Si la tabla está vacía, obtener los datos de los países
    const response = await axios.get(`http://localhost:5000/countries`);
    const countries = response.data;

    const result = countries.map((country) => ({
      name: country.name.common,
      imagen: country.flags.svg,
      continente: country.region,
      capital: country.capital,
      subregion: country.subregion,
      area: country.area,
      poblacion: country.population
    }));

    await Country.bulkCreate(result);
  }

  let countriesDb = await Country.findAll()

  if (name) {
    countriesDb = countriesDb.filter((country) => country.name === name);
  }

  if (countriesDb.length === 0) {
    throw new Error(name ? `No se encontró ningún país con el nombre "${name}"` : 'No se pudieron cargar los países');
  }

  return countriesDb;
};


module.exports = getAll;
