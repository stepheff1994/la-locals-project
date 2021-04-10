import React, { useState } from 'react';
// import {Form, Button} from 'react-bootstrap'
import {makeStyles} from '@material-ui/core/styles';
import {Stepper, Step, StepLabel, Typography, Button} from '@material-ui/core';
import Register from '../components/Register';
import IntroQuestionnaire from '../components/IntroQuestionnaire';
import PhotoUpload from '../components/PhotoUpload';
import {ADD_USER} from '../utils/mutations';
import { useMutation } from '@apollo/react-hooks';
import Auth from '../utils/auth';
import storage from '../components/Firebase';
import {firebase} from '../components/Firebase';

const useStyles = makeStyles({
    root: {


        width: "50%",
        padding: "20px",
        margin: "6rem auto",
        textEmphasisColor: "white",
        backgroundAttachment: "none",
        border: "10px solid #999",
        "& .MuiStepIcon-root.MuiStepIcon-active": {
            color: "red"
        },
        "& .MuiStepIcon-root.MuiStepIcon-completed": {
            color: "red"
        },
        backgroundColor: "white"
    }
    
})


function Questionnaire () {

    const [area, setArea] = useState('');
    const [age, setAge] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState ('');
    const [zipcode, setZipcode] = useState('');
    const [firstName, setFirst] = useState('');
    const [lastName, setLast] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [photo, setPhoto] = useState(' ');
    const [identity, setIdentity] = useState('');
    const [preference, setPreference] = useState(' ');
    const [question1, setQuestion1] = useState('');
    const [question2, setQuestion2] = useState(' ');
    const [question3, setQuestion3] = useState('');
    const [question4, setQuestion4] = useState('');
    const [question5, setQuestion5] = useState('');
    
    const [addUser] = useMutation(ADD_USER);
    const handleSubmit = async event => {
      event.preventDefault();
    //   addUser({
    //     variables:{email, firstName,lastName,password, age: parseInt(age, 10), area, identity, preference, question1,question2,question3,question4,question5}
    //   })
      // use try/catch instead of promises to handle errors
        try {
            // execute addUser mutation and pass in variable data from form
            const { data } = await addUser({
                variables:{email, firstName,lastName,password, age: parseInt(age, 10), area, identity, preference, question1,question2,question3,question4,question5,
                image:stateImage.url
                }
            });
            // send the token info from addUser through to the login fucntion in Auth
            // upon successful signup user will be redirected to the homepage
            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
        }
    //   const mutationResponse = await
    //   addUser({
    //     variables:{email, firstName,lastName,password, age: parseInt(age, 10), area, identity, preference, question1,question2,question3,question4,question5}
    //   });
    //   const token = mutationResponse.data.addUser.token;
    //   console.log(token);
    //   Auth.login(token);
      
    };

    const [imageAsFile, setImageAsFile] = useState('')
    const [imageAsUrl, setImageAsUrl] = useState('')
    const [stateImage, setStateImage] = useState({
        image: null,
        url: "",
        progress: 0
    })

    console.log("image as file", imageAsFile)
    console.log("image as url" , imageAsUrl)
    
    const handleImage = (e) => {
        // const image = e.target.files[0]
        // setImageAsFile(imageFile => (image))
        // setImageAsUrl(URL.createObjectURL(image))
        if (e.target.files[0]) {
            const image = e.target.files[0];
            setStateImage(() => ({ 
                ...stateImage,
                image
            }));
          }
    }

    const handleUpload = () => {
        const { image } = stateImage;
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
          "state_changed",
          snapshot=> {
            // progress function ...
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setStateImage({ 
                ...stateImage,
                progress
            });
          },
          error => {
            // Error function ...
            console.log(error);
          },
          () => {
            // complete function ...
            storage
              .ref("images")
              .child(image.name)
              .getDownloadURL()
              .then(url => {
                setStateImage({ 
                    ...stateImage,
                    url
                });
                console.log("New Image State:", stateImage);
            
              });
          }

        );
        // const storageRef = firebase.storage().ref()
        // const imagesRef = storageRef('images')
        // const imageFromStorage = imagesRef.child(`images/${image.name}`)
        // const imagePath = imageFromStorage.fullPath
        // const imageName = imageFromStorage.imageName

        // console.log(imagePath)
        // console.log(imageName)

        
      };

    

    //   storageRef.put(YOUR_FILENAME).then((snapshot) => {
    //                         return snapshot.ref.getDownloadURL();
    //                     })=> {
    //         

    const available_areas = [{'zip': ['90210', '90038'], 'area': 'Bev Hills'}, {'zip': ['91406', '90029','91309',  
    '91310','91311','91313'], 'area': 'The Valley'}, {'zip': ['90401', '90265', '90731'], 'area': 'The Beach'}]



    const [activeStep, setActiveStep] = useState(0);

    function getSteps() {
        return ["SIGNUP", "INTRO", "PHOTOS"];
    }
    const handleNext =() => {
        setActiveStep(prevActiveStep => prevActiveStep +1)
    }

    function addressEntered (zip) {
        
        let found_area = ""

        for(var i = 0; i < available_areas.length; i++) {
            let currentAreaObj = available_areas[i]
            let currentAreaObjectZips = currentAreaObj.zip
            for(var j = 0; j < currentAreaObjectZips.length; j++) {
                let currentZip = currentAreaObjectZips[j]
                console.log('current zip', currentZip)
                console.log('zip', zip)
                if (currentZip === zip ) {
                    console.log('area matched', currentAreaObj.area)
                    found_area = currentAreaObj.area
                    break;
                }
                
            }   
        }   
        setArea(found_area)
        console.log('area found is ',found_area)
      

    }
    const handleZipChange = (event) => {
        setZipcode(event.target.value)
        addressEntered(event.target.value)

    }
    // const handleSubmit = (event) => {
    //     event.preventDefault()

        
    //     console.log('submitted',area,age,zipcode,first,last,email,password,ConfirmPassword,identity,preference,question1,question2,question3,question4,question5,imageAsFile,imageAsUrl )
    // }

    const steps = getSteps();

    function getStepsContent(stepIndex){
        switch(stepIndex) {
        case 0:
            return <Register firstName = {firstName} setFirst = {setFirst} 
            lastName = {lastName} setLast  = {setLast} 
            age = {age} setAge = {setAge}
             email = {email} setEmail = {setEmail} 
             password = {password} setPassword = {setPassword} 
             ConfirmPassword = {ConfirmPassword} setConfirmPassword = {setConfirmPassword} 
             identiy = {identity} setIdentity = {setIdentity} 
             handleZipChange = {handleZipChange}
             area = {area} 
             preference = {preference} setPreference = {setPreference}/>;
        case 1:
            return <IntroQuestionnaire 
                question1 = {question1} 
                setQuestion1 = {setQuestion1}
                question2 = {question2} 
                setQuestion2 = {setQuestion2}
                question3 = {question3} 
                setQuestion3 = {setQuestion3}
                question4 = {question4} 
                setQuestion4 = {setQuestion4}
                question5 = {question5} 
                setQuestion5 = {setQuestion5}     />;
        case 2:
           return <div>
                Upload up to 3 images 
                <PhotoUpload stateImage = {stateImage} handleImage = {handleImage} handleUpload = {handleUpload} />
               
               {stateImage.url.length>0?(
                <Button variant="contained" color="primary" className="mt-5" type="submit" onClick={handleSubmit}>
                Submit
                </Button>):""}
            </div>

        default: return "Unknow Step";
    }
    }

   const classes = useStyles();
   return (
    <>
          
      
    <div className = {classes.root}>
        <Stepper activeStep={activeStep} alternativeLabel >
            {steps.map(label => (
              <Step key ={label}> 
                  <StepLabel>
                      {label}
                 </StepLabel> 
              </Step>
            ))}
        </Stepper>
        <>
        {activeStep ===steps.length ? "Welcome to LA locals": (
        <>
        {getStepsContent(activeStep)}  
        <Button onClick={handleNext}>
         {activeStep ===steps.length ? "Finish": "Next"}
        </Button>
        </>
        )}
    </>    
    </div>
    </>
)
}


    
   



