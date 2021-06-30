import React from "react";
import { Container, Card, Icon, Header } from "semantic-ui-react";
import "./Body.css";

const Body = () => {
  const datas = [
    {
      header: "Test Automation",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a 
                    type specimen book. It has survived not only five centuries`,
      icon: "code icon",
      color: "red",
    },
    {
      header: "Cloud Computing",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a 
                            type specimen book. It has survived not only five centuries`,
      icon: "cloud icon",
      color: "orange",
    },
    {
      header: "Analytics",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a 
                    type specimen book. It has survived not only five centuries`,
      icon: "chart bar icon",
      color: "yellow",
    },
    {
      header: "AI/ML",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a 
                    type specimen book. It has survived not only five centuries`,
      icon: "desktop icon",
      color: "olive",
    },
    {
      header: "DevOPs",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a 
                    type specimen book. It has survived not only five centuries`,
      icon: "server icon",
      color: "green",
    },
    {
      header: "Mobile Development",
      description: `,Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a 
                    type specimen book. It has survived not only five centuries`,
      icon: "mobile alternate icon",
      color: "teal",
    },
  ];

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
