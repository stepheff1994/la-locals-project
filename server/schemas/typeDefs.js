const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    name: String
    email: String
    age: Int
    photos: [Photo]
  }
  type Photo {
    photoId: String
    photoUrl: String
  }
  type Auth {
    token: ID
    user: User
  }
  input PhotoInput {
    photoUrl: String
  }
  type Query {
    me: User
    users: [User]
    user(name: String!): User
    photos(name: String): [Photo]
  }
  type Mutation {
    me: User
    login(email: String!, password: String!): Auth
    addUser(name: String!, email: String!, password: String!, age: Int!): Auth
    addPhoto(_id:ID!, input: PhotoInput): User
  }
 
`;

module.exports = typeDefs;