const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reportroute', {
    idReportRoute: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    comment: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    User_idUser: {
      type: DataTypes.STRING(45),
      allowNull: false,
      references: {
        model: 'user',
        key: 'idUser'
      }
    },
    BusRoute_idBusRoute: {
      type: DataTypes.STRING(45),
      allowNull: false,
      references: {
        model: 'busroute',
        key: 'idBusRoute'
      }
    }
  }, {
    sequelize,
    tableName: 'reportroute',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idReportRoute" },
        ]
      },
      {
        name: "fk_ReportRoute_User1_idx",
        using: "BTREE",
        fields: [
          { name: "User_idUser" },
        ]
      },
      {
        name: "fk_ReportRoute_BusRoute1_idx",
        using: "BTREE",
        fields: [
          { name: "BusRoute_idBusRoute" },
        ]
      },
    ]
  });
};
