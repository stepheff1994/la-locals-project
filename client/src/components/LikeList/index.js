import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import { useContacts } from '../../contexts/ContactsProvider';


const FriendList = ({ firstName, lastName, userLikes }) => {
    // const { createContact } = useContacts()

    if (!userLikes || !userLikes.length) {
      return <p className="bg-dark text-light p-3">{firstName} {lastName} has no likes!</p>;
    }
    console.log(userLikes)
  
    function handleSubmit(id, name) {
      // e.preventDefault();
      // call the onIdSubmit from Chat.js and pass it the current value of idRef
      // createContact(id, name)
      console.log(id)
      console.log(name)
      
    }
  
    return (
      <Container>
        <h5 className="text-white" style={{ fontSize: '30px' }}>
          Your Likes
        </h5>
        
          <div>
          {userLikes.map(match => (
            <div className=" card text-dark overflow-auto" key={match._id}>
              <div className='text-danger border-bottom border-grey'>
                <h2>{match.firstName} {match.lastName}</h2>
                <Button type='submit' onClick={() => handleSubmit(match._id, `${match.firstName} ${match.lastName}`)} className='mr-2'>Add To Chat</Button>
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
          ))}
        </div>
    </Container>
  );
};

export default FriendList;