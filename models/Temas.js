const {Model, DataTypes} = require("sequelize");
const db = require("../config/connetion");
const moment = require("moment-timezone");

class Tema extends Model {}

Tema.init(
    {
        id_tema: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        nombre_tema: DataTypes.STRING,
        descripcion_tema: DataTypes.STRING,

        asignatura_id: {
            type: DataTypes.INTEGER,
            foreingKey: true,
        },

        createAt: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: moment.utc().format("YYYY-MM-DD HH:mm:ss"),
            field: "Creado"
        },

        updateAt: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: moment.utc().format("YYYY-MM-DD HH:mm:ss"),
            field: "Actualizado"
        }
    },
    {
        db,
        sequelize: db,
        modelName: "Tema",
        tableName: "temas",
    }
)

module.exports = Tema