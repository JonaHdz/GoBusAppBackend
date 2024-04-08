const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('busstoproute', {
    idBusStopRoute: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    BusRoute_idBusRoute: {
      type: DataTypes.STRING(45),
      allowNull: false,
      references: {
        model: 'busroute',
        key: 'idBusRoute'
      }
    },
    BusStop_idBusStop: {
      type: DataTypes.STRING(45),
      allowNull: false,
      references: {
        model: 'busstop',
        key: 'idBusStop'
      }
    }
  }, {
    sequelize,
    tableName: 'busstoproute',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idBusStopRoute" },
        ]
      },
      {
        name: "fk_BusStopRoute_BusRoute1_idx",
        using: "BTREE",
        fields: [
          { name: "BusRoute_idBusRoute" },
        ]
      },
      {
        name: "fk_BusStopRoute_BusStop1_idx",
        using: "BTREE",
        fields: [
          { name: "BusStop_idBusStop" },
        ]
      },
    ]
  });
};
