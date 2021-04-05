const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    age: Int
    area: String
    identity: String
    preference: String
    photos: [Photo]
    questions:[Questions]
  }
  type Photo {
    photoId: String
    photoUrl: String
  }
  type Questions{
    _id:ID
    question1: String
    question2: String
    question3: String
    question4: String
    question5: String
  }
  type Auth {
    token: ID
    user: User
  }
  input PhotoInput {
    photoUrl: String
  }
  input QuestionsInput{
    question1: String
    question2: String
    question3: String
    question4: String
    question5: String
  }
  type Query {
    me: User
    users: [User]
    user(email: String!): User
    photos(name: String): [Photo]
    questions(email:String):[Questions]
  }
  type Mutation {
    me: User
    login(email: String!, password: String!): Auth
    addUser(firstName: String!, lastName: String!,email: String!, password: String!, age: Int!, area: String!,identity: String!,identity: String,preference: String!): Auth
    addPhoto(_id:ID!, input: PhotoInput): User
    addQuestions(_id:ID!,input: QuestionsInput):User
  }
 
`;

module.exports = typeDefs;