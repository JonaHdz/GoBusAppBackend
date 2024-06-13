const { login } = require('../database/loginDB');
const { registerUser } = require('../database/loginDB');
const user = require('../models/user');
const jwt = require('jsonwebtoken');

const loginUser = async (req, res) => {
    const { body } = req;
    if (!body.email || !body.password) {
        return res.status(400).send({
            data: body,
            message: "Algun campo esta vacio"
        });
    } else {
        //TO DO: agregar comprobacion las credenciales para caracteres especiales
        const user = await login(body.email, body.password);
        if (!user) {
            return res.status(404).send({
                data: null,
                message: "Credenciales incorrectas"
            });
        } else {
            const token = jwt.sign({
                id: user.id,
                email: user.email
            }, 'secretkeyadsdasd', {
                expiresIn: 60 * 60 * 24
            });
            return res.status(200).send({
                data: token,
                message: "Login success"
            });
        }

    }
};

const registerNewUser = async (req, res) => {
    const { body } = req;
    if (!body) {
        return res.status(400).send({
            data: body,
            message: "Algun campo esta vacio"
        });
    } else {
        //TO DO: agregar comprobacion las credenciales para caracteres especiales
        const userCreated = await registerUser(body);
        if (!userCreated) {
            return res.status(404).send({
                data: null,
                message: "Ocurrio un problema al registrar el usuario"
            });
        } else {
            return res.status(200).send({
                data: userCreated,
                message: "Registro exitoso"
            });
        }
    }
};

module.exports = {
    loginUser,
    registerNewUser
};