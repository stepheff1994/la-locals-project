import React from "react";
import MatchCards from "../components/MatchCard";

import { QUERY_MATCHES, QUERY_ME } from "../utils/queries"
import { useQuery } from "@apollo/react-hooks"
// the Redirect component allows us to redirect the user to another route within the application
// import { useParams } from 'react-router-dom';

function Matches() {
    // set the data variable for the QUERY_ME query
    const { data: userData } = useQuery(QUERY_ME)
    // get the user's area
    const userArea = userData?.me.area
    // get the user's preference
    const userIdentity = userData?.me.preference
    // get the user's identity
    const userPreference = userData?.me.identity
    console.log(userData)

    // insert the logged in user's parameters into the QUERY_MATCHES query
    const { loading, data } = useQuery(QUERY_MATCHES, {
        variables: { area: userArea, identity: userPreference, preference: userIdentity }
    });
    // set the matches returned from the query to an array, otherwise return a blank array
    const matches = data?.users || [];
    // console.log(matches)

    return (
        <div style = {{position: 'relative', minHeight: '100vh'}}>
        <div className='align-items-center text-white' style={{ alignItems: 'center' }}>
            
                <div>
                    <h1 style={{ fontSize: '30px'}}>
                        Your Possible Matches
                    </h1>
                </div>
                <div>
                    <h3>If you want to get to know your match better click the heart!
                        <p>Otherwise, swipe to say goodbye!</p>
                    </h3>
                </div>
                <div>
                    <MatchCards matches={matches}/>
                </div>
            </div>
        </div>
    )
}



export default Matches