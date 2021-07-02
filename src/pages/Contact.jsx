import React, { useState } from "react";
import {
  Grid,
  Form,
  Input,
  TextArea,
  Button,
  Container,
} from "semantic-ui-react";

const Contact = () => {
  const [err, setErr] = useState(false);
  const handleEmail = (e) => {
    let email = e.target.value;
    email.includes("@") ? setErr(false) : setErr(true);
  };

  return (
    <Container className="body-card desc" style={{ padding: "20px" }}>
      <Grid centered>
        <Grid.Row>
          <Grid.Column width="8">
            <Form>
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  label="First name"
                  placeholder="First name"
                  required
                />
                <Form.Input
                  fluid
                  label="Last name"
                  placeholder="Last name"
                  required
                />
              </Form.Group>
              <Form.Field
                id="form-input-control-error-email"
                control={Input}
                label="Email"
                placeholder="joe@schmoe.com"
                error={
                  err && {
                    content: "Please enter a valid email address",
                    pointing: "below",
                  }
                }
                onChange={handleEmail}
              />
              <Form.Field
                id="form-textarea-control-opinion"
                control={TextArea}
                label="Message"
                placeholder="Message"
                style={{ minHeight: "200px" }}
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
    </Container>
  );
};

export default Contact;
