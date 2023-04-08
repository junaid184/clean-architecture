let buildMakeStudent = function (studentValidator) {
    return ({
        name,
        age,
        grade,
        prefect = 'false'
    } = {}) => {
        console.log(name, age, grade, prefect);
        let { error } = studentValidator({ name, age, grade, prefect })
        if (error) throw new Error(error)

        return {
            getName: () => name,
            getAge: () => age,
            getGrade: () => grade,
            isPrefect: () => prefect
        }
    }
}

module.exports = buildMakeStudent