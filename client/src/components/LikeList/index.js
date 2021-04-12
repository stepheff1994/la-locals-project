import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import { useContacts } from '../../contexts/ContactsProvider';
import useLocalStorage from '../../hooks/useLocalStorage';


const FriendList = ({ firstName, lastName, userLikes }) => {
    // const { createContact } = useContacts()
    // get the createcontact function from useContacts
    // const { createContact } = useContacts()
    const [contacts, setContacts] = useLocalStorage('contacts', [])

    function handleSubmit(id, name) {
        // e.preventDefault();
        // pass through the name and id values into the createContact function
        setContacts(prevContacts => {
          return[...prevContacts, { id, name }]
      })
        
    }


    if (!userLikes || !userLikes.length) {
      return <p className="bg-dark text-light p-3">{firstName} {lastName} has no likes!</p>;
    }
    console.log(userLikes)
  
    return (
      <Container style={{ height: '150rem', alignContent: 'center'}}>
        <h5 className="text-white" style={{ fontSize: '30px' }}>
          Your Likes
        </h5>
        
          <div>
          {userLikes.map(match => (
            <div className=" card text-dark overflow-auto" style={{ height: 'auto', width: '55rem'}} key={match._id}>
              <div className='text-danger border-bottom border-grey'>
                <h2 style={{ fontSize: "60px"}}>{match.firstName} {match.lastName}</h2>
                <Button style={{ fontSize: '20px'}} type='submit' onClick={() => handleSubmit(`${match.firstName} ${match.lastName}`, `${match.firstName} ${match.lastName}`)} className='mr-2'>Add To Chat</Button>
              </div>
            <div className='text-grey border-bottom border-grey py-2'>
              <img style={{ width: "500px" }} src={match.image}></img>
            </div>
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