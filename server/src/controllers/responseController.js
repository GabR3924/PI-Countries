const getAll = require('../handlers/getAll.js')
const { getActivities, createActivitie, deleteActivie} = require('../handlers/crudActivities.js')
const getById =require('../handlers/getById.js')

const getAllController = async (req, res, next) => {
    const { name } = req.query
    console.log(name)
    try {
        const countries = await getAll(name);
        res.json(countries)
    } catch (error) {
      res.json({ error: error.message });
    }
}

const getByIdController = async (req, res, next) => {
    const { id } = req.params;
    try {
      const country = await getById(id);
      res.json(country);
    } catch (error) {
      next(error);
    }
  }

const getActivitiesController = async (req, res, next) => {
    try {
        const dbActivities = await getActivities();
    
        res.json(dbActivities);
        
    } catch (error) {
       next(error) 
    }
}

const createActivitieController = async (req, res, next) => {
    const { name, dificultad, duracion, temporada, countryId } = req.body

    console.log('form', name, dificultad, duracion, temporada, countryId)
    try {
        const create = await createActivitie(name, dificultad, duracion, temporada, countryId )

        res.json(create)
    } catch (error) {
        next(error)
    }
}

const deleteActivieController = async (req, res, next) => {
    const { id } = req.params;
  try {
    const response = await deleteActivie(id);
    res.json(response);
  } catch (error) {
    next(error);
  }

}

module.exports = {getAllController, getActivitiesController, createActivitieController, getByIdController, deleteActivieController}