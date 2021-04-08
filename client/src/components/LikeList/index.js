import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';


const FriendList = ({ firstName, lastName, userLikes }) => {
  if (!userLikes || !userLikes.length) {
    return <p className="bg-dark text-light p-3">{firstName} {lastName} has no likes!</p>;
  }

  return (
    <div className="display-block align-content-center">
      <h5 className= "text-white" style={{ fontSize: '30px'}}>
        {firstName} {lastName}'s Likes
      </h5>
      {userLikes.map(match => (
        
          <Button href='/LikeProfile' className="btn w-100 h-60 primary mb-2 align-items-center" style={{ fontSize: "20px"}} key={match._id}>
            {match.firstName} {match.lastName}
          </Button>
        
      ))}
    </div>
  );
};

export default FriendList;