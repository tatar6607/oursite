import React from "react";
import { Container, Grid, Header, Image } from "semantic-ui-react";
import "./Home.css";
import cleints from "../data/clients_data";
const Clients = () => {
  
  return (
      <Container textAlign="center" className="body-card desc clients">
        <Header as="h1" style={{ padding: "15px" }}>
          Our Clients
        </Header>
        {/* <Card.Group centered items={cleints} /> */}
        <Grid>
            {
                cleints.map((row)=>{
                    return(
                        <Grid.Row columns={row.length}>
                            {row.map((client)=>{
                                return(
                                    <Grid.Column>
                                        <Image src={client.image} size="small"/>
                                    </Grid.Column>
                                )
                            })}

                        </Grid.Row>
                    )
                })
            }
        </Grid>
      </Container>
  );
};

export default Clients;