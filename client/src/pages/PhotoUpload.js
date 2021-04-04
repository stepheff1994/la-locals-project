import React, {useState} from "react";

function PhotoUpload() {

    const [imageAsFile, setImageAsFile] = useState('')
    const [imageAsUrl, setImageAsUrl] = useState('')

    console.log("image as file", imageAsFile)
    console.log("image as url" , imageAsUrl)
    
    const handleImageAsFile = (e) => {
        const image = e.target.files[0]
        setImageAsFile(imageFile => (image))
        setImageAsUrl(URL.createObjectURL(image))
    }

//     for multiple images
//     const storageRef = fire.storage().ref();
// this.state.file.forEach((file) => {
//   storageRef
//       .child(`images/${file.name}`)
//       .putFile(file).then((snapshot) => {
//   })
// });

    return (
        <div>
            <form>
                <img className= "photo-img" src={imageAsUrl} />
                <input type="file" onChange={handleImageAsFile} />
            </form>
        </div>
    )
}



export default PhotoUpload

// From the tutorial
// export default function App() {
//     const [file, setFile] = useState(null);
//     const [url, setURL] = useState("");
  
//     function handleChange(e) {
//       setFile(e.target.files[0]);
//     }
  
//     function handleUpload(e) {
//       e.preventDefault();
//       const uploadTask = storage.ref(`/images/${file.name}`).put(file);
//       uploadTask.on("state_changed", console.log, console.error, () => {
//         storage
//           .ref("images")
//           .child(file.name)
//           .getDownloadURL()
//           .then((url) => {
//             setFile(null);
//             setURL(url);
//           });
//       });
//     }
  
//     return (
//       <div>
//         <form onSubmit={handleUpload}>
//           <input type="file" onChange={handleChange} />
//           <button disabled={!file}>upload to firebase</button>
//         </form>
//         <img src={url} alt="" />
//       </div>
//     );
//   }```
  