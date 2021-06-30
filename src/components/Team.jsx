import React from "react";
import { Container, Card, Header, Image } from "semantic-ui-react";
import "./Body.css";
import team from "../data/team_data ";
const Team = () => {
  
  return (
    <div>
      <Container textAlign="center" className="body-card desc">
        <Header as="h1" style={{ padding: "15px" }}>
          Our Team
        </Header>
        <Card.Group centered>
          {team.map((info) => {
            const { header, description, image, color, title } = info;
            return (
              <Card color={color} href="/" raised={true}>
                <Card.Content>
                  <Card.Header className="icon-padding">
                  <Image
                    src={image}
                    alt=""
                    size='small'
                     circular
                 />
                  </Card.Header>
                  <Card.Header content={header} />
                  <Card.Meta>
                      <span>
                        {title}
                      </span>
                  </Card.Meta>
                </Card.Content>
                <Card.Content description={description} />
              </Card>
            );
          })}
        </Card.Group>
      </Container>
    </div>
  );
};

export default Team;