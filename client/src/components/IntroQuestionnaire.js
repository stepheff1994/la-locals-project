import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap'


function IntroQuestionnaire(props) {
 
  return (

<Form className="text-white">
<Form.Text className="text-white"><h2><strong>Intro Questionnaire</strong></h2></Form.Text>

<Form.Group controlId="question1">
  <Form.Label>Why did you join LA LOCALS?</Form.Label>
  <Form.Control as='select' value={props.question1} onChange={event => props.setQuestion1(event.target.value)} >

    <option>Select</option>
    <option value='1' >a. I’m tired of the Tinder/Bumble scene</option>
    <option value='2'>b. I want to meet someone with out having to go on the 405</option>
    <option value='3'>c. I survived 2020 I can survive this app </option>
    <option value='4'>d. I love social experiments </option>
  </Form.Control>
</Form.Group>

<Form.Group controlId="question2">
  <Form.Label>Your Uncle has just posted something offensive on Facebook your next move is to:</Form.Label>
  <Form.Control as='select' value={props.question2} onChange={event => props.setQuestion2(event.target.value)} >

    <option>Select</option>
    <option value='1 '>a. I don’t have Facebook</option>
    <option value='2'>b. My uncle doesn’t have Facebook </option>
    <option value='3'>c. If it is on my status I will delete the comment  </option>
    <option value='4'>d. Engage in a fight in the comment section because I like seeing the world the burn. </option>
  </Form.Control>
</Form.Group>

<Form.Group controlId="question3">
  <Form.Label>Instead of asking how old you are select which social media app you prefer?</Form.Label>
  <Form.Control as='select' value={props.question3} onChange={event => props.setQuestion3(event.target.value)} >

    <option>Select</option>
    <option value='1'>a. no socials because I’m the Unabomber </option>
    <option value='2'>b. It’s a real toss up between instagram and snapchat </option>
    <option value='3'>c. Tik Tok because of quarantine   </option>
    <option value='4'>d. Facebook because I’m Mark Zuckerberg </option>
  </Form.Control>
</Form.Group>

<Form.Group controlId="question4">
  <Form.Label>It is post pandemic in Los Angeles what is the first thing you do?</Form.Label>
  <Form.Control as='select' value={props.question4} onChange={event => props.setQuestion4(event.target.value)} >

    <option>Select</option>
    <option value='1'>a. Go to the Abbey  </option>
    <option value='2'>b. The same thing I was doing before the pandemic: watching Netflix </option>
    <option value='3'>c. Get out of LA   </option>
    <option value='4'>d. Scroll on the citizen app because I’ve already lost faith in humanity</option>
  </Form.Control>
</Form.Group>

<Form.Group controlId="question5">
  <Form.Label>Lastly what’s your favorite delivery app?: </Form.Label>
  <Form.Control as='select' value={props.question5} onChange={event => props.setQuestion5(event.target.value)} >

    <option>Select</option>
    <option value='1'>a. Postmates  </option>
    <option value='2'>b. Doordash  </option>
    <option value='3'>c. I actually cook all of my meals at home so I can’t relate</option>
    <option value='4'>d. I don’t eat human food because I’m Mark Zuckerberg</option>
  </Form.Control>
</Form.Group>
</Form>

)
}



export default IntroQuestionnaire
