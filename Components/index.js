const component = require('./app')

class Client {
  constructor() {
    const credentias = {
      server: 'https://swapi.dev'
    }
    this.people = new component.People(credentias)
  }
}

module.exports = Client