//   importando dependência 
const express = require('express');
const path = require('path');
const pages = require('./pages.js')

//  iniciando o express
const server = express()
server
    //  utilizando body do req
    .use(express.urlencoded({ extended: true }))
    
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
    .post('/save-orphanage', pages.saveOrphanage)

    //  ligando o servidor
    .listen(5500)