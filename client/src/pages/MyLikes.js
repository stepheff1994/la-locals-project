import React from "react";
import { Link } from 'react-router-dom';
import LikeList from '../components/LikeList'
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ME } from '../utils/queries';


function MyLikes () {
    // set the data variable for the QUERY_ME query
    const { data } = useQuery(QUERY_ME)
    console.log(data)


    return (
        <div className="col-12 col-lg-3 mb-3">
          <LikeList
            firstName={data?.me.firstName}
            lastName={data?.me.lastName}
            userLikes={data?.me.userLikes}
          />
        </div>
        
    )
}



export default MyLikes