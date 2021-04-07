import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
// import {ADD_USER} from '../utils/mutations';
import {makeStyles} from '@material-ui/core/styles';


function Register(props) {
 

  return (
    <div>
      
      <Form.Text className="text-white"><h2><strong>Registration Questions</strong></h2></Form.Text>

      <Form className="text-white" onSubmit={props.handleSubmit}>
        <Form.Group controlId="first">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="First Name" value={props.first} onChange={event => props.setFirst(event.target.value)} />
        </Form.Group>

        <Form.Group controlId="last">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Last Name" value={props.last} onChange={event => props.setLast(event.target.value)} />
        </Form.Group>

        <Form.Group controlId="age">
          <Form.Label>Age</Form.Label>
          <Form.Control type="text" placeholder="Enter Age (must be at least 18yrs)" value={props.age} onChange={event => props.setAge(event.target.value)} />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter Email" value={props.email} onChange={event => props.setEmail(event.target.value)} />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter Password" value={props.password} onChange={event => props.setPassword(event.target.value)} />
        </Form.Group>

        <Form.Group controlId="ConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Re-enter Password" value={props.ConfirmPassword} onChange={event => props.setConfirmPassword(event.target.value)} />
        </Form.Group>


        <Form.Group controlId="area">

          <Form.Label>Enter your zipcode</Form.Label>
          <Form.Control type="text" placeholder="90000" value={props.zipcode} onChange={props.handleZipChange} />
          <Button><h2><strong>{props.area}</strong></h2></Button>
        </Form.Group>

        <Form.Group controlId="identity">
          <Form.Label>How do you identify?</Form.Label>
          <Form.Control as='select' value={props.identity} onChange={event => props.setIdentity(event.target.value)} >

            <option>Select</option>
            <option>Man</option>
            <option>Woman</option>
            <option>Non-Binary</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="preference">
          <Form.Label>Interested In:</Form.Label>
          <Form.Control as='select' value={props.preference} onChange={event => props.setPreference(event.target.value)} >

            <option>Select</option>
            <option>Men</option>
            <option>Women</option>
            <option>Non-Binary</option>
          </Form.Control>
        </Form.Group>

        






      </Form>

      
    </div>
  )
}



export default Register