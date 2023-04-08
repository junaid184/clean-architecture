let studentsDb = require('../../../data-access/students-db')

let students = module.exports = {}

students.index = (req, res, next) => {
    console.log(req.body);
    studentsDb.listStudents()
        .then(data => {
            console.log(data);
            res.send(data)
        }).catch((e) => {
            console.log(e);
        })
}

students.show = (req, res, next) => {
    studentsDb.findStudent('id', req.params.id)
        .then(data => {
            res.send(data)
        })
}

students.create = (req, res, next) => {
    studentsDb.addStudent(req.body)
        .then(data => {
            res.sendStatus(200).send(data)
        })
        .catch(next)
}