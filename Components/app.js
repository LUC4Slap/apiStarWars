const rq = require('request-promise')

class Request {
  constructor({server, request_path, service_path, exptra_path}){
    this.server = server
    this.request_path = request_path || '/api'
    this.service_path = service_path
    this.exptra_path = exptra_path
  }

  async execut_request(requestMethod, qs=null, body=null) {
    const url = this.server + this.request_path + this.exptra_path
    const params = {
      method: requestMethod,
      url,
      qs, 
      body,
      json: true
    }
    this.exptra_path = ''
    return await rq(params)
  }
}

class People extends Request {
  constructor(credentias) {
    super(credentias)
    this.request_path = '/people'
  }

  async getById(id = null) {
    if(!id) throw new Error('Id is require')
    this.exptra_path = '/' + id
    return await this.execut_request('GET')
  }
}

module.exports = {
  People
}