let {
    listStudents,
    findStudent,
    findStudentsBy,
    addStudent,
    deleteStudent,
    dropAll
} = require('./pg/index')


let studentsDb = {
    listStudents,
    findStudent,
    findStudentsBy,
    addStudent,
    deleteStudent,
    dropAll
}

module.exports = studentsDb