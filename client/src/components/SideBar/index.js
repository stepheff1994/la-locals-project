import React, { useState } from 'react'
// import elements from bootstrap
import { Tab, Nav } from 'react-bootstrap'

const CONVERSATIONS_KEY = 'conversations'
const CONTACTS_KEY = 'contacts'

// make sure to pass in the id of the user to display to user
function SideBar ({ id }) {
    // use Conversations as the active default key
    const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY)
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
           </Tab.Container>
        </div>
    )
}

export default SideBar;