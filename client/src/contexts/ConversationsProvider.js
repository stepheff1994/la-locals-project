import React, { useContext, useState, useEffect, useCallback } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { useContacts } from './ContactsProvider'
import { useSocket } from './SocketProvider'

const ConversationsContext = React.createContext()


export function useConversations() {
    return useContext(ConversationsContext)
}

// function to create a conversations
export function ConversationsProvider({ id, children }) {
    // take in conversations and an empty array if there are none
    const [conversations, setConversations] = useLocalStorage('conversations', [])
    // create selectedConversationIndex state and by default select the first conversation
    const [selectedConversationIndex, setSelectedConversationIndex] = useState(0)
    // get the contacts from useContacts from the contactsProvider
    const { contacts } = useContacts()
    // get access to socket
    const socket = useSocket()
    
    // take in the reciepients into the conversation
    function createConversation(recipients) {
        setConversations(prevConversations => {
            // the new conversation defaults to an empty array
            return[...prevConversations, { recipients, messages: [] }]
        })
    }

    // message gets called from server as well as when we send
    // this variable will take messages from others as well as our own message
    const addMessageToConversation = useCallback(({ recipients, text, sender }) => {
        // call the set conversations method and get the previousConversations
        setConversations(prevConversations => {
            //  determine if we made any changes
            let madeChange = false
            const newMessage = { sender, text }

            // look thorough each of the previous conversations 
            const newConversations = prevConversations.map(conversation => {
                // check to see if the recipients array matches the recipiets array of each individual conversaion
                // check both arrays to see if they are the same
                if (arrayEquality(conversation.recipients, recipients)) {
                    madeChange = true
                    // return a new version of the conversation and add that message to the end
                    return { 
                        ...conversation, 
                        messages: [...conversation.messages, newMessage]
                    }
                }
                // if false return the conversation as is
                return conversation
            })

            // if madeChange is false
            if (madeChange) {
                // return if we did make changes
                return newConversations
            } else { // take in the past conversations and add the new message and recipient
                return [
                    ...prevConversations, 
                    { recipients, messages: [newMessage] }
                ]
            }
        })
        // this funtion will only change when setConversations does
    }, [setConversations])
    
    useEffect(() => {
        if (socket == null) return

        socket.on('receive-message', addMessageToConversation)
        // take the socket and remove the event listner
        return () => socket.off('receive-message')
    }, [socket, addMessageToConversation])

    function sendMessage(recipients, text){
        // send the message to all of the different clients
        socket.emit('send-message', { recipients, text })

        addMessageToConversation({ recipients, text, sender: id })

    }

    // export formatted version of conversations
    // go through all conversations
    const formattedConversations = conversations.map((conversation, index) => {
        // store the name of the recipients and map through all the recipients for a single conversation
        const recipients = conversation.recipients.map(recipient => {
            // get the contact for that individual contact
            const contact = contacts.find(contact => {
                // match the id with the recipient to find the contact
                return contact.id === recipient
            })
            // get the contact name otherwise get the recipient id
            const name = (contact && contact.name) || recipient
            // return either the contact id or the recipients name
            return { id: recipient, name }
        })
        const messages = conversation.messages.map(message => {
           // get the contact for that individual contact
           const contact = contacts.find(contact => {
                // match the id with the messages sender to find the contact
                return contact.id === message.sender
            })
            // get the contact name otherwise match it with the messages sender id
            const name = (contact && contact.name) || message.sender
            // check if the user is the one who sent the message
            const fromMe = id === message.sender
            // return all of the message information and set senderName to name and fromMe propety
            return { ...message, senderName: name, fromMe }
        })

        // figure out if the conversation is selected or not
        const selected = index === selectedConversationIndex
        // return a new object with our new formatted recipients with name and Ids
        // as well as a 'selected' true or false boolean for if it is selected or not
        return { ...conversation, messages, recipients, selected }
    })
    // set conversations as formatted conversations and add create conversation
    const value = {
        conversations: formattedConversations, 
        // export current selected conversation to be used at a later point
        selectedConversation: formattedConversations[selectedConversationIndex],
        sendMessage,
        selectConversationIndex: setSelectedConversationIndex,
        createConversation
    }

    return (
        <ConversationsContext.Provider value={ value }>
            {children}
        </ConversationsContext.Provider>
    )
}

// check to see if the conversation arrays are equal
// a and b = 2 different arrays
function arrayEquality(a, b) {
    // if the arrays are not equal then return false
    if (a.length !== b.length) return false
    
    // otherwise sort through them 
    a.sort()
    b.sort()

    // then loop through all the elements of a 
    return a.every((element, index) => {
        // check if every element of a is equlal to the element of b
        return element === b[index]
    })
}