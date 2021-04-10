import gql from 'graphql-tag';

export const QUERY_USER = gql`
  query user($email: String!) {
    user(email: $email) {
      _id
      firstName
      lastName
      email
      age
      area
      identity
      preference
      question1
      question2
      question3
      question4
      question5
      image
      userLikes {
        _id
        firstName
        lastName
        }
      }
    }
  
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      firstName
      lastName
      email
      age
      area
      identity
      preference
      question1
      question2
      question3
      question4
      question5
      userLikes {
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
  }
`;

export const QUERY_MATCHES = gql`
  query user($area: String!, $identity: String!, $preference: String!) {
    user(area: $area, identity: $identity, preference: $preference) {
      _id
      firstName
      lastName
      area
      identity
      preference
      userLikes {
        _id
        firstName
        lastName
        }
      }
    }
  
`;

export const GET_USER_PROFILE = gql`
  query user($firstName: String! ) {
    user(firstName: $firstName){
      id
      firstName
      photos {
        photoId
        photoUrl
      }
      
    }
  }`






    