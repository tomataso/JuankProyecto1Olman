'use strict';

//para que se conecte a la base de datos de mongo, necesito de mongoose
const MensajeModel = require('./mensajes.model');


module.exports.listar = function(req, res){
    MensajeModel.find().then(
        function(mensajes){
            res.send(mensajes);
        });
};


module.exports.buscarProyecto = function(req, res){
    MensajeModel.find(req.body.idProyecto).then(
        function(mensaje){
            res.send(mensaje);
        });
};

