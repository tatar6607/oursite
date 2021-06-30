import React from "react";
import { Container, Card, Icon, Header } from "semantic-ui-react";
import "./Home.css";
import datas from "../data/body_card_data";
const Work = () => {
  
  return (
      <Container textAlign="center" className="body-card desc">
        <Header as="h1" style={{ padding: "15px" }}>
          What DO We DO?
        </Header>
        {/* <Card.Group centered items={datas} /> */}
        <Card.Group centered>
          {datas.map((info) => {
            const { header, description, icon, color } = info;
            return (
              <Card color={color} href="/" raised={true}>
                <Card.Content>
                  <Card.Header className="icon-padding">
                    <Icon name={icon} size="big" color={color} />
                  </Card.Header>
                  <Card.Header content={header} />
                </Card.Content>
                <Card.Content description={description} />
              </Card>
            );
          })}
        </Card.Group>
      </Container>
  );
};

export default Work;