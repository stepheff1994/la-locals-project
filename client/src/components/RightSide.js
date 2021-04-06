import React from 'react';
import {Image} from "react-bootstrap";
import dateLogo from "../images/date.png"

const RightSide = () => {
    return (
        <div>
            <Image src={dateLogo} thumbnail style={{border:"none"}} />
        </div>
    )
}

export default RightSide;