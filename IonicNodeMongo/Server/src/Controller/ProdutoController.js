// Esse será o responsável por toda a regra de negócio, como a manipulação dos dados.

const mongoose = require('mongoose')                    // Importanto o mongoose.
const Produto = require('../Models/produtoModel')       // Importanto o produto.



// Criando primeiro método, onde iremos requirir (req), mandar uma resposta (res) e pular para o próximo (next).
exports.registrarProduto = function(req, res, next) {
   
    // Criando objeto Produto a partir da requição.
    Produto.create({
        
        nome: req.body.nome,                // O primeiro nome é o do modelo (produtoModel) e o segundo é o que vem no corpo da requisição
        quantidade: req.body.quantidade,
        valor: req.body.valor,
        marca: req.body.marca

    }, function(err, produtos) {

        if(err)
            return res.status(500).send({ message: 'Erro ao criar Produto' })      // Retorna o status da página.
        
        return res.status(200).send( {
            message: 'Produto criado com sucesso!',
            Produto: produtos
        })
    })
}




exports.getTodosProdutos = function(req, res, next) {
   
    var query = Produto.find()                  // Buscando todos os registros de produtos.

    query.exec( function (err, produtos) {      // Executando o resultado da busca.

        if(err)
            return res.status(500).send({
                message: 'Erro ao adquirir todos os produtos!',
                erro: err
            })

        return res.status(200).json(produtos) 
    })
}



exports.getUmProduto = function(req, res, next) {
    const _idProduto = req.params.id_produto;

    Produto.findById(_idProduto, function(err, produtos) {

        if(err)
            return res.status(500).send({
                message: 'Erro ao adquirir o produto',
                erro: err
            })

        return res.status(200).send(produtos)
    })
}



exports.deleteProduto = function(req, res, next) {
    const _idProduto = req.params.id_produto;

    // Adquirindo o produto.
    Produto.findById(_idProduto, function(err) {

        if(err)
            return res.status(500).send({
                message: 'Erro ao deletar produto!',
                erro: err
            })

        // Remove o produto, onde o produto tem que ser exatamente igual ao id do produto. Pego só se tiver algum erro.
        Produto.remove({_id: _idProduto}, function(err) {
            // Se houver algum erro, exibe uma mensagem de erro.
            if(err)
                return res.status(500).send({
                    message: 'Erro ao deletar produto!',
                    erro: err
                })

            // Caso não, informa que a deleção ocorreu com sucesso.
            return res.status(200).send({ message: "Produto foi excluído com sucesso!" })

        }) 
    })
}



exports.alterarProduto = function(req, res, next) {
    const _idProduto = req.params.id_produto

    const _nome = req.body.nome
    const _valor = req.body.valor
    const _quantidade = req.body.quantidade
    const _marca = req.body.marca

    // Procura um único produto.
    Produto.findById({ _id: _idProduto }, function(err, produtos) {

        // Caso dê erro.
        if(err)
            return res.status(500).send({
                message: 'Erro procurar um único produto',
                erro: err
            })
        
        // Atualiza valores dos atributos do produto.
         produtos.set({
             nome: _nome,
             quantidade: _quantidade,
             valor: _valor,
             marca: _marca
         })

         // Salva alterações no produto.
         produtos.save(function(err, produtoAlterado) {

            if(err)
                return res.status(500).send({
                    message: 'Erro ao atualizar o produto',
                    erro: err
                })

            return res.status(200).send({
                message: 'Produto atualizado com sucesso',
                Produto: produtoAlterado
            })
         })
    })
}