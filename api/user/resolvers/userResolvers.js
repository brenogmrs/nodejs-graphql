const userResolvers = {
  Query: {
    users: (root, args, { dataSources }) => {
      return dataSources.usersAPI.getAllUsers();
    },
  },
};

module.exports = userResolvers;
