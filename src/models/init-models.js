var DataTypes = require("sequelize").DataTypes;
var _busroute = require("./busroute");
var _busstop = require("./busstop");
var _busstoproute = require("./busstoproute");
var _favoriteroute = require("./favoriteroute");
var _reportroute = require("./reportroute");
var _user = require("./user");

function initModels(sequelize) {
  var busroute = _busroute(sequelize, DataTypes);
  var busstop = _busstop(sequelize, DataTypes);
  var busstoproute = _busstoproute(sequelize, DataTypes);
  var favoriteroute = _favoriteroute(sequelize, DataTypes);
  var reportroute = _reportroute(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);

  busstoproute.belongsTo(busroute, { as: "BusRoute_idBusRoute_busroute", foreignKey: "BusRoute_idBusRoute"});
  busroute.hasMany(busstoproute, { as: "busstoproutes", foreignKey: "BusRoute_idBusRoute"});
  favoriteroute.belongsTo(busroute, { as: "BusRoute_idBusRoute_busroute", foreignKey: "BusRoute_idBusRoute"});
  busroute.hasMany(favoriteroute, { as: "favoriteroutes", foreignKey: "BusRoute_idBusRoute"});
  reportroute.belongsTo(busroute, { as: "BusRoute_idBusRoute_busroute", foreignKey: "BusRoute_idBusRoute"});
  busroute.hasMany(reportroute, { as: "reportroutes", foreignKey: "BusRoute_idBusRoute"});
  busstoproute.belongsTo(busstop, { as: "BusStop_idBusStop_busstop", foreignKey: "BusStop_idBusStop"});
  busstop.hasMany(busstoproute, { as: "busstoproutes", foreignKey: "BusStop_idBusStop"});
  favoriteroute.belongsTo(user, { as: "User_idUser_user", foreignKey: "User_idUser"});
  user.hasMany(favoriteroute, { as: "favoriteroutes", foreignKey: "User_idUser"});
  reportroute.belongsTo(user, { as: "User_idUser_user", foreignKey: "User_idUser"});
  user.hasMany(reportroute, { as: "reportroutes", foreignKey: "User_idUser"});

  return {
    busroute,
    busstop,
    busstoproute,
    favoriteroute,
    reportroute,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
