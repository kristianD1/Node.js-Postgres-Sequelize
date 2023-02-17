const Asignatura = require("./Asignaturas.js");
const Tema = require("./Temas.js");

/////////// Relacionamos tablas \\\\\\\\\\\\\\\\\\\\\\\\\\\

Tema.belongsTo(Asignatura,{ foreignkey: "asignatura_id"})
Asignatura.hasMany(Tema, { foreignKey: "asignatura_id"})

module.exports = {
    Asignatura,
    Tema
};

