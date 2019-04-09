const express = require('express')

module.exports = function(server){

  //Rotas da api
  const router = express.Router()
  server.use('/api', router)

  const personalService = require('../api/Personal/personalService')
  personalService.register(router, '/personalService')

  const projectService = require('../api/Project/projectService')
  projectService.register(router, '/projectService')
}
