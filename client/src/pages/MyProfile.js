import React from "react";
import { useQuery } from '@apollo/react-hooks'
<<<<<<< HEAD
import gql from 'graphql-tag'
import {  QUERY_USER} from '../utils/queries'

import { Card, Button } from 'react-bootstrap';

import storage from "../components/Firebase";
import Auth from "../utils/auth";




const User = ({ user: { firstName, age, area, image, preference } }) => (
  
  <Card style={{ width: '45rem'  }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title style = {{fontSize: '30px', color:'blue'}}>{firstName}</Card.Title>
        <Card.Title style = {{fontSize: '20px'}}>Age: </Card.Title>
        <Card.Text style = {{fontSize: '2rem'}}>
          {age}
        </Card.Text>
        <Card.Title style = {{fontSize: '20px', fontWeight:'bolder'}}>Area: </Card.Title>
        <Card.Text style = {{fontSize: '2rem'}}>
            {area}
        </Card.Text>
        <Card.Title style = {{fontSize: '20px', fontWeight:'bolder'}}>Looking for: </Card.Title>
        <Card.Text style = {{fontSize: '2rem'}}>
          {preference}
        </Card.Text>
        <Button style={{width:'20rem', fontSize:'2rem'}}variant="primary">Update Profile</Button>
      </Card.Body>
    </Card>
)



 function MyProfile() {
  
  const { loading, error, data } = useQuery(QUERY_USER,
    {
        variables: {
            email: Auth.getProfile().data.email
        }
    });
const user = data?.user || {};


if (error) return <h1>Something went wrong!</h1>

if (loading) 
    return <h1>Loading...</h1>
else
    return (
        <div style={{marginBlock:'2rem'}}>
            <h1 style={{fontFamily:'fantasy', fontSize:'8rem', color: "gray"}}>MY PROFILE</h1>
            <User user={user}/>
        </div>
    )
}


export default MyProfile


=======
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
>>>>>>> cisco-develop
