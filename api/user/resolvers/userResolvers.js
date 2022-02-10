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
    createUser: (root, user, { dataSources }) => {
      return dataSources.usersAPI.createUser(user);
    },
  },
};

module.exports = userResolvers;
