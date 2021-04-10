import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

import {QUERY_USER} from '../utils/queries'
import Auth from "../utils/auth";



const User = ({ user: { firstName, age, image } }) => (
    <div className='Card'>
        <div>
        <img alt="avatar" className='Card--avatar' src={image} />
        <h1 className='Card--name'>{firstName} {age}</h1>
        </div>
        <a href={`https://github.com/${firstName}`} className='Card--link'>
            See profile
        </a>
    </div>
)

function MyProfile() {
    console.log("My profile / email is: ", Auth.getProfile().data);
    
    const { loading, error, data } = useQuery(QUERY_USER,
        {
            variables: {
                email: Auth.getProfile().data.email
            }
        });
    const user = data?.user || {};
    

    if (error) return <h1>Something went wrong!</h1>

    if (loading) 
        return <h1>Loading...</h1>
    else
        return (
            <div>
                <h1>Github | Users</h1>
                <User user={user}/>
            </div>
        )
}

export default MyProfile