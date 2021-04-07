import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

import {QUERY_USER} from '../utils/queries'



const User = ({ user: { firstName, age } }) => (
    <div className='Card'>
        <div>
        <img alt="avatar" className='Card--avatar'  />
        <h1 className='Card--name'>{firstName} {age}</h1>
        </div>
        <a href={`https://github.com/${firstName}`} className='Card--link'>
            See profile
        </a>
    </div>
)

function MyProfile() {
    const { loading, error, data } = useQuery(QUERY_USER)

    if (error) return <h1>Something went wrong!</h1>
    if (loading) return <h1>Loading...</h1>

    return (
        <div>
            <h1>Github | Users</h1>
            {data.users.map((user) => (
                <User key={user.id} user={user} />
            ))}
        </div>
    )
}

export default MyProfile