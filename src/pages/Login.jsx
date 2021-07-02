import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";

const Login = () => (
  <Grid textAlign="center" verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450, marginTop: "4rem" }}>
      <Header as="h2" color="black" textAlign="center">
        Log-in to your account
      </Header>
      <Form size="large">
        <Segment stacked>
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="E-mail address"
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
          />

          <Button color="black" fluid size="large">
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us? <a href="/">Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>
);

export default Login;
