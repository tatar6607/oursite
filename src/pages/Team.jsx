import React from "react";
import { Container, Card, Header, Image } from "semantic-ui-react";
import "./Home.css";
// import team from "../data/team_data ";
import { useTeam } from "../contexts/TeamContext";

const Team = () => {
  const { teamMembers } = useTeam();

  return (
    <div>
      <Container textAlign="center" className="body-card desc">
        <Header as="h1" style={{ padding: "15px" }}>
          Our Team
        </Header>
        <Card.Group centered>
          {teamMembers.map((member, i, arr) => {
            const { header, description, image, title, docId } = member;
            return (
              <Card raised={true} key={docId}>
                <Card.Content>
                  <Card.Header className="icon-padding">
                    <Image src={image} alt="" size="small" circular />
                  </Card.Header>
                    <Card.Header content={header} />
                    <Card.Meta>
                      <span>{title}</span>
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