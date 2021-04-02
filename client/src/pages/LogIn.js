import React from "react";
import { Row, Col} from 'react-bootstrap';
import LeftSide from "./LeftSide";

import RightSide from "./RightSide";

function LogIn () {
    return (
        <div className="LogIn">
        
        <Row className="landing">
          <Col ><LeftSide /></Col>
          
          <Col ><RightSide /></Col>
        </Row>
      </div>
    );
  }
  



export default LogIn