const { Model, DataTypes} = require("sequelize");
const db = require('../config/connetion');
const moment = require('moment-timezone');

class Asignatura extends Model {}

Asignatura.init(
    {
        id_asignatura: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        nombre_asignatura: DataTypes.STRING,
        description: DataTypes.STRING,

        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: moment.utc().format("YYYY-MMM-DD HH:mm:ss"),
            field: "Creado"
        },

        updateAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: moment.utc().format("YYYY-MMM-DD HH:mm:ss"),
            field: "Actualizado"
        },
    },
    {
        db,
        sequelize: db,
        modelName:"Asignaturas",
        tableName: "asignaturas"
    },
)

module.exports = Asignatura;