const { login } = require('../database/loginDB');
const { registerUser } = require('../database/loginDB');
const user = require('../models/user');
const jwt = require('jsonwebtoken');

const loginUser = async (req,res) => {
    console.log("prueba de arduino");
  return res.status(200).send({
    message: "prueba de arduino exitosa"
  });
};

module.exports = {
    loginUser
    };
