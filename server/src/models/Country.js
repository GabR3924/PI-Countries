const { DataTypes, Sequelize } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
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
