const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
  },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
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
      allowNull: true
    },
    subregion: {
      type: DataTypes.STRING,
      allowNull: true
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










// function generateId() {
//   let result = '';
//   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   for (let i = 0; i < 3; i++) {
//     result += characters.charAt(Math.floor(Math.random() * characters.length));
//   }
//   return result;
// }