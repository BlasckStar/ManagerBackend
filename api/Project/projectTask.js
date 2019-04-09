const restful = require('node-restful')
const mongoose = restful.mongoose

const taskProjectSchema = new mongoose.Schema({

  name: { type : String, required: true },
  tipo: { type: String, required: true, enum:['Programming', ''] }, // DEFINIR COM O JEAN OS TIPOS
  projeto: { type: String, required: true },  // from representa de que pessoa ou projeto ele parte
  responsavel: { type: String, required: false }, // responsavel pela tarefa
  dataInicio: { type : Date, default: Date.now, required: false },
  descrição: { type: String, required: false },
  pomodoros: { type: Number, min: 0, required: false }, // tipo de dado para calculo de tempo
  status: { type: String, required: false, enum:['Ativa', 'Em espera','Arquivada', 'Finalizada'], default: 'Ativa'},
  area: { type: String, required: false, uppercase: true, enum:['DEV', 'ARTE', 'SOM', 'DOC']}

})

const projectSchema = new mongoose.Schema({

  name: { type: String, required: true },
  responsavel: { type: String, required: true },
  status: { type: String, required: true, uppercase: true, enum: ['ATIVA', 'AGUARDANDO', 'ARQUIVADA', 'FINALIZADA'] },
  areaTecnologica: { type: String, required: true, uppercase: true, emun: ['AR', 'VR', 'XR','IOT', 'GF', 'TA'] },
  //AR: Realidade aumentada, VR: Realidade aumentada, XR: Realidade mista, IOT: Tecnologia das coisas, GF: Gameficação, TA: Tecnologia assistiva
  pomodorosTotais: { type: Number, min: 0, required: false },
  deadLine: { type: Date, default: Date.now, required: false },
  membros: { type: String, required: false },
  premios: { type: String, required: false },
  taskProject: [taskProjectSchema]

})

module.exports = restful.model('projectTask', projectSchema)
