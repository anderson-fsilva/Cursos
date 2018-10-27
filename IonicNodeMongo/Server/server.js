const express = require('express')
const compression = require('compression')
const bodyParser = require('body-parser')
const logger = require('morgan')
const errorHandler = require('errorhandler')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')

dotenv.load(
    {
        path: '.env'
    }
)

const app = express()

const server = require("http").Server(app)

app.set('port', process.env.PORT || 3000);
app.use(compression())
app.use(logger('dev'))
app.use(cors({       // Informando quem poderá acessar e o que poderá ser acessado.
    origin: '*',        // Qualquer lugar poderá acessar.
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin']   // Poderá fazerá qualquer tipo de requisição.
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))


// Conexão com o Mongo - Bando de Dados

mongoose.connect(process.env.MONGODB_URI)   // se estivessemos executando localmente: ('localhost: 27017')
mongoose.connection.on('error', function() {
    console.log('Falha ao conectar com o Banco de Dados');
    process.exit(1);
})


// Rotas

const router = require('./src/routers/api')(app);


// Iniciando o servidor

server.listen(app.get('port'), function(){
    console.log('Servidor está rodando na porta' + app.get('port') + ' em modo ' + app.get('env'));
});


// Exportando a variável para ser usada em qualquer parte do projeto

module.exports = app;


