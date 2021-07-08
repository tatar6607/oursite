import React, { useState } from "react";
import {
  Grid,
  Form,
  Input,
  TextArea,
  Button,
  Container,
} from "semantic-ui-react";

import {useMessages} from "../contexts/MessagesContext";

const Contact = () => {
  const [err, setErr] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const {addMessage} = useMessages();
  const [sent, setSent] = useState(false);



  const handleFirstNameChange = (e) =>{
    setFirstName(e.target.value);
  }

  const handleLastNameChange = (e) =>{
    setLastName(e.target.value);
  }

  const handleMessageChange = (e) =>{
    setMessage(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    email.includes("@") ? setErr(false) : setErr(true);
  };

  async function handleSubmit(e){
        e.preventDefault();
        const newMessage = {
            firstName,
            lastName,
            email,
            message
        }
        try {
        await addMessage(newMessage)
        setSent(true)
        } catch (error) {
        console.log(error)
    }
  }

  const handleNewMessageClick = ()=>{
      console.log(sent);
    setSent(false);
  }

  const setContent = ()=>{
      if(sent){
          return(
            <div>
                <h3>
                    Message has been sent
                </h3>
                <Button onClick={handleNewMessageClick}>New Message</Button>
            </div>
          )
      }else{
        return(
            <Grid centered>
            <Grid.Row>
            <Grid.Column width="8">
                <Form onSubmit={handleSubmit}>
                <Form.Group widths="equal">
                    <Form.Input
                    fluid
                    label="First name"
                    placeholder="First name"
                    required
                    onChange={handleFirstNameChange}
                    />
                    <Form.Input
                    fluid
                    label="Last name"
                    placeholder="Last name"
                    required
                    onChange={handleLastNameChange}

                    />
                </Form.Group>
                <Form.Field
                    id="form-input-control-error-email"
                    control={Input}
                    label="Email"
                    required
                    placeholder="joe@schmoe.com"
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
                    placeholder="Message"
                    style={{ minHeight: "200px" }}
                    onChange={handleMessageChange}

                />
                <Form.Field
                    id="form-button-control-public"
                    control={Button}
                    content="Send"
                    // label="Label with htmlFor"
                />
                </Form>
            </Grid.Column>
            {/* <Grid.Column width="8" verticalAlign="middle">
            <Icon name="envelope" size="massive" color="orange">

            </Icon>
            </Grid.Column> */}
            </Grid.Row>
        </Grid>
        )
      }
  }

  return (
    <Container className="body-card desc" style={{ padding: "20px" }}>
        {
            setContent()
        }
    </Container>
  );
};

export default Contact;
