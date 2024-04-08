const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('busstop', {
    idBusStop: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    location: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'busstop',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idBusStop" },
        ]
      },
    ]
  });
};
