import React, { useState } from 'react';

// import the chat login form
import ChatLogin from '../components/ChatLogin';

function Chat () {
    const [id, setId] = useState()

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