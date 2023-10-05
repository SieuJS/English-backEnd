const secretKey = "123AD23"

const AccountReposity = require('./repository')

class AdminReposity extends AccountReposity {

}

module.exports = new AdminReposity('admin.json');

