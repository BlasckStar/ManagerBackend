const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://localhost/db_task', { useNewUrlParser: true })

mongoose.Error.messages.general.required = "O atributo`{PATH}` é obrigatório."
