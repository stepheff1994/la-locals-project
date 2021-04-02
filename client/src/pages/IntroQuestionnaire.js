import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap'


function IntroQuestionnaire({question1, setQuestion1,question2, setQuestion2, question3, setQuestion3,question4,setQuestion4, question5, setQuestion5}) {
 
  return (

<Form>
<Form.Text><h2><strong>Intro Questionnaire</strong></h2></Form.Text>

<Form.Group controlId="question1">
  <Form.Label>Why did you join LA LOCALS?</Form.Label>
  <Form.Control as='select' value={question1} onChange={event => setQuestion1(event.target.value)} >

    <option>Select</option>
    <option>a. I’m tired of the Tinder/Bumble scene</option>
    <option>b. I want to meet someone with out having to go on the 405</option>
    <option>c. I survived 2020 I can survive this app </option>
    <option>d. I love social experiments </option>
  </Form.Control>
</Form.Group>

<Form.Group controlId="question2">
  <Form.Label>Your Uncle has just posted something offensive on Facebook your next move is to:</Form.Label>
  <Form.Control as='select' value={question2} onChange={event => setQuestion2(event.target.value)} >

    <option>Select</option>
    <option>a. I don’t have Facebook</option>
    <option>b. My uncle doesn’t have Facebook </option>
    <option>c. If it is on my status I will delete the comment  </option>
    <option>d. Engage in a fight in the comment section because I like seeing the world the burn. </option>
  </Form.Control>
</Form.Group>

<Form.Group controlId="question3">
  <Form.Label>Instead of asking how old you are select which social media app you prefer?</Form.Label>
  <Form.Control as='select' value={question3} onChange={event => setQuestion3(event.target.value)} >

    <option>Select</option>
    <option>a. no socials because I’m the Unabomber </option>
    <option>b. It’s a real toss up between instagram and snapchat </option>
    <option>c. Tik Tok because of quarantine   </option>
    <option>d. Facebook because I’m Mark Zuckerberg </option>
  </Form.Control>
</Form.Group>

<Form.Group controlId="question4">
  <Form.Label>It is post pandemic in Los Angeles what is the first thing you do?</Form.Label>
  <Form.Control as='select' value={question4} onChange={event => setQuestion4(event.target.value)} >

    <option>Select</option>
    <option>a. Go to the Abbey  </option>
    <option>b. The same thing I was doing before the pandemic: watching Netflix </option>
    <option>c. Get out of LA   </option>
    <option>d. Scroll on the citizen app because I’ve already lost faith in humanity</option>
  </Form.Control>
</Form.Group>

<Form.Group controlId="question5">
  <Form.Label>Lastly what’s your favorite delivery app?: </Form.Label>
  <Form.Control as='select' value={question5} onChange={event => setQuestion5(event.target.value)} >

    <option>Select</option>
    <option>a. Postmates  </option>
    <option>b. Doordash  </option>
    <option>c. I actually cook all of my meals at home so I can’t relate</option>
    <option>d. I don’t eat human food because I’m Mark Zuckerberg</option>
  </Form.Control>
</Form.Group>
</Form>

)
}



export default IntroQuestionnaire
