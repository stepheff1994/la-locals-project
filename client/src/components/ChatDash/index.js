import React from 'react'
import SideBar from '../SideBar';

// pass in the id from Chat.js *** this may be where we pass in the token id ***
function ChatDash({ id }) {
    return (
        <SideBar id={id} />
    )
}

export default ChatDash;