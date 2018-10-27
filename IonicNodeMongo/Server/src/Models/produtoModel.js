// Criação do modelo a ser seguido.

const mongoose = require('mongoose')


// Criação do modelo de dados que será enviado ao banco.

var ProductSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, 'Informe o nome do Produto']       // Obriga que esse objeto seja informado; caso não, exibe a mensagem de alerta.
    },
    quantidade: {
        type: Number,
        required: [true, 'Informe a quantidade do Produto']
    },
    valor: {
        type: Number,
        required: [true, 'Informe o valor do Produto']
    },
    marca: {
        type: String,
        required: [true, 'Informe a marca do Produto']
    }
}, { 
    timestamps: true        // Informando que o modelo pode ser utilizado.
})

module.exports = mongoose.model('Produto', ProductSchema)           // Exportando os dados. O nome da tabela no mongo vai ser Produto. 
                                                                    // Será enviado ao banco o ProductSchema.