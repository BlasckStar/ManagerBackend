const restful = require('node-restful')
const mongoose = restful.mongoose

///////////////////////////////////////////////////////////////
/////--------------------- TASK PESSOAIS -----------------/////
///////////////////////////////////////////////////////////////

const taskPersonalSchema = new mongoose.Schema({

  name: { type : String, required: true },
  tipo: { type: String, required: true, enum:['Pessoal'] },
  dataInicio: { type : Date, default: Date.now, required: false },
  descrição: { type: String, required: false },
  pomodoros: { type: Number, min: 0, required: false }, //tipo de dado para calculo de tempo
  status: { type: String, required: false, enum:['Ativa', 'Em espera','Arquivada', 'Finalizada'], default: 'Ativa'},
  area: { type: String, required: false, uppercase: true, enum:['DEV', 'ARTE', 'SOM', 'DOC']}

})

/////////////////////////////////////////////////////////////////
/////---------------------- STATUS -------------------------/////
/////////////////////////////////////////////////////////////////

const stateSchema = new mongoose.Schema({

  rank: { type: String, required: true, enum: ['Goblin'] },
  dev: { type: Number, required: false, default: 0 },
  art: { type: Number, required: false, default: 0 },
  som: { type: Number, required: false, default: 0 },
  doc: { type: Number, required: false, default: 0 },
  ar: { type: Number, required: false, default: 0 },
  vr: { type: Number, required: false, default: 0 },
  xr: { type: Number, required: false, default: 0 },
  iot: { type: Number, required: false, default: 0 },
  gf: { type: Number, required: false, default: 0 },
  ta: { type: Number, required: false, default: 0 },
  projetos: { type: String, required: false }

})

///////////////////////////////////////////////////////////////////
////----------------------- INFORMAÇÕES INTEGRANTES ----------/////
///////////////////////////////////////////////////////////////////

const personalSchema = new mongoose.Schema({

  nome: { type: String, required: true },
  tipo: { type: String, required: true, enum: ['Tutorial', 'Miniprojeto', 'Ideia', 'Curso'] },
  feiras: { type: String, required: false },
  pomodorosTotais: { type: Number, min: 0, required: false },
  taskPersonal: [taskPersonalSchema],
  ficha: [stateSchema]

})

module.exports = restful.model('PersonalTask', personalSchema) // Exports para uso do server
