import React from "react";
import MatchCards from "../components/MatchCard";
import SwipeButtons from "../components/SwipeButtons";

function Matches () {
    return (
        <div>
            <h1>
               <MatchCards/>
               <SwipeButtons/>
            </h1>
        </div>
    )
}



export default Matches