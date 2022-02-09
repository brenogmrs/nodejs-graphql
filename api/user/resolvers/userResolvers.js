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
    firstUser: () => {
      return usersArray[0];
    },
  },
};

module.exports = userResolvers;
