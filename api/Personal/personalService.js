const PersonalTask = require('./personalTask')

PersonalTask.methods(['get', 'post', 'put', 'delete'])
PersonalTask.updateOptions({ new: true })

module.exports = PersonalTask
