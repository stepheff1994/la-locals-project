import React, { useRef } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { useContacts } from '../../contexts/ContactsProvider'


function NewContactModal({ closeModal }) {
    // use the useRef hook to create an id and name refrence variable
    const idRef = useRef();
    const nameRef = useRef();
    // get the createcontact function from useContacts
    const { createContact } = useContacts()

    function handleSubmit(e) {
        e.preventDefault();
        // pass through the name and id values into the createContact function
        createContact(idRef.current.value, nameRef.current.value)
        closeModal();
    }
    return (
        <>
            <Modal.Header closeButton>Create Contact</Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Id</Form.Label>
                        <Form.Control type='text' ref={idRef} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='text' ref={nameRef} required />
                    </Form.Group>
                    <Button type='submit'>Create</Button>
                </Form>
            </Modal.Body>
        </>
    )
}

export default NewContactModal;