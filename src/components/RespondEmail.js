import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import {
    Grid,
    Form,
    Input,
    TextArea,
    Button,
    Container,
  } from "semantic-ui-react";

export default function RespondEmail({responseContact, handleMessageButtonClick}) {


  const [err, setErr] = useState(false);
  const [firstName, setFirstName] = useState(responseContact.firstName);
  const [lastName, setLastName] = useState(responseContact.lastName);
  const [email, setEmail] = useState(responseContact.email);
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);


  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    email.includes("@") ? setErr(false) : setErr(true);
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const newMessage = {
      firstName,
      lastName,
      email,
      message,
    };
    try {
        emailjs.sendForm(process.env.REACT_APP_emailjs_service_id, process.env.REACT_APP_emailjs_template_id, e.target, process.env.REACT_APP_emailjs_user_id)
        .then((result) => {
            window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
        }, (error) => {
            console.log(error.text);
        });
      setSent(true);
    } catch (error) {
      console.log(error);
    }
  }


  const handleNewMessageClick = () => {
    console.log(sent);
    setSent(false);
  };

  const setContent = () => {
    if (sent) {
      return (
        <div>
          <h3>Message has been sent</h3>
          <Button onClick={handleNewMessageClick}>New Message</Button>
        </div>
      );
    } else {
      return (
        <Grid centered>
          <Grid.Row>
            <Grid.Column width="8">
              <Form onSubmit={handleSubmit}>
                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    label="First name"
                    value={firstName}
                    required
                    onChange={handleFirstNameChange}
                  />
                  <Form.Input
                    fluid
                    label="Last name"
                    value={lastName}
                    required
                    onChange={handleLastNameChange}
                  />
                </Form.Group>
                <Form.Field
                  id="form-input-control-error-email"
                  control={Input}
                  label="Email"
                  required
                  value={email}
                  error={
                    err && {
                      content: "Please enter a valid email address",
                      pointing: "below",
                    }
                  }
                  onChange={handleEmailChange}
                />
                <Form.Field
                  id="form-textarea-control-opinion"
                  control={TextArea}
                  label="Message"
                  required
                  value={message}
                  style={{ minHeight: "200px" }}
                  onChange={handleMessageChange}
                />
                <Form.Field
                  id="form-button-control-public"
                  control={Button}
                  content="Send"
                  onClick={handleMessageButtonClick}
                />
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      );
    }
  };

  return (
    <Container className="body-card desc" style={{ padding: "20px" }}>
      {setContent()}
    </Container>
  );
}