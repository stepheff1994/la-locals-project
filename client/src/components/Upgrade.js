import React from "react";
import {Image} from "react-bootstrap";
import upgradeLogo from "../images/premium.png"


function Upgrade () {
    return (
        <div>
             <Image src={upgradeLogo}  style={{border:"none"}}/>
        </div>
    )
}
export default Upgrade