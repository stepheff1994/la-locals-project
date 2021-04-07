import React from "react";

import { Row, Col} from 'react-bootstrap';
import LeftSide from "../components/LeftSide";

import RightSide from "../components/RightSide";

function LogIn () {


  
    return (
        <div className="LogIn">
        
        <Row className="landing text-white">
          <Col ><LeftSide /></Col>
          
          <Col ><RightSide /></Col>
        </Row>
      </div>
    );
  }

  export default LogIn







