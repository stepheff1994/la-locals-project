import gql from 'graphql-tag';

export const QUERY_USER = gql`
{
        users {
            id
            firstName
            age
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






    