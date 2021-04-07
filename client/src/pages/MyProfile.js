import React from 'react'; 


import { useQuery } from '@apollo/react-hooks';
import { QUERY_USER } from "../utils/queries";

function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>;
}

function MyProfile () {  
    const { data } = useQuery(QUERY_USER);
  let user;

//     return (
//         <section>
//           <div className="project">
//             <h1 className="title">My Profile</h1>
//             <hr></hr>
//           </div>

//           <Wrapper id="card-data">
//             {data.map((users) => (
//               <ProjectCards key={users._id} image={users.image} firstName={users.firstName} lastName={users.lastName} identity={users.identity} preference={users.preference}/>
//             ))}
//           </Wrapper>
//         </section>
    
//     );
//   }
 
    return (
        <div>
            <h1>
                
            </h1>
        </div>
    )
}
export default MyProfile;
