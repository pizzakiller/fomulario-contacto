const { Sequelize } = require("sequelize");
type = Sequelize.type

module.exports = (sequelize, type) => {
    return sequelize.define('contacto',{
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: type.STRING,
        empresa: type.STRING,
        correo: type.STRING,
        telefono: type.STRING,
        categoria: type.STRING,
        mensaje: type.TEXT
    })
}