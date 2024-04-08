const SequelizeAuto = require('sequelize-auto');
const path = require('path');

// Configuración de sequelize-auto
const auto = new SequelizeAuto('gobussappbd', 'root', 'minecraftPE1976', {
    host: 'localhost',
    dialect: 'mysql',
    directory: path.resolve(__dirname, 'models'), // Directorio donde se guardarán los modelos
    port: 3306,
    additional: {
        timestamps: false // Opcional: deshabilita los campos de timestamp created_at y updated_at
    },
    // Opcional: configuración de tablas específicas a incluir o excluir
    // tables: ['tabla1', 'tabla2'],
    // skipTablesWithNoPrimaryKey: true,
});

// Genera los modelos
auto.run(function (err) {
    if (err) throw err;
    console.log('Modelos generados con éxito!');
});
