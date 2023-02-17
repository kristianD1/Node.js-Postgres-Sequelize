const router = require("express").Router();
const asignaturaController = require('../controller/asignaturaController.js');

router.get('/asignaturas', asignaturaController.allAsignatures)
router.post('/asignatura', asignaturaController.createAsignature)
router.get('/asignatura/:id_asignatura', asignaturaController.myAsignatures)
router.put('/asignatura/:id_asignatura', asignaturaController.UpdateAsignature)
router.delete('/asignaturas/:id_asignatura', asignaturaController.DeleteAsignature)

module.exports = router