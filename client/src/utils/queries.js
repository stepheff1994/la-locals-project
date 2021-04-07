import gql from 'graphql-tag';

export const QUERY_USER = gql`
{
  user 
}
`;

export const GET_USER_PROFILE = gql`
  query getUserProfile($age: Int!, $preference: String!, $identity: String! ) {
    users{
      id
      firstName
      photos {
        photoId
        photoUrl
      }
      
    }
  }`






    