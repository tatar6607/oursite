import React, { useEffect, useState } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";
import firebase from "../firebase";

const Login = () => {
  const [users, setUsers] = useState([]);


  const getUsers = () => {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setUsers(items)
    });
  }

  useEffect(() => {
    getUsers();
  }, []);

  console.log(users);
  return (
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
}

export default Login;
