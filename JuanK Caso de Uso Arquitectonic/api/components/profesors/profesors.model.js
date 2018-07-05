'use strict';
let mongoose = require('mongoose');

let profesorSchema = new mongoose.Schema({
    NombreProfesor : {type : String,  required : true},
    ApellidoProfesor : {type : String,  required : true},
    CedulaProfesor : {type : String, unique : true, required: true},
    TelefonoProfesor : {type : String, required : true},
    GradoAcademicoProfesor: {type : String, required : true},
    CorreoElectronicoProfesor : {type : String, unique : true, required : true},

    ProvinciaProfesor: {type : String, required : true},
    CantonProfesor : {type : String, required : true},
    DistritoProfesor: {type : String, required : true},
    DireccionExactaProfesor: {type : String, required : true},
    AnnosExperienciaProfesor: {type : String, required : true},
    CursosImpartidosProfesor: {type : String, required : true}
});

module.exports = mongoose.model('profesor', profesorSchema);