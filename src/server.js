//   importando dependência 
const express = require('express');
const path = require('path')

//  iniciando o express
const server = express()

server
//  utilizando os arquivos estátticos
.use(express.static('public'))

//  criando rota
.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

//  ligando o servidor
server.listen(5500)