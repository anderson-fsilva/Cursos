/*
    Controller Liraa Form
*/


const mongoose = require('mongoose')
const LiraaForm = require('../Models/liraaFormModel')



exports.liraaFormRegister = function(req, res, next) {

    LiraaForm.create({

        places: req.body.places,
        immobile: req.body.immobile,
        vtAedes: req.body.vtAedes,
        depositsRemoved: req.body.depositsRemoved,
        larvicides: req.body.larvicides

    }, function(err, liraaForms) {

        if(err) {
            return res.status(500).send({ message: 'Erro ao registrar formulário Liraa' })      // Retorna o status da página.
        }

        return res.status(200).send({
            message: 'Formulário liraa registrado com sucesso.',
            LiraaForm: liraaForms
        })
    })
}