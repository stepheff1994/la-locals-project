import React, { useContext, useEffect, useState } from 'react'
import io from 'socket.io-client'

const SocketContext = React.createContext()

export function useSocket() {
    return useContext(SocketContext)
}

export function SocketProvider({ id, children }) {
    // create the socket state
    const [socket, setSocket] = useState()

    // create a new socket if the page refreshes or if there is a new id
    useEffect(() => {
        // create a new socket on the port 5000 and query the id
        const newSocket = io('/', { query: { id } })
        // set the socket to the new socket
        setSocket(newSocket)

        // remove the old socket when it runs again
        return () => newSocket.close()
    },[id])

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}



/// install: npm i socket.io-client