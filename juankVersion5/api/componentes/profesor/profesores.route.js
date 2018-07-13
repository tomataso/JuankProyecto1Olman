'use strict';

const express = require('express');
const router = express.Router();
const profesor = require('./profesores.api');


router.route('/registrarProfesores')
    .post(function(req, res){
    profesor.registrar(req, res);
});




router.route('/listarProfesores')
    .get(function(req, res){
        proyecto.listar(req, res);
});


router.route('/buscarProfesor')
    .get(function(req, res){
        proyecto.buscarProyecto(req, res);
});

router.route('/desactivarProfesor')
    .post(function(req, res){
        proyecto.desactivar(req, res);
});

module.exports = router;