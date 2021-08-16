const Api = require('./Components');
const Model = require('./Model');
class App {
  constructor() {
    this.api = new Api();
    this.model = new Model()
  }
  async run() {
    let pageNotFouned = 0
    let personId = 1;
    let hasNext = true

    while(hasNext) {
      try {
        const people = await this.api.people.getById(personId);
        const parsed = this.model.people.handle(people);
        console.log(parsed);
      } catch (error) {
        if(error.statusCode === 404) {
          hasNext = false;
        }
        else {
          throw error;
        }
      }
      if(pageNotFouned > 3) hasNext = false
      personId++
    }
  }
}

const app = new App()
app.run()