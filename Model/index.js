const People = require('./People')
class Model {
  constructor() {
    this.people = new People()
  }
}

module.exports = Model