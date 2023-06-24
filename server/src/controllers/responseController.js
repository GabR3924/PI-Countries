const getAll = require('../handlers/getAll.js')
const createActivitie = require('../handlers/crudActivities.js')

const getAllController = async (req, res, next) => {
    try {
        const countries = await getAll();
        res.json(countries)
    } catch (error) {
        next(error)
    }
}

const createA = async (req, res, next) => {
    const { name, dificultad, duracion, temporada } = req.body

    console.log('form', name, dificultad, duracion, temporada)
    try {
        const create = await createActivitie(name, dificultad, duracion, temporada )

        res.json(create)
    } catch (error) {
        next(error)
    }
}

module.exports = {getAllController, createA}