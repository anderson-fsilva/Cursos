
/*
    MODEL LIRAA FORM
*/

const mongoose = require('mongoose')
var Schema = mongoose.Schema;



// Criando schema para o formulário Liraa.

var LiraaFormSchema = new Schema({

    places: {
        type: String,
        required: [true, 'Informe o logradouro corretamente']       // Obriga que seja informado o endereço.
    },

    immobile: {
        tpImmobile: String,
        dateVisit: String
    },

    vtAedes: {
        A1: String,
        A2: String,
        B: String,
        C: String,
        D1: String,
        D2: String,
        E: String

    },

    depositsRemoved: {
        type: String
    },

    larvicides: {
        BTiG_gramas: String,
        BTiG_depositos: String,
        BTiWDg_gramas: String,
        BTiWDg_depositos: String,
    }

})

module.exports = mongoose.model('LiraaForm', LiraaFormSchema)