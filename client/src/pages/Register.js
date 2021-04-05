import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap'

import { useMutation } from '@apollo/react-hooks';
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

function Register(props) {

  const [activeStep, steps, handleNext] = useState('');
  
  

  const [formState, setFormState] = useState({ email: '', password: '', first:'' });
  const [addUser] = useMutation(ADD_USER);
  
  const [first, setFirst] = useState(' ');
  const [area, setArea] = useState('');
  const [zipcode, setZipcode] = useState('');
//   const [first, setFirst] = useState(' ');
  const [last, setLast] = useState(' ');
  const [email, setEmail] = useState(' ');
  const [password, setPassword] = useState(' ');
  const [photo, setPhoto] = useState(' ');
  const [identity, setIdentity] = useState(' ');
  const [preference, setPreference] = useState(' ');
  const [question1, setQuestion1] = useState(' ');
  const [question2, setQuestion2] = useState(' ');
  const [question3, setQuestion3] = useState(' ');
  const [question4, setQuestion4] = useState(' ');
  const [question5, setQuestion5] = useState(' ');



  const available_areas = [{ 'zip': ['90210', '90038'], 'area': 'Bev Hills' }, {
    'zip': ['91406', '90029', '91309',
      '91310', '91311', '91313'], 'area': 'The Valley'
  }, { 'zip': ['90401', '90265', '90731'], 'area': 'The Beach' }, { 'zip': ['90018', '90010', '90015',], 'area': 'Mid City/Downtown' }]


  function addressEntered(zip) {

    let found_area = ""

    for (var i = 0; i < available_areas.length; i++) {
      let currentAreaObj = available_areas[i]
      let currentAreaObjectZips = currentAreaObj.zip
      for (var j = 0; j < currentAreaObjectZips.length; j++) {
        let currentZip = currentAreaObjectZips[j]
        console.log('current zip', currentZip)
        console.log('zip', zip)
        if (currentZip === zip) {
          console.log('area matched', currentAreaObj.area)
          found_area = currentAreaObj.area
          break;
        }

      }
    }
    setArea(found_area)
    console.log('area found is ', found_area)


  }
  const handleZipChange = (event) => {
    setZipcode(event.target.value)
    addressEntered(event.target.value)
  }

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleSubmit = async event => {
    event.preventDefault()
    const mutationResponse = await addUser({
      variables: {
        email: formState.email, password: formState.password,
        first: formState.first
        
      }
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
    console.log('submitted')
  };
   
  
  return (
    <div>
      
      <Form.Text><h2><strong>Registration Questions</strong></h2></Form.Text>

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="first" onChange={handleChange}>
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="First Name" value={first} onChange={event => setFirst(event.target.value)} />
        </Form.Group>

        <Form.Group controlId="last" onChange={handleChange}>
          <Form.Label>Last Name</Form.Label >
          <Form.Control type="text" placeholder="Last Name" value={last} onChange={event => setLast(event.target.value)} />
        </Form.Group>

        <Form.Group controlId="email" onChange={handleChange}>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter Email" value={email} onChange={event => setEmail(event.target.value)} />
        </Form.Group>

        <Form.Group controlId="password" onChange={handleChange}>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter Password" value={password} onChange={event => setPassword(event.target.value)} />
        </Form.Group>

        <Form.Group controlId="password" onChange={handleChange}>
          <Form.Label>Age</Form.Label>
          <Form.Control type="password" placeholder="Enter Password" value={password} onChange={event => setPassword(event.target.value)} />
        </Form.Group>        

        <Form.Group controlId="formGridZip">

          <Form.Label>Enter your zipcode</Form.Label>
          <Form.Control type="text" placeholder="90000" value={zipcode} onChange={handleZipChange} />
          <Form.Text><h2><strong>{area}</strong></h2></Form.Text>
        </Form.Group>

        <Form.Group controlId="identity" onChange={handleChange}>
          <Form.Label>How do you identify?</Form.Label>
          <Form.Control as='select' value={identity} onChange={event => setIdentity(event.target.value)} >

            <option>Select</option>
            <option>Man</option>
            <option>Woman</option>
            <option>Non-binary</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="preference" onChange={handleChange}>
          <Form.Label>Interested In:</Form.Label>
          <Form.Control as='select' value={preference} onChange={event => setPreference(event.target.value)} >

            <option>Select</option>
            <option>Man</option>
            <option>Woman</option>
            <option>Non-binary</option>
          </Form.Control>
        </Form.Group>

        
        
        <Button onClick={handleNext} variant="primary" className="mt-5" type="submit">
         {activeStep ===steps.length ? "Finish": "Next"}
        </Button>
        
        
        


        <Button variant="primary" className="mt-5" type="submit">
          Submit
  </Button>



      </Form>

      
    </div>
  )
}



export default Register