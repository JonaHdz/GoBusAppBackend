const { sequelize } = require('../models/connection');
const DataTypes = require('sequelize').DataTypes;
const defineUserModel = require("../models/user");
const user = defineUserModel(sequelize, DataTypes);


const login = async (email, password) => {
    try {
        const userFound = await user.findOne({ where: { userEmail: email, userPassword: password } });
        return userFound;
    } catch (error) {
        console
    }
}

const registerUser = async (body) => {
    try {
        const userCreated = await user.create(body);
        return userCreated;
    } catch (error) {
        console.error("Error en registerNewUser: ", error);
    }
}

module.exports = {
    login,
    registerUser
}
