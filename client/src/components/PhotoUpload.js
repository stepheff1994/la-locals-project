import React, { useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import firebase from "firebase/app";
import "firebase/storage";
import storage from "./Firebase";


function PhotoUpload(props) {

    return (
        <div>
             <progress value={props.stateImage.progress} max="100" className="progress" style={{width: '100px', height: '20px', backgroundColor:'green'}}/>
  
              <div className="file-field input-field">
          <div className="btn" style={{fontSize:'15px'}}>
            <span style={{fontSize: '15px'}}>File</span>
            <input type="file" onChange={props.handleImage} />
          </div>
          <div className="file-path-wrapper">
            {/* <input className="file-path validate" type="text"/> */}
          </div>
        </div>
        <div>
        <button style={{backgroundColor:'red', fontSize: '15px', fontWeight:'bolder', width:'10rem'

        
        }}
          onClick={props.handleUpload}
          className="waves-effect waves-light btn"
        >
          Upload
        </button>
        </div>
        <br/>
        <img
          src={props.stateImage.url || "https://via.placeholder.com/400x300"}
          alt="Uploaded Images"
          height="300"
          width="400"
        />
        <br/>
        </div>
    )
}

export default PhotoUpload;
