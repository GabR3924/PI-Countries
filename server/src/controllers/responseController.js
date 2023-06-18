const getAll = require('../handlers/getAll.js')

const getAllController = async (req, res) => {
    try {
        const countries = await getAll();
        console.log('countries:', countries)
        res.json(countries)
    } catch (error) {
        console.log(error)
    }
}

module.exports = getAllController