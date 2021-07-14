import React from "react";
import { Button, Card, Container, Segment } from "semantic-ui-react";

const Messages = ({data}) => {

  function displayMessages() {
    return data.map((message, index) => {
      return (
        <Card key={index}>
          <Card.Content>
            <Card.Header>
              {message.firstName} {message.lastName}
            </Card.Header>
            <Card.Meta>
              <span className="date">{message.email}</span>
            </Card.Meta>
            <Card.Description>{message.message}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Respond
              </Button>
            </div>
          </Card.Content>
        </Card>
      );
    });
  }
  return (

        <Card.Group>{data && displayMessages()}</Card.Group>
        // <Button basic color="blue" onClick={()=>{history.push("/profile")}}>
        //           Back to Profile
        //   </Button>
    );
};

export default Messages;
