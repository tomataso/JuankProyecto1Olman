'use strict';

const express = require('express');
const router = express.Router();
const parametros = require('./parametros.api');


router.route('/registrarParametros')
    .post(function(req, res){
    parametros.registrar(req, res);
});




router.route('/listarParametros')
    .get(function(req, res){
        parametros.listar(req, res);
});




module.exports = router;