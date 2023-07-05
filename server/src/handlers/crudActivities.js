const { Activity, Country } = require("../db.js");

const getActivities = async () => {
  const activities = await Activity.findAll({
    include: { model: Country, as: 'countries' },
  });

  return { data: activities };
};


const createActivitie = async (name, dificultad, duracion, temporada, countryId) => {
  // Buscar una actividad con el mismo nombre
  const existingActivitie = await Activity.findOne({ where: { name } });

  // Si ya existe una actividad con el mismo nombre, devolver un mensaje de error
  if (existingActivitie) {
    return { error: 'Ya existe una actividad con ese nombre' };
  }

  // Si no existe una actividad con el mismo nombre, crearla
  const newActivitie = await Activity.create({ name, dificultad, duracion, temporada });
  const country = await Country.findByPk(countryId);
  await newActivitie.addCountry(country);
  return { data: newActivitie };
};



const deleteActivie = async (id) =>  {
  await Activity.destroy({
    where: { id }
  });
  return { message: 'Activity deleted successfully' };
}

module.exports = { getActivities, createActivitie, deleteActivie }