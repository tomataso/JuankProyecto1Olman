'use strict';

//para que se conecte a la base de datos de mongo, necesito de mongoose
const ProfesorModel = require('./profesores.model');

module.exports.registrar = function(req, res){

    let nuevoProfesor = new ProfesorModel({

        Nombre : req.body.Nombre,
        Apellido: req.body.Apellido,
        Cedula : req.body.Cedula,
        Telefono : req.body.Telefono,
        Correo : req.body.Correo,

        Provincia: req.body.Provincia,
        Canton :  req.body.Canton,
        Distrito :  req.body.Distrito,
        DireccionExacta : req.body.DireccionExacta,

        GAcademico : req.body.GAcademico,
        Aexperiencia :  req.body.Aexperiencia,
        CImpartidos :  req.body.CImpartidos,

        TipoProfesor : req.body.TipoProfesro,
        Desactivado : req.body.Desactivado,

        
    });

    nuevoProfesor.save(function(error){
        if(error){
            res.json({success : false, msg : 'No se pudo registrar al profesor, ha ocurrido un error' + error});
        }else{
            res.json({success : true, msg : 'El profesor se registró con éxito'});
        }

    });

};

module.exports.listar = function(req, res){
    ProfesorModel.find().then(
        function(profesores){
            res.send(profesores);
        });
};

module.exports.desactivar = function(req, res){
    
    ProfesorModel.update(
        {_id: req.body._id}, 
        {
            Desactivado : req.body.Desactivado
        },
        function(error){
            if(error){
                res.json({success : false, msg : 'No se pudo eliminar el profesor, ocurrió el siguiente error' + error});
            }else{
                res.json({success : true, msg : 'Se eliminó el profesor con éxito'});
            }
        }
    )
};

module.exports.buscarProyecto = function(req, res){
    ProfesorModel.find(req.body.Nombre).then(
        function(profesor){
            res.send(profesor);
        });
};