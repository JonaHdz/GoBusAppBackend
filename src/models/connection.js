const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("gobussappbd", "root", "minecraftPE1976", {
    host: "localhost",
    dialect: "mysql",
    port: 3306
});


async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log("Conexion establecida con exito");
    } catch (error) {
        console.error("No se pudo conectar a la base de datos", error);
    }
}

module.exports = {
    sequelize,
    testConnection
}

    
