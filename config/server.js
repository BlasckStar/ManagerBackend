//------------Variaveis-----------//
const port = 3004

//interpretador do request
const bodyParser = require('body-parser')

//framework web
const express = require('express')

//criar server
const server = express()

//--------------------funções----------------//

//Trasnformar o bodyParser em interpretador funcional do server
server.use(bodyParser.urlencoded({ extended: true}))
//Caso o request não for urlencoded verificar se é um json
server.use(bodyParser.json())

//Colocar o servidor em uma porta especifica
server.listen(port, function(){
  console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server
