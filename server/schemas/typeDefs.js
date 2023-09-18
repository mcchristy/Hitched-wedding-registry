const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    registryTitle: String
  }
  type Profile {
    _id: ID
    user: User
    brideName: String
    groomName: String
    registryTitle: String
    weddingDate: String
  }
  type Query {
    user: User
    profile: Profile
    }
`;

module.exports = typeDefs;
