const {sequelize, testConnection} = require("../models/connection");
const DataTypes = require('sequelize').DataTypes;
const defineUserModel = require("../models/user");

const User = defineUserModel(sequelize, DataTypes);

async function testOne(){
    try {
        await sequelize.authenticate();
        const users =  await User.findAll();
        console.log("tamano: ",users.length);
    } catch (error) {
        console.error("PEDOS: ", error);
    }
}; 

testOne();