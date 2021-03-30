import React from 'react';

// import the chat login form
import ChatLogin from '../components/ChatLogin';
// import the useLocalStorage hook we created
import useLocalStorage from '../hooks/useLocalStorage';

function Chat () {
    // useLocalStorage hook to set the manually created id to the application and save it to local storage
    const [id, setId] = useLocalStorage('id') // ***** will have to use this to somehow get/set the token id for each user

    return (
        <div>
            {/* print out id */}
            {id}
            {/* set the id on onIdSubmit and pass to ChatLogin form */}
            <ChatLogin onIdSubmit={setId} />
        </div>
    )
};

export default Chat;