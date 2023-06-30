const { Activity, Country } = require("../db.js");

const getActivities = async () => {
  const activities = await Activity.findAll({
    include: { model: Country, as: 'countries' },
  });

  return { data: activities };
};


const createActivitie = async (name, dificultad, duracion, temporada, countryId) => {
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