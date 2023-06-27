const axios = require("axios");
const { Country } = require('../db.js'); // Asegúrate de importar el modelo Country

const getAll = async () => {
  // Verificar si ya hay datos en la tabla Country
  const count = await Country.count();
  if (count === 0) {
    // Si la tabla está vacía, obtener los datos de los países
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

    // Insertar los datos en la base de datos
    await Country.bulkCreate(result);
  }

  // Obtener los datos de la base de datos
  const countriesDb = await Country.findAll()

  return countriesDb;
};

module.exports = getAll;
