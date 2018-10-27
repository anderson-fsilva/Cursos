
// Acessando as rotas usando o express.

const express = require('express')
const ProdutoController = require('../Controller/ProdutoController')
const PsaFormController = require('../Controller/PsaFormController')

module.exports = function(app) {
    const produtoRoute = express.Router();        // Adquire uma rota; injeta uma rota.
    const psaFormRoute = express.Router();



    // 'app' é tudo o que foi definido no 'server.js'
    app.use('/api', function(req, res) {            // 'app' vai usar o /api. function recebe requisição (req) e resposta (res), faz uma requisição e manda um resposta.
        res.writeHead(200)                          // Cabeçario do tipo 200.
        res.end('API FUNCIONOU COM SUCESSO')        // Envia essa mensagem.
    })



    // Quando acessamos as rotas no node, conforme mostrado acima, utilizamos o express.


    app.use('/produto', 
        produtoRoute.post('/', ProdutoController.registrarProduto),         // Essa rota é para o post.
        produtoRoute.get('/', ProdutoController.getTodosProdutos),           // Essa rota é para o get.
        produtoRoute.get('/:id_produto', ProdutoController.getUmProduto),
        produtoRoute.delete('/:id_produto', ProdutoController.deleteProduto),
        produtoRoute.put('/:id_produto', ProdutoController.alterarProduto)
    )



    app.use('/psa-form',
        psaFormRoute.post('/', PsaFormController.psaFormRegister)
    )
}