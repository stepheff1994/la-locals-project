import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import {Card } from 'react-bootstrap';
import { Redirect, useParams } from 'react-router-dom';
import { QUERY_ME} from '../utils/queries'
import Auth from '../utils/auth';


function MyProfile() {
    const { firstName: userParam } = useParams();
    const { data } = useQuery(QUERY_ME);
    const userData = data?.me || {};

    // redirect to personal profile page if username is the logged-in user's
    if (Auth.loggedIn() && Auth.getProfile().data._id === userParam) {
        return <Redirect to="/Myprofile" />;
    }
    // if data isn't here yet, say so
    if (!userData) {
        return <h2>LOADING...</h2>;
    }
    if (!userData?._id) {
        return (
            <h4>
                You need to be logged in to see this page. Use the navigation links above to sign up or log in!
            </h4>
        );
    }
        return (
          <Card key={userData._id} border='dark'>
            {userData.lastName ? <Card.Img src={userData.lastName} alt={`The cover for ${userData.lastName}`} variant='top' /> : null}
            <Card.Body>
              <Card.Title>{userData.firstName}</Card.Title>
              <p className='small'>Authors: {userData.question1}</p>
              <Card.Text>{userData.question2}</Card.Text>
            </Card.Body>
          </Card>
        );
}

export default MyProfile;