
const mongoose = require('mongoose')
const PsaForm = require('../Models/psaFormModel')


// Criando primeiro método, onde iremos requirir (req), mandar uma resposta (res) e pular para o próximo (next).
exports.psaFormRegister = function(req, res, next) {
   
    // Criando objeto Produto a partir da requisição.
    PsaForm.create({
        
        places: req.body.places,
        immobile: req.body.immobile,
        trash: req.body.trash,
        vtAedes: req.body.vtAedes,
        vtCulex: req.body.vtCulex,
        ovitraps: req.body.ovitraps,
        larvicides: req.body.larvicides

    }, function(err, psaForms) {

        if(err)
            return res.status(500).send({ message: 'Erro ao registrar formulário psa' })      // Retorna o status da página.
        
        return res.status(200).send( {
            message: 'Formulário psa registrado com sucesso!',
            PsaForm: psaForms
        })
    })
}



