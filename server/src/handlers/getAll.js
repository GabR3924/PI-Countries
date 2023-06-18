const axios = require("axios")

const getAll = async() => {
    const response = await axios.get(`http://localhost:5000/countries`);
    const countrie = response.data

    return {
        name: countrie.map(country => country.name.official),
        flag: countrie.map(country => country.flags.svg)
    };
}

module.exports = getAll;