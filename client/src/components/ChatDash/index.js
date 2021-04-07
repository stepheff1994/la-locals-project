import React from 'react'
import { useConversations } from '../../contexts/ConversationsProvider';
import SideBar from '../SideBar';
import OpenConversation from '../OpenConversation';

// pass in the id from Chat.js *** this may be where we pass in the token id ***
function ChatDash({ id }) {
    // only render if we have a selected conversation
    const { selectedConversation } = useConversations()
    return (
        <div className='d-flex' style={{ height: '80vh', background: 'white', fontSize: '20px', borderWidth: '5px'}}>
            <SideBar id={id} />
            {/* if we have a selected conversation, then render the OpenConversation on the right */}
            {selectedConversation && <OpenConversation />}
        </div>

    )
}

export default ChatDash;