const { ApolloServer } = require('apollo-server');
const userSchema = require('./user/schema/user.graphql');

const users = [
  {
    name: 'Breno',
    active: true,
  },
  {
    name: 'Junio',
    active: false,
  },
];

const typeDefs = [userSchema];
const resolvers = {};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`server running at ${url}`);
});
