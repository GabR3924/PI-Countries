const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('CountryActivity', {
        countryId: {
          type: DataTypes.STRING,
          references: {
            model: 'Country',
            key: 'id'
          }
        },
        activityId: {
          type: DataTypes.INTEGER,
          references: {
            model: 'Activity',
            key: 'id'
          }
        }
      }, {
        timestamps: false
      });
      
}