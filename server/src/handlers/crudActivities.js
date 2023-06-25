const { Activity } = require("../db.js");

const createActivitie = async (name, dificultad, duracion, temporada) => {
  const newActivitie = await Activity.create({name, dificultad, duracion, temporada});

  return { data: newActivitie };
};

module.exports = createActivitie