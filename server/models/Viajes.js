const Sequelize = require('sequelize');
/*database*/
const db = require('../config/database');

const Viaje = db.define('Viaje', {
    id_viaje: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    titulo: {
        type: Sequelize.STRING
    },
    precio: {
        type: Sequelize.STRING
    },
    fecha_ida: {
        type: Sequelize.DATE
    },
    fecha_vuelta: {
        type: Sequelize.DATE
    },
    imagen: {
        type: Sequelize.STRING
    },
    descripcion: {
        type: Sequelize.STRING
    },
    disponibles: {
        type: Sequelize.STRING
    },
}, {
    tableName: 'viajes', // this will define the table's name
    timestamps: false // this will deactivate the timestamp columns
}, {
    updatedAt: 'last_update',
    createdAt: 'date_of_creation'
}, {
    freezeTableName: true
});

module.exports = Viaje;