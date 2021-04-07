import React from 'react';
import { Link } from 'react-router-dom';

const FriendList = ({ firstName, lastName, likes }) => {
  if (!likes || !likes.length) {
    return <p className="bg-dark text-light p-3">{firstName} {lastName}, make some friends!</p>;
  }

  return (
    <div>
      <h5>
        {firstName} {lastName}'s Likes
      </h5>
      {likes.map(match => (
        <button className="btn w-100 display-block mb-2" key={friend._id}>
          <Link to={`/profile/${match.firstName}-${match.lastName}`}>{match.firstName} {match.lastName}</Link>
        </button>
      ))}
    </div>
  );
};

export default FriendList;