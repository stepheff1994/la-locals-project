import React from 'react';
   import {Form, Button, Badge} from 'react-bootstrap';

const LeftSide = () => {
    return (
        <div>
            <br/>
            <h1><Badge variant="secondary">Welcome Back! Please Login.</Badge></h1>
            <Form style={{width:"100%", marginLeft:"0%", marginTop:"10%"}}>
                <Form.Group >
                    <Form.Label style={{fontWeight:"200%", color: "blue", fontSize:"30px"}}>Enter your email</Form.Label>
                    <Form.Control style={{height:"50px"}}type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group >
                    <Form.Label style={{fontWeight:"200%", color: "blue", fontSize:"30px"}}>Enter your password</Form.Label>
                    <Form.Control style={{height:"50px"}} type="password" placeholder="Enter your password" />
                </Form.Group>
                <Button style={{height:"50px", width: "20rem", fontSize:"20px"}}type="submit">Submit</Button>
            </Form>
        </div>
    )
}

export default LeftSide;