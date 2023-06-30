const axios = require("axios");
const { Country } = require('../db.js'); 

const getById = async (id) => {

    const country = await Country.findByPk(id);

    return country

}

module.exports = getById;