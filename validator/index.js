let { studentValidator } = require('./joi')
let validator = {
    studentValidator: (payload) => studentValidator(payload),
}

module.exports = validator
