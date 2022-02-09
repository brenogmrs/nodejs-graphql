const userResolvers = {
  Query: {
    users: (root, args, { dataSources }) => {
      return dataSources.usersAPI.getAllUsers();
    },
    user: (root, { id }, { dataSources }) => {
      return dataSources.usersAPI.getUserById(id);
    },
  },
};

module.exports = userResolvers;
