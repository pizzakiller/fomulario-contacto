const Sequelize  = require('sequelize')
const contactoModel = require('./models/contactoModel')

const sequelize  = new Sequelize('empresa', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
})

const Contacto = contactoModel(sequelize, Sequelize)
sequelize.sync({ force: false })
 .then(() => {
     console.log('se sincronizaron las tablas')
 } ) 

 module.exports={
     Contacto
 }