import React from "react";
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import {  QUERY_USER} from '../utils/queries'

import { Card, Button } from 'react-bootstrap';

import storage from "../components/Firebase";
import Auth from "../utils/auth";




const User = ({ user: { firstName, age, area, image, preference } }) => (
  <div  style = {{position: 'relative', minHeight: '100vh'}}>
  <Card style={{ width: '50rem' , height: 'auto'  }}>
      <Card.Img variant="top" src={image} height="300" width="400" />
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
        <Button style={{width:'15rem', fontSize:'1rem'}}variant="primary">Update Profile</Button>
      </Card.Body>
    </Card>
    

    
        </div>
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


