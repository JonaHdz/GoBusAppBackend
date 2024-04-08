const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('favoriteroute', {
    idFavoritePath: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
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
    tableName: 'favoriteroute',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idFavoritePath" },
        ]
      },
      {
        name: "fk_FavoriteRoute_User_idx",
        using: "BTREE",
        fields: [
          { name: "User_idUser" },
        ]
      },
      {
        name: "fk_FavoriteRoute_BusRoute1_idx",
        using: "BTREE",
        fields: [
          { name: "BusRoute_idBusRoute" },
        ]
      },
    ]
  });
};
