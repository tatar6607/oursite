import React, {useState } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  // Message,
  Segment,
} from "semantic-ui-react";
import {useHistory} from 'react-router-dom';

import { useAuth } from "../contexts/AuthContext";

const Login = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const {login} = useAuth();
  const history = useHistory();

  function handleEmailChange(target) {
    setEmail(target.value);
  }

  function handlePasswordChange(target) {
    setPassword(target.value);
  }
  async function handleSubmit(e){
    e.preventDefault();

    try {
      await login(email, password);
      history.push('/profile');
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Grid textAlign="center" verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450, marginTop: "4rem" }}>
        <Header as="h2" color="black" textAlign="center">
          Log-in to your account
        </Header>
        <Form size="large" onSubmit={handleSubmit}>
          <Segment stacked>
    
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
              onChange={(e) => handleEmailChange(e.target)}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              onChange={(e) => handlePasswordChange(e.target)}
            />
            <Button color="black" fluid size="large">
              Login
            </Button>
          </Segment>
        </Form>
        {/* <Message>
          New to us? <a href="/">Sign Up</a>
        </Message> */}
      </Grid.Column>
    </Grid>
  );
}

export default Login;
