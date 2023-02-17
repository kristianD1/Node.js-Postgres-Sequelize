const { Sequelize } = require('sequelize');

const database = require('../env')

const sequelize = new Sequelize(
    database.database,
    database.user,
    database.password,
    {
        host: database.host, ///hacia donde nos conectamos
        dialect:"postgres", ///tipo base de datos que va acer utilizada
        port: database.port,
        difine:{
            timestamps : false
        }
    }
);

sequelize.sync().then(() => {
    console.log(`Coneccion Satisfactoria a database : [${database.database}]`);
}).catch(err =>{
    console.log(`Coneccion Fallida hacia Postgres : [${err}]`)
})

module.exports = sequelize
