const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    registryTitle: String
    orders: [Order]
  }

  type Notification {
    _id: ID
    message: String
    registryItem: registryItem
    user: User
    createdAt: Date
    isRead: Boolean
  }

  type Profile {
    _id: ID
    user: User
    brideName: String
    groomName: String
    registryTitle: String
    weddingDate: String
    registryItems: [{product: RegistryItem, quantity: Int}]
  }

  type Registry {
    registryName: String
    registryType: String
    eventDate: String
    registryItems: [{product: RegistryItem, quantity: Int}]
    couple: User
  }

  type RegistryItem {
    _id: ID
    name: String
    price: Number
    registry: Registry
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    registries: [Registries]
    registry(_id: ID!): Registry
    registryItem(_id: ID!): RegistryItem
    user: User
    profile(_id: ID!): Profile
    notification(_id: ID!): Notification
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!, registryTitle: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String, registryTitle: String): User
    updateRegistryItem(_id: ID!, quantity: Int!): RegistryItem
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
