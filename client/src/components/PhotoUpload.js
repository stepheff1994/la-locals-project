import React, { useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import firebase from "firebase/app";
import "firebase/storage";
import storage from "./Firebase";

function PhotoUpload(props) {

    return (
        <div>
             <progress value={props.stateImage.progress} max="100" className="progress" />
  
              <div className="file-field input-field">
          <div className="btn">
            <span>File</span>
            <input type="file" onChange={props.handleImage} />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
          </div>
        </div>
        <button
          onClick={props.handleUpload}
          className="waves-effect waves-light btn"
        >
          Upload
        </button>
        </div>
    )
}

export default PhotoUpload;
