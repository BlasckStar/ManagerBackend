const ProjectTask = require('./projectTask')

ProjectTask.methods(['get', 'post', 'put', 'delete'])
ProjectTask.updateOptions({ new: true })

module.exports = ProjectTask
