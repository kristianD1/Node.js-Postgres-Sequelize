const EstructuraApi = require("../helpers/responseApi.js")
const associations = require("../models/Associations.js")
const Asignatura = require("../models/Asignaturas.js")

exports.allAsignatures = async (req, res) => {
    let estructuraApi = new EstructuraApi();

    const asignaturas = await Asignatura.findAll();
    if (asignaturas.length > 0) {
        estructuraApi.setResultado(asignaturas);
    }else{
        estructuraApi.setEstado(404, "info", "No se encontraron asignaturas registradas")
    }
    res.json(estructuraApi.toResponse());
}

exports.createAsignature = async (req, res) => {
    let estructuraApi = new EstructuraApi ()
    
    let reqAsignatura = req.body;

    await Asignatura.create(reqAsignatura).then((succes) => {
        estructuraApi.setResultado(succes)
    })
    .catch((error) => {
        estructuraApi.setEstado(
            error.parent.code || error,
            "Error al registrar la Asignatura",
            error.parent.detail || error
        );
    })
    res.json(estructuraApi.toResponse());
};

exports.myAsignatures = async (req, res) => {
    let estructuraApi = new EstructuraApi();

    const id_asignatura = req.params.id_asignatura;
    const asignatura = await Asignatura.findOne({
        where: {
            id_asignatura: id_asignatura,
        }
    });
    if (asignatura) {
        estructuraApi.setResultado(asignatura)
    }else{
        estructuraApi.setEstado(404, "info", "No existe la asignatura")
    }
    res.json(estructuraApi.toResponse());

};

exports.UpdateAsignature = async (req, res) => {
    let estructuraApi = new EstructuraApi();
    let id_asignatura = req.params.id_asignatura;
    let reqAsignatura = req.body;

    await Asignatura.update(reqAsignatura, {
        where: {
            id_asignatura: id_asignatura,
        },
    }).then((succ) => {
        if (succ[0] > 0) {
            estructuraApi.setResultado(reqAsignatura);
        } else { 
            estructuraApi.setEstado(reqAsignatura);
        }
    })
    .catch((err) => {
        estructuraApi.setEstado(err.parent || err, "error", err.parent.detail || err);
    });
    res.json(estructuraApi.toResponse());
};

exports.DeleteAsignature = async (req, res) => {
    let estructuraApi = new EstructuraApi();
    let ad_asignatura = req.params.id_asignatura;
    await Asignatura.destroy({
        where: {
            id_asignatura: id_asignatura
        } 
    }).then( success => {
        if (success != 0) {
            
        } else {
            estructuraApi.setEstado(404, 'info', 'NO EXISTE ESTA ASIGNATURA')
        }
    }).catch(err => {
        estructuraApi.setEstado(err.parent.code, "error", err.parent.detail)
    })
    res.json(estructuraApi.toResponse())
}