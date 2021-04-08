import gql from 'graphql-tag';

export const LOGIN = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
    }
  }
}
`;


export const ADD_USER = gql`
mutation addUser($firstName:String! $lastName:String!,$password:String!, $email:String!,$age:Int!,$area:String!,$identity:String!,$preference:String!,$question1:String!,$question2:String!,$question3:String!,$question4:String!,$question5:String!){
  addUser(firstName:$firstName, lastName:$lastName,password:$password, email:$email,age:$age,area:$area,identity:$identity,preference:$preference,question1:$question1,question2:$question2,question3:$question3,question4:$question4,question5:$question5) {
    token
    user{
       _id
  }
 }  
}
`;

export const ADD_MATCH = gql`
  mutation addLikedFriend($id: ID!) {
    addLikedFriend(friendId: $id) {
      _id
      firstName
      lastName
      userLikes {
        _id
        firstName
        lastName
      }
    }
  }
`;