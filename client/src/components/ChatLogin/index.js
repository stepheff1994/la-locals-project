import React, { useRef } from 'react';
// import form components from 'react-bootstrap'
import { Container, Form, Button } from 'react-bootstrap';
import { QUERY_ME } from '../../utils/queries'
import Auth from '../../utils/auth'
import { useQuery } from '@apollo/react-hooks'


// take in the onIdSubmit from Chat.js useState id function
function ChatLogin({ onIdSubmit }) {

    // get the user's data from the me query
    const { data } = useQuery(QUERY_ME)
    // get the first and last name from the data
    const first = data?.me.firstName
    const last = data?.me.lastName
    // combine the first and last name into the id variable
    const name = `${first} ${last}`
    const userId = data?.me._id
    console.log(userId)
    console.log(name)



    // function to handle the submit of manually created id for the chat
    function handleSubmit(e) {
        e.preventDefault();
        // call the onIdSubmit from Chat.js and pass it the current value of idRef
        onIdSubmit(userId)
    }

    return (
        <Container className='align-items-center d-flex' style={{ height: '100vh', fontSize: '20px' }}>
            <Button style={{ fontSize: '20px' }} type="submit" onClick={handleSubmit} className="mr-2">Begin Chatting!</Button>
        </Container>
    )
};

export default ChatLogin;

// <Form onSubmit={handleSubmit} className='w-100'>
//                 <Form.Group>
//                     <Form.Label>Enter Your Id</Form.Label>
{/* .Control acts as form input */ }
            //         <Form.Control type='text' ref={idRef} required />
            //     </Form.Group>
            //     <Button type="submit" className="mr-2">login</Button>
            // </Form>