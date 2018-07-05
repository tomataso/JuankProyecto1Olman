'use strict';
//para que se conecte a la base de datos de mongo, necesito de mongoose
const profesorsModel = require('./profesors.model');

module.exports.registrar = function(req, res){
    let nuevoProfesor = new profesorsModel({
        
        NombreProfesor : req.body.NombreProfesor,
        ApellidoProfesor : req.body.ApellidoProfesor,
        CedulaProfesor : req.body.CedulaProfesor,
        TelefonoProfesor : req.body.TelefonoProfesor,
        GradoAcademicoProfesor : req.body.GradoAcademicoProfesor,
        CorreoElectronicoProfesor : req.body.CorreoElectronicoProfesor, 
        
        ProvinciaProfesor: req.body.ProvinciaProfesor,
        CantonProfesor: req.body.CantonProfesor,
        DistritoProfesor: req.body.DistritoProfesor,
        DireccionExactaProfesor: req.body.DireccionExactaProfesor,
        AnnosExperienciaProfesor: req.body.AnnosExperienciaProfesor,
        CursosImpartidosProfesor: req.body.ursosImpartidosProfesor

    });

    nuevoProfesor.save(function(error){
        if(error){
            res.json({success : false, msg : 'No se pudo registrar el profesor, ha ocurrido un error' + error});
        }else{
            res.json({success : true, msg : 'El profesor se registró con éxito'});
        }

    });

};
