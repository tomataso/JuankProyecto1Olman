'use strict';
let mongoose = require('mongoose');

let MensajeSchema = new mongoose.Schema({

    Fecha : {type : String, required : true},
    Usuario : {type : String, required : true},
    Asunto : {type : String,  required: true},

    
});

module.exports = mongoose.model('Mensaje', MensajeSchema);