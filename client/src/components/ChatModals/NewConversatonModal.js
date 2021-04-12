import React, { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { useContacts } from '../../contexts/ContactsProvider';
import { useConversations } from '../../contexts/ConversationsProvider'

function NewConversatonModal({ closeModal }) {
    // the default of the selectedContacts is an empty array
    const [selectedContactIds, setSelectedContactIds] = useState([]);
    const { contacts } = useContacts()
    const { createConversation } = useConversations()

    function handleSubmit(e) {
        e.preventDefault()
        createConversation(selectedContactIds)
        closeModal()
    }

    // get list of ids to populate checkbox
    function handleCheckboxChange(contactId) {
        setSelectedContactIds(prevSelectedContactIds => {
            // determine if contactId is already in the list
            if (prevSelectedContactIds.includes(contactId)) {
                // if it includes it return a new list that doesn't have it anymore
                return prevSelectedContactIds.filter(prevId => {
                    // keep all of the ids that are not equal to current id then remove that id
                    return contactId !== prevId
                })
            } else {
                // add the id do the list
                return [...prevSelectedContactIds, contactId]
            }
        })
    }

    return (
        <>
            <Modal.Header style={{fontSize: '20px'}} closeButton>Create Conversation</Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    {contacts.map(contact => (
                        <Form.Group controlId={contact.id} key={contact.id}>
                            <Form.Check 
                                type='radio'
                                value={selectedContactIds.includes(contact.id)}
                                label = {contact.name}
                                onChange={() => handleCheckboxChange(contact.id)}
                                style={{fontSize: '20px', padding: '10px'}}
                            />
                        </Form.Group>
                    )) }
                    <Button type='submit' style={{ fontSize: "20px"}} variant="danger">Create</Button>
                </Form>
            </Modal.Body>
        </>
    )
}

export default NewConversatonModal;