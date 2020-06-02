const Sequelize = require('sequelize');
/*database*/
const db = require('../config/database');
const Testimonial = db.define('Testimoniales', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nombre: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    },
}, {
    tableName: 'testimoniales', // this will define the table's name
    timestamps: false // this will deactivate the timestamp columns
}, {
    updatedAt: 'last_update',
    createdAt: 'date_of_creation'
}, {
    freezeTableName: true
});

module.exports = Testimonial;