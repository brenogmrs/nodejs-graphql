const usersArray = [
  {
    name: 'Breno',
    active: true,
  },
  {
    name: 'Junio',
    active: false,
  },
];

const userResolvers = {
  Query: {
    users: () => {
      return usersArray;
    },
  },
};

module.exports = userResolvers;
