import React, { useContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const ContactsContext = React.createContext()

// 
export function useContacts() {
    return useContext(ContactsContext)
}

// function to create a contact
export function ContactsProvider({ children }) {
    // take in contacts and an empty array if there are none
    const [contacts, setContacts] = useLocalStorage('contacts', [])

    // create a new contact by taking in their id and name then adding
    // it to the end of the contacts array.
    function createContact(id, name) {
        setContacts(prevContacts => {
            return[...prevContacts, { id, name }]
        })
    }
    return (
        <ContactsContext.Provider value={{ contacts, createContact }}>
            {children}
        </ContactsContext.Provider>
    )
}
