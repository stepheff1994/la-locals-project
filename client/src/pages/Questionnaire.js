import React, { useState } from 'react';
import {Form, Button} from 'react-bootstrap'


function Questionnaire () {
    const [area, setArea] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [first, setFirst] = useState(' ');
    const [last, setLast] = useState(' ');
    const [email, setEmail] = useState(' ');
    const [password, setPassword] = useState(' ');
    const [photo, setPhoto] = useState(' ');
    const [identity, setIdentity] = useState(' ');
    const [preference, setPreference] = useState(' ');
    const [question1, setQuestion1] = useState(' ');
    const [question2, setQuestion2] = useState(' ');
    const [question3, setQuestion3] = useState(' ');
    const [question4, setQuestion4] = useState(' ');
    const [question5, setQuestion5] = useState(' ');



    const available_areas = [{'zip': ['90210', '90038'], 'area': 'Bev Hills'}, {'zip': ['91406', '90029','91309',  
    '91310','91311','91313'], 'area': 'The Valley'}, {'zip': ['90401', '90265', '90731'], 'area': 'The Beach'}]


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
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('submitted')
    }
    return (
        <div>
        <h1>THIS NOT THE REGISTRATION TAB ROUTE TO REGISTRATION INSTEAD</h1>    
         <Form.Text><h2><strong>Registration Questions</strong></h2></Form.Text> 
            
            <Form onSubmit = {handleSubmit}>
    <Form.Group controlId="first">
    <Form.Label>First Name</Form.Label>
    <Form.Control type="text" placeholder="First Name" value={first} onChange={event => setFirst(event.target.value)} />
  </Form.Group>

  <Form.Group controlId="last">
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="text" placeholder="Last Name" value={last} onChange={event => setLast(event.target.value)} />
  </Form.Group>
  
  <Form.Group controlId="email">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter Email" value={email} onChange={event => setEmail(event.target.value)}/> 
  </Form.Group>

  <Form.Group controlId="password">
    <Form.Label>password</Form.Label>
    <Form.Control type="password" placeholder="Enter Password" value={password} onChange={event => setPassword(event.target.value)}/> 
  </Form.Group>

  <Form.Group controlId="area">

    <Form.Label>Enter your zipcode</Form.Label>
    <Form.Control  type="text" placeholder="90000" value={zipcode} onChange = {handleZipChange}/>
    <Form.Text><h2><strong>{area}</strong></h2></Form.Text>
  </Form.Group>
  
  <Form.Group controlId="identity">
    <Form.Label>How do you identify?</Form.Label>
    <Form.Control as = 'select' value={identity} onChange={event => setIdentity(event.target.value)} >
       
        <option>Select</option>
        <option>Man</option>
       <option>Woman</option>
       <option>Non-binary</option>  
    </Form.Control> 
  </Form.Group>

  <Form.Group controlId="preference">
    <Form.Label>Interested In:</Form.Label>
    <Form.Control as = 'select' value={preference} onChange={event => setPreference(event.target.value)} >
       
        <option>Select</option>
        <option>Man</option>
       <option>Woman</option>
       <option>Non-binary</option>  
    </Form.Control> 
  </Form.Group>

  <Form.Text><h2><strong>Intro Questionnaire</strong></h2></Form.Text>

  <Form.Group controlId="question1">
    <Form.Label>Why did you join LA LOCALS?</Form.Label>
    <Form.Control as = 'select' value={question1} onChange={event => setQuestion1(event.target.value)} >
       
        <option>Select</option>
        <option>a. I’m tired of the Tinder/Bumble scene</option>
       <option>b. I want to meet someone with out having to go on the 405</option>
       <option>c. I survived 2020 I can survive this app </option> 
       <option>d. I love social experiments </option> 
    </Form.Control> 
  </Form.Group>

  <Form.Group controlId="question2">
    <Form.Label>Your Uncle has just posted something offensive on Facebook your next move is to:</Form.Label>
    <Form.Control as = 'select' value={question2} onChange={event => setQuestion2(event.target.value)} >
       
        <option>Select</option>
        <option>a. I don’t have Facebook</option>
       <option>b. My uncle doesn’t have Facebook </option>
       <option>c. If it is on my status I will delete the comment  </option> 
       <option>d. Engage in a fight in the comment section because I like seeing the world the burn. </option> 
    </Form.Control> 
  </Form.Group>

  <Form.Group controlId="question3">
    <Form.Label>Instead of asking how old you are select which social media app you prefer?</Form.Label>
    <Form.Control as = 'select' value={question3} onChange={event => setQuestion3(event.target.value)} >
       
        <option>Select</option>
        <option>a. no socials because I’m the Unabomber </option>
       <option>b. It’s a real toss up between instagram and snapchat </option>
       <option>c. Tik Tok because of quarantine   </option> 
       <option>d. Facebook because I’m Mark Zuckerberg </option> 
    </Form.Control> 
  </Form.Group>

  <Form.Group controlId="question4">
    <Form.Label>It is post pandemic in Los Angeles what is the first thing you do?</Form.Label>
    <Form.Control as = 'select' value={question4} onChange={event => setQuestion4(event.target.value)} >
       
        <option>Select</option>
        <option>a. Go to the Abbey  </option>
       <option>b. The same thing I was doing before the pandemic: watching Netflix </option>
       <option>c. Get out of LA   </option> 
       <option>d. Scroll on the citizen app because I’ve already lost faith in humanity</option> 
    </Form.Control> 
  </Form.Group>

  <Form.Group controlId="question5">
    <Form.Label>Lastly what’s your favorite delivery app?: </Form.Label>
    <Form.Control as = 'select' value={question5} onChange={event => setQuestion5(event.target.value)} >
       
        <option>Select</option>
        <option>a. Postmates  </option>
       <option>b. Doordash  </option>
       <option>c. I actually cook all of my meals at home so I can’t relate</option> 
       <option>d. I don’t eat human food because I’m Mark Zuckerberg</option> 
    </Form.Control> 
  </Form.Group>



  <Button variant="primary" className="mt-5" type="submit">
    Submit
  </Button>



</Form>

            {/* <h1>

                {area}
               <input type="text" onChange={event => { addressEntered(event.target.value)}} />
            </h1> */}
        </div>
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