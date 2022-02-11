const { GraphQLScalarType } = require('graphql');

const userResolvers = {
  RolesType: {
    ESTUDANTE: 'ESTUDANTE',
    DOCENTE: 'DOCENTE',
    CORDENACAO: 'CORDENACAO',
  },
  DateTime: new GraphQLScalarType({
    name: 'DateTime',
    description: 'date time string in ISO-8601 format',
    serialize: (value) => value.toISOString(),
    parseValue: (value) => new Date(value),
    parseLiteral: (ast) => new Date(ast.value),
  }),
  Query: {
    users: (root, args, { dataSources }) => {
      return dataSources.usersAPI.getAllUsers();
    },
    user: (root, { id }, { dataSources }) => {
      return dataSources.usersAPI.getUserById(id);
    },
  },
  Mutation: {
    createUser: async (root, { user }, { dataSources }) => {
      return dataSources.usersAPI.createUser(user);
    },
    updateUser: async (root, { user }, { dataSources }) => {
      return dataSources.usersAPI.updateUser(user);
    },
    deleteUser: async (root, { id }, { dataSources }) => {
      return dataSources.usersAPI.deleteUser(id);
    },
  },
};

module.exports = userResolvers;