export default Questionnaire


// Registration: 
// Please enter your name: first and last, enter email and password
// Please upload a photo of yourself (3 photos max).

// Enter your zip code or select which area of Los Angeles you are from (depending on entering zip code or interactive map).
// How do you identify?
// Man
// Woman
// Non-binary (for this we can have a drop down menu or write in)
// 5. Interested in (select all that apply): 
// Men
// Women
// Non-binary (for this we can have a drop down menu or write in) (edited) 



// Intro Questionnaire
// Why did you join LA LOCALS? (select one answer): 
// (a.) I’m tired of the TInder/Bumble scene 
// b. I want to meet someone with out having to go on the 405 
// c. I survived 2020 I can survive this app 
// d. I love social experiments 
// Your Uncle has just posted something offensive on Facebook your next move is to: 
// a. I don’t have Facebook 
// b. My uncle doesn’t have Facebook 
// c. If it is on my status I will delete the comment 
// d. Engage in a fight in the comment section because I like seeing the world the burn. 
// Instead of asking how old you are select which social media app you prefer? (select one answer):
//  (a.) no socials because I’m the Unabomber 
//  (b.) It’s a real toss up between instagram and snapchat 
//  (c.) Tik Tok because of quarantine 
//  (d.) Facebook because I’m Mark Zuckerberg
// It is post pandemic in Los Angeles what is the first thing you do?: 
// (a.) Go to the Abbey 
// (b.) The same thing I was doing before the pandemic: watching Netflix 
// (c.) Get out of LA 
// (d.) Scroll on the citizen app because I’ve already lost faith in humanity
// Lastly what’s your favorite delivery app?: 
// (a.) Postmates 
// (b.) Doordash 
// (c.) I actually cook all of my meals at home so I can’t relate 
// (d.) I don’t eat human food because I’m Mark Zuckerberg