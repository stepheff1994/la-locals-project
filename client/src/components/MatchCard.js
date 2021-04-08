
import React from 'react';
import TinderCard from "react-tinder-card"
import "../components/MatchCard.css";


const MatchCards= ({ matches })=> {

    // destructure the mutation from ADD_FRIEND so we can use it in a click function
    // const [addFriend] = useMutation(ADD_FRIEND);

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
        <div className ="tinderCards text-dark rounded">
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
                    className ="card text-dark overflow-auto"
                    >
                        <div className='text-danger border-bottom border-grey'>
                            <h2>{match.firstName} {match.lastName}</h2>
                        </div>
                        <div className='text-grey border-bottom border-grey py-2'>Images Here</div>
                        <div className='border-bottom border-grey py-3'>
                            <div style={{ fontSize: '20px' }}>
                                <b>Location:</b> {match.area}
                            </div>
                            <div style={{ fontSize: '20px' }}>
                                <b>Age:</b> {match.age}
                            </div>
                        </div>
                        <div className='py-3'>
                            <div className='py2'>
                                <i style={{ fontSize: "15px" }}>Why did you join LA LOCALS?</i>
                                <p style={{ fontSize: "18px" }}>{match.question1}</p>
                            </div>
                            <div className='py2'>
                                <i style={{ fontSize: "15px" }}>Your Uncle has just posted something offensive on Facebook your next move is to:</i>
                                <p style={{ fontSize: "18px" }}>{match.question2}</p>
                            </div>
                            <div className='py2'>
                                <i style={{ fontSize: "15px" }}>Instead of asking how old you are select which social media app you prefer?</i>
                                <p style={{ fontSize: "18px" }}>{match.question3}</p>
                            </div>
                            <div className='py2'>
                                <i style={{ fontSize: "15px" }}>It is post pandemic in Los Angeles what is the first thing you do?</i>
                                <p style={{ fontSize: "18px" }}>{match.question4}</p>
                            </div>
                            <div className='py2'>
                                <i style={{ fontSize: "15px" }}>Lastly what’s your favorite delivery app? </i>
                                <p style={{ fontSize: "18px" }}>{match.question5}</p>
                            </div>
                        </div>
                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
    )
}
export default MatchCards;
