
import React, {useState} from 'react';
import TinderCard from "react-tinder-card"
import "../components/MatchCard.css";

const MatchCards= ()=> {
    
   
    const [people, setPeople] = useState([
        {
            name: 'Name',
            url: 'https://fitsmallbusiness.com/wp-content/uploads/2019/10/elon_musk_headshot.jpg',
        },

        {
            name: 'Name',
            url: 'https://techcentral.co.za/wp-content/uploads/2017/05/jeff-bezos-2156-1120.jpg',
        },
    ]);
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

            {people.map (person => (
                <TinderCard
                  className ="swipe"
                  key={person.name}
                  preventSwipe = {["up", "down"]}
                  onSwipe = {(dir) => swiped(dir, person.firstName)}
                  onCardLeftScreen = {() => outOfFrame(person.firstName)}
                >
                    <div
                    style = {{backgroundImage: `url (${person.url})`}}
                    className ="card"
                    >
                        
                      <h3>{person.name}</h3>   
                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
    )
}
export default MatchCards;
