const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    ping: String
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }

  type Auth {
    token: ID!
    user: User
  }
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }
`;
module.exports = typeDefs;
