const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('busroute', {
    idBusRoute: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    NameRoute: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    RouteLocations: {
      type: DataTypes.BLOB,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'busroute',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idBusRoute" },
        ]
      },
    ]
  });
};
