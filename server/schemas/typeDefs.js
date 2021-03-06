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
    question1: String
    question2: String
    question3: String
    question4: String
    question5: String
    image: String
    photos: [Photo]
    userLikes: [User]
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
    users(area: String!, identity: String!, preference: String!): [User]
    user(email: String!): User
    photos(name: String): [Photo]
  }
  type Mutation {
    me: User
    login(email: String!, password: String!): Auth
    addUser(firstName: String!, lastName: String!,email: String!, password: String!, age: Int!, area: String!, identity: String!, preference: String!, question1: String!, question2: String!, question3: String!, question4: String!, question5: String!, image:String!): Auth
    addPhoto(_id:ID!, input: PhotoInput): User
    addLikedFriend(friendId: ID!): User
    updateUser(_id:ID!, firstName:String!, lastName:String!,email:String!,age:Int!,area:String!,identity:String!,preference:String!,image:String!):User
    
  }

  
 
`;

module.exports = typeDefs;