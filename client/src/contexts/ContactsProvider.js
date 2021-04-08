import React, { useContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

import { QUERY_ME } from '../utils/queries'
import Auth from '../utils/auth'
import { useQuery } from '@apollo/react-hooks'

const ContactsContext = React.createContext()

// 
export function useContacts() {
    return useContext(ContactsContext)
}

// function to create a contact
export function ContactsProvider({ children }) {

     // get the user's data from the me query
     const { data } = useQuery(QUERY_ME)
     // get the first and last name from the data
     const friends = [data?.me.userLikes]
    //  let newFriends = friends.map(friend =>{
    //      setContacts(prevContacts => {
    //         return[...prevContacts, { friend._id, friend.name }]
    //     })
    //     return newFriends
    //  })
    // friends.forEach(friend => {
        
    // });
    //  console.log(friends)
    // //  console.log(name)
    
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
