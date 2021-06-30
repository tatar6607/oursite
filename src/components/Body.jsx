import React from "react";
import { Container, Card, Icon, Header } from "semantic-ui-react";
import "./Body.css";
import datas from '../data/body_cardata';

const Body = () => {


  return (
    <div>
      <Container textAlign="center" className="body-card desc">
        <Header as="h1" style={{ padding: "15px" }}>
          What DO We DO?
        </Header>
        {/* <Card.Group centered items={datas} /> */}
        <Card.Group centered>
          {datas.map((info) => {
            const { header, description, icon, color } = info;
            return (
              <Card color={color} href="/">
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
    </div>
  );
};

export default Body;
