import React from "react";
import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment,
} from "semantic-ui-react";

function FooterMenu() {
  return (
    <div>
      <Segment
        inverted
        vertical
        style={{
          margin: "5em 0em 0em",
          padding: "5em 0em",
        }}
        attached="bottom"
        pushing
      >
        <Container textAlign="center">
          <Grid divided inverted stackable>
            <Grid.Column width={4}>
              <Header inverted as="h4" content="Services" />
              <List link inverted>
                <List.Item as="a">Dedicated Teams</List.Item>
                <List.Item as="a">Architecture</List.Item>
                <List.Item as="a">UX / UI Design</List.Item>
                <List.Item as="a">Web Development</List.Item>
                <List.Item as="a">
                  Outsourcing Software Development Services
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={2}>
              <Header inverted as="h4" content="Technologies" />
              <List link inverted>
                <List.Item as="a">Internet of Things</List.Item>
                <List.Item as="a">Link Two</List.Item>
                <List.Item as="a">Link Three</List.Item>
                <List.Item as="a">Link Four</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={2}>
              <Header inverted as="h4" content="Platforms" />
              <List link inverted>
                <List.Item as="a">iOS</List.Item>
                <List.Item as="a">Android</List.Item>
                <List.Item as="a">Windows</List.Item>
                <List.Item as="a">Hybrid Platform</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={2}>
              <Header inverted as="h4" content="Technologies" />
              <List link inverted>
                <List.Item as="a">Internet of Things</List.Item>
                <List.Item as="a">Link Two</List.Item>
                <List.Item as="a">Link Three</List.Item>
                <List.Item as="a">Link Four</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={2}>
              <Header inverted as="h4" content="Company" />
              <List link inverted>
                <List.Item as="a">About</List.Item>
                <List.Item as="a">Team</List.Item>
                <List.Item as="a">Careers</List.Item>
                <List.Item as="a">Clients</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header
                text-transform="uppercase"
                inverted
                as="h4"
                content="Footer"
              />
              <List link inverted>
                <List.Item as="a">Linki buraya Bıraktım</List.Item>
              </List>
              <p>Footer Bizim işimiz.</p>
            </Grid.Column>
          </Grid>

          <Divider inverted section />
          <Image
            margin-left="auto"
            margin-right="auto"
            centered
            size="medium"
            src="../images/logo.png"
          />
          <List horizontal inverted divided link size="small">
            <List.Item as="a" href="#">
              Site Map
            </List.Item>
            <List.Item as="a" href="#">
              Contact Us
            </List.Item>
            <List.Item as="a" href="#">
              Terms and Conditions
            </List.Item>
            <List.Item as="a" href="#">
              Privacy Policy
            </List.Item>
          </List>
        </Container>
      </Segment>
    </div>
  );
}

export default FooterMenu;
