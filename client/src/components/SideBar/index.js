import React, { useState } from 'react'
// import elements from bootstrap
import { Tab, Nav, Button, Modal } from 'react-bootstrap'
import Conversations from '../ChatConversations'
import Contacts from '../ChatContacts'
//import modals
import NewConversationModal from '../ChatModals/NewConversatonModal'
import NewContactModal from '../ChatModals/NewContactModal'

const CONVERSATIONS_KEY = 'conversations'
const CONTACTS_KEY = 'contacts'

// make sure to pass in the id of the user to display to user
function SideBar ({ id }) {
    // use Conversations as the active default key
    const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY);
    // set the useState to false so the modal doesn't automatically open
    const [modalOpen, setModalOpen] = useState(false);
    
    console.log(id)

    // if we are on the conversatios tab then it is equal to true
    const conversationsOpen =  activeKey === CONVERSATIONS_KEY

    // close Modal
    function closeModal() {
        setModalOpen(false)
    }

    return (
        <div style={{ width: '250px' }} className='d-flex flex-column'>
            {/* set the active key state for the default sidebar 
                set onSelect to the 'setActiveKey' function to be able to select other tabs
            */}
           <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
                <Nav variant='tabs' className='justify-content-center'>
                    <Nav.Item>
                        {/* eventKey allows us to change between the tabs */}
                        <Nav.Link eventKey={CONVERSATIONS_KEY}>Conversations</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content className='border-right overflow-auto flex-grow-1'>
                    <Tab.Pane eventKey={CONVERSATIONS_KEY}>
                        <Conversations />
                    </Tab.Pane>
                    <Tab.Pane eventKey={CONTACTS_KEY}>
                        <Contacts />
                    </Tab.Pane>
                </Tab.Content>
                <div className='p-2 border-top border-right small'>
                    {/* we will place the user's name here */}
                    Welcome <span className='text-muted'>{id}</span>
                </div>
                <Button onClick={() => setModalOpen(true)} className='rounded-0' style={{ fontSize: '20px' }} >
                    New {conversationsOpen ? 'Conversation' : 'Contact'}
                </Button>
           </Tab.Container>

           <Modal show={modalOpen} onHide={closeModal}>
               {conversationsOpen ? 
                    <NewConversationModal closeModal={closeModal} /> :
                    <NewContactModal closeModal={closeModal} />
                }
           </Modal>
        </div>
    )
}

export default SideBar;