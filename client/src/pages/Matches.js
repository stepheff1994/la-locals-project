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
        variables: { area: user.area, identity: user.identity, preference: user.preference }
    });
    // set the matches returned from the query to an array, otherwise return a blank array
    const matches = data?.users || [];
    // console.log(matches)

    return (
        <div>
            <h1>
                <MatchCards matches={matches}/>
            </h1>
        </div>
    )
}



export default Matches