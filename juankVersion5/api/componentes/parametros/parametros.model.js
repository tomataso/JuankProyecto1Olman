'use strict';
let mongoose = require('mongoose');

let ParametrosSchema = new mongoose.Schema({

    Periodo : {type : String, required : true},
    MaxHorasxCuatri : {type : number, required : true},
    PorcentajeBecaxHoraT : {type : number, unique : true, required: true},


    
});

module.exports = mongoose.model('Parametros', ParametrosSchema);