import React from "react";
import { Container, Grid, Header, Image } from "semantic-ui-react";
import "./Home.css";
import clients from "../data/clients_data";
const Clients = () => {
  return (
    <Container textAlign="center" className="body-card desc">
      <Header as="h1" style={{ padding: "20px" }}>
        Our Clients
      </Header>
      {/* <Card.Group centered items={clients} /> */}
      <Grid container centered relaxed columns={6}>
        {clients.map((row) => {
          return (
            <Grid.Row>
              {row.map((client) => {
                return (
                  <Grid.Column>
                    <Image src={client.image} size="large" />
                  </Grid.Column>
                );
              })}
            </Grid.Row>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Clients;
