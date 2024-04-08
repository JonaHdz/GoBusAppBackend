const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    idUser: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    userName: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    userLastName: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    userEmail: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    userPassword: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idUser" },
        ]
      },
    ]
  });
};

