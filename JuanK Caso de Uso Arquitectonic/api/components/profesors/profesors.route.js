'use strict';
const express = require('express');
const router = express.Router();
const profesorsApi = require('./profesors.api');


router.route('/registrarProfesor')
    .post(function(req, res){
        profesorsApi.registrar(req, res);
});

module.exports = router;