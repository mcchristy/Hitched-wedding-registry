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
=======
//     profile(_id: ID!): Profile
//     notification(_id: ID!): Notification
//     checkout(products: [ID]!): Checkout
//   }

//   type Mutation {
//     addUser(firstName: String!, lastName: String!, email: String!, password: String!, registryTitle: String!): Auth
//     addOrder(products: [ID]!): Order
//     updateUser(firstName: String, lastName: String, email: String, password: String, registryTitle: String): User
//     updateRegistryItem(_id: ID!, quantity: Int!): RegistryItem
//     login(email: String!, password: String!): Auth
// >>>>>>> main
//   }
  
`;

module.exports = typeDefs;
