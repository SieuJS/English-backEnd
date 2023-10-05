const AccountReposity = require('./repository')

class StudentReposity extends AccountReposity {

}

module.exports = new StudentReposity('student.json');