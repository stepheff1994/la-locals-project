import React from "react";
import MatchCards from "../components/MatchCard";
import SwipeButtons from "../components/SwipeButtons";
import { QUERY_MATCHES } from "../utils/queries"
import { useQuery } from "@apollo/react-hooks"

function Matches () {
    const { loading, data } = useQuery(QUERY_MATCHES);

    const matches = data?.users || [];
    console.log(matches)
    return (
        <div>
            <h1>
                {loading ? (
                    <div>Loading...</div>
                ): (
                    <>
                    <MatchCards matches={matches} />
                    <SwipeButtons/>
                    </>
                )}
               
            </h1>
        </div>
    )
}



export default Matches