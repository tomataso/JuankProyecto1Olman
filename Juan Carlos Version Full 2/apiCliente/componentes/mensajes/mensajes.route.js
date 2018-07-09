'use strict';

const express = require('express');
const router = express.Router();
const mensaje = require('./mensajes.api');



router.route('/listarMensajes')
    .get(function(req, res){
    mensaje.listar(req, res);
});

module.exports = router;