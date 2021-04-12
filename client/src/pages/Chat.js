import React from 'react';
import Auth from '../utils/auth'


// import the chat login form
import ChatLogin from '../components/ChatLogin';
// import the chat dashboard
import Dash from '../components/ChatDash';
// import the useLocalStorage hook we created
import useLocalStorage from '../hooks/useLocalStorage';
import { ContactsProvider } from '../contexts/ContactsProvider';
import { ConversationsProvider } from '../contexts/ConversationsProvider';
import { SocketProvider } from '../contexts/SocketProvider';

function Chat () {
    // useLocalStorage hook to set the manually created id to the application and save it to local storage
    // that way, when the chat is refreshed the id is saved
    const [id, setId] = useLocalStorage('id', "") // ***** will have to use this to somehow get/set the token id for each user
    
   

    

     // if you are logged in the loggedIn variable will be true
    const loggedIn = Auth.loggedIn();


    const dashboard = (
        <SocketProvider id={id}>
            <ContactsProvider>
                <ConversationsProvider id={id}>
                    <Dash id={id} />
                </ConversationsProvider>
            </ContactsProvider>
        </SocketProvider>
    )
    return (
        <div style = {{position: 'relative', minHeight: '100vh'}}>
        <div>
            {/* if you have an id go to the chat dashboard and pass in the id
                otherwise create one with ChatLogin
                ***** may not need the ChatLogin *****
            */}
            {id ? dashboard : <ChatLogin onIdSubmit={setId} />}
            {/* set the id on onIdSubmit and pass to ChatLogin form */}
            </div>   
        </div>
    )   
};

export default Chat;



// make sure to install on the server side: 
    // npm i socket.io