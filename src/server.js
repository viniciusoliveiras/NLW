//   importando dependência 
const express = require('express');
const path = require('path');
const pages = require('./pages.js')

//  iniciando o express
const server = express()

server
    //  utilizando os arquivos estáticos
    .use(express.static('public'))

    //  configurando template engine (arquivos dinâmicos)
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    //  criando rotas da aplicação
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)

//  ligando o servidor
server.listen(5500)