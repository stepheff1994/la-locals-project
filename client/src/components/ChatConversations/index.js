import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useConversations } from '../../contexts/ConversationsProvider';

function ChatConversations () {
    // get conversations from useConversations
    const { conversations, selectConversationIndex } = useConversations()

    return (
        <ListGroup variant='flush'>
        {/* conversations don't have an id so we will look for their index */}
        {conversations.map((conversation, index) => (
                <ListGroup.Item 
                key={index}
                action
                // pass throught the index of the current selected conversations
                onClick={() => selectConversationIndex(index)}
                // activate the selected conversation
                active={conversation.selected}
                >
                    {/* take all of the names of those recipients and join them  */}
                    {conversation.recipients.map(r => r.name).join(', ')}
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}

export default ChatConversations;