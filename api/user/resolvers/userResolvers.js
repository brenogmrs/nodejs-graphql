const userResolvers = {
  Query: {
    users: (root, args, { dataSources }) => {
      return dataSources.usersAPI.getAllUsers();
    },
    user: (root, { id }, { dataSources }) => {
      return dataSources.usersAPI.getUserById(id);
    },
  },
  Mutation: {
    createUser: async (root, user, { dataSources }) => {
      return dataSources.usersAPI.createUser(user);
    },
    updateUser: async (root, updateData, { dataSources }) => {
      return dataSources.usersAPI.updateUser(updateData);
    },
    deleteUser: async (root, { id }, { dataSources }) => {
      return dataSources.usersAPI.deleteUser(id);
    },
  },
};

module.exports = userResolvers;
