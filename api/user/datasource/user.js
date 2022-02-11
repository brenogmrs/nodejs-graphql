const { RESTDataSource } = require('apollo-datasource-rest');

class UsersAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3000';
    this.customResponse = {
      code: 200,
      message: 'Success!',
    };
  }

  async getAllUsers() {
    const users = await this.get('/users');

    return users.map(async (user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      role: await this.get(`/roles/${user.role}`),
    }));
  }

  async getUserById(id) {
    const user = await this.get(`/users/${id}`);
    user.role = await this.get(`/roles/${user.role}`);

    return user;
  }

  async createUser(user) {
    const users = await this.get('/users');
    user.id = users.length + 1;
    const [role] = await this.get(`/roles?type=${user.role}`);

    await this.post('/users', { ...user, role: role.id });
    return {
      ...user,
      role: role,
    };
  }

  async updateUser(updateData) {
    const [role] = await this.get(`/roles?type=${updateData.user.role}`);

    await this.put(`/users/${id}`, {
      ...updateData.user,
      role: role.id,
    });

    return {
      ...this.customResponse.code,
      user: {
        ...updateData.user,
        role: role,
      },
    };
  }

  async deleteUser(id) {
    await this.delete(`/users/${id}`);
    return {
      code: 204,
    };
  }
}

module.exports = UsersAPI;
