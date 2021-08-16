class People {
  constructor() {
    this.data
  }
  handle(data) {
    this.data = data
    return {
      ...this.extractName(),
      ...this.extactFilmes()
    }
  }

  extractName() {
    return {
      name: this.data.name
    }
  }
  extactFilmes() {
    return {
      filmes: this.data.films
    }
  }
}

module.exports = People;