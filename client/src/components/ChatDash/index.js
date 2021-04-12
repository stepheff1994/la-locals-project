import React from 'react'
import { useConversations } from '../../contexts/ConversationsProvider';
import SideBar from '../SideBar';
import OpenConversation from '../OpenConversation';

// pass in the id from Chat.js *** this may be where we pass in the token id ***
function ChatDash({ id }) {
    // only render if we have a selected conversation
    const { selectedConversation } = useConversations()
    return (
        <div>
            <div className="text-white">
                <h1 style={{ fontSize: '30px'}}>
                    To chat with your match:
                    <p style={{ fontSize: '20px'}}>click on "New Conversation" and select the name of the person you would like to chat with</p>
                </h1>
            </div>
            <div className='d-flex' style={{ height: '60vh', background: 'white', fontSize: '20px', borderWidth: '5px'}}>
                <SideBar id={id} />
                {/* if we have a selected conversation, then render the OpenConversation on the right */}
                {selectedConversation && <OpenConversation />}
            </div>
        </div>
        

    )
}

export default ChatDash;