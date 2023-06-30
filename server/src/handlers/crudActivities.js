const { Activity } = require("../db.js");

const getActivities = async () => {
  const activities = await Activity.findAll();
  console.log(activities)
  return { data: activities }
}

const createActivitie = async (name, dificultad, duracion, temporada) => {
  const newActivitie = await Activity.create({name, dificultad, duracion, temporada});

  return { data: newActivitie };
};

const deleteActivie = async (id) =>  {
  await Activity.destroy({
    where: { id }
  });
  return { message: 'Activity deleted successfully' };
}

module.exports = { getActivities, createActivitie, deleteActivie }