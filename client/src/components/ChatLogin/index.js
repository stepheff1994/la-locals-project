import React, { useRef } from 'react';
// import form components from 'react-bootstrap'
import { Container, Form, Button } from 'react-bootstrap';

// take in the onIdSubmit from Chat.js useState id function
function ChatLogin ({ onIdSubmit }) {
    // use the useRef hook to handle all change events in the form
    const idRef = useRef()
    // function to handle the submit of manually created id for the chat
    function handleSubmit(e) {
        e.preventDefault();

        // call the onIdSubmit from Chat.js and pass it the current value of idRef
        onIdSubmit(idRef.current.value)

    }

    return (
        <Container className='align-items-center d-flex' style={{ height: '100vh' }}>
            <Form onSubmit={handleSubmit} className='w-100'>
                <Form.Group>
                    <Form.Label>Enter Your Id</Form.Label>
                    {/* .Control acts as form input */}
                    <Form.Control type='text' ref={idRef} required />
                </Form.Group>
                <Button type="submit" className="mr-2">login</Button>
            </Form>
        </Container>
    )
};

export default ChatLogin;