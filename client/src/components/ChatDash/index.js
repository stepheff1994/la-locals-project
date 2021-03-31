import React from 'react'
import SideBar from '../SideBar';

// pass in the id from Chat.js *** this may be where we pass in the token id ***
function ChatDash({ id }) {
    return (
        <div className='d-flex' style={{ height: '100vh' }}>
            <SideBar id={id} />
        </div>

    )
}

export default ChatDash;