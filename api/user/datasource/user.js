const { RESTDataSource } = require('apollo-datasource-rest');

class UsersAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3000';
  }

  async getAllUsers() {
    return this.get('/users');
  }
}

module.exports = UsersAPI;