import React, { useState, useCallback } from 'react'
import { Form, InputGroup, Button } from 'react-bootstrap'
import { useConversations } from '../../contexts/ConversationsProvider';

function OpenConversation() {
    // create the text state and set it to an empty string
    const [text, setText] = useState('');
    const setRef = useCallback(node => {
        if (node) {
            node.scrollIntoView({ smooth: true })
        }
    }, [])

    const { sendMessage, selectedConversation } = useConversations()

    // handleSubmit function for form
    function handleSubmit(e) {
        e.preventDefault()

        sendMessage(
            // determine the recipients the message will go to
            // pass the recipients into the sendMessage function
            selectedConversation.recipients.map(r => r.id),
            // send the text
            text
        )
        // set the text to an empty string after submit
        setText('')
    }
  

    return (
        <div className='d-flex flex-column flex-grow-1'>
            <div className='flex-grow-1 overflow-auto'>
                <div className='d-flex flex-column align-items-start justify-content-end px-3'>
                    {selectedConversation.messages.map((message, index) => {
                        const lastMessage = selectedConversation.messages.length - 1 === index
                        return (
                            <div
                                ref={lastMessage ? setRef : null}
                                key={index}
                                className={`my-1 d-flex flex-column ${message.fromMe ? 'align-self-end' : ''}`}
                            >
                                <div className={`rounded px-2 py-1 ${message.fromMe ? 'bg-primary text-white' : 'border'}`}>
                                    {message.text}
                                </div>
                                {/* conditional statement checking to see if the message is from you or another sender and then displays the name accordingly */}
                                <div className={`text-muted small ${message.fromMe ? 'text-right' : ''}`}>
                                    {message.fromMe ? 'You' : message.senderName}
                                </div>
                            </div>
                        )
                        })}
                </div>
            </div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='m-2'>
                    <InputGroup>
                        <Form.Control
                        as="textarea"
                        required
                        value={text}
                        onChange={e => setText(e.target.value)}
                        style={{ height: '75px', resize: 'none' }}
                        />
                        {/* this InputGroup is used to append the button to the text area */}
                        <InputGroup.Append>
                            <Button type="submit">Send</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Form.Group>
            </Form>
        </div>
    )
}

export default OpenConversation;