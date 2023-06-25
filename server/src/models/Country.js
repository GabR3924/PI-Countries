const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

function generateId() {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (let i = 0; i < 3; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: generateId
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imagen: {
      type:DataTypes.STRING,
      allowNull: true
    },
    continente: {
      type:DataTypes.STRING,
      allowNull: true
    },
    capital: {
      type:DataTypes.STRING,
      allowNull: false
    },
    subregion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    area: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    poblacion: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    timestamps: false
});
};
