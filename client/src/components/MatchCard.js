
import React, {useState} from 'react';
import { useQuery } from "@apollo/react-hooks"
import TinderCard from "react-tinder-card"
import "../components/MatchCard.css";
import { QUERY_MATCHES } from "../utils/queries"

const MatchCards= ({ matches })=> {

    console.log(matches)
    if (!matches.length) {
        return <h3>No Matches Yet</h3>;
    }

        const swiped = (direction, nameToDelete) => {
            console.log("removing:"+nameToDelete);
            //setLastDirection(direction);
        };
        const outOfFrame = (name) => {
            console.log (name +"left the screen")
            
        }

    return (
        <div className ="tinderCards">
            <div className=" tinderCards_cardContainer">  

            {matches && matches.map (match => (
                <TinderCard
                  className ="swipe"
                  key={match._id}
                  preventSwipe = {["up", "down"]}
                  onSwipe = {(dir) => swiped(dir, match.firstName)}
                  onCardLeftScreen = {() => outOfFrame(match.firstName)}
                >
                    <div
                    style = {{backgroundImage: `url (${match.url})`}}
                    className ="card"
                    >
                        
                      <h3>{match.name}</h3>   
                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
    )
}
export default MatchCards;
