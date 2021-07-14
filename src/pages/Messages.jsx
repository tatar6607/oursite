import React, { useEffect, useState } from "react";
import { Button, Card, Container, Segment } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

import { useMessages } from "../contexts/MessagesContext";
import { useAuth } from "../contexts/AuthContext";

const Messages = () => {
  const { messages } = useMessages();
  const { currentUser } = useAuth();
  const [filteredData, setFilteredData] = useState(messages);
  const history = useHistory();

  useEffect(() => {
    setFilteredData(
      messages.filter((message) => message.personEmail === currentUser.email)
    );
    // console.log(filteredData);
  }, []);

  function displayMessages() {
    return filteredData.map((message, index) => {
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
    <Container>
      <Segment>
        <Card.Group>{messages && displayMessages()}</Card.Group>
      </Segment>
      <Segment>
        <Button basic color="blue" onClick={()=>{history.push("/profile")}}>
                  Back to Profile
          </Button>
        </Segment>
    </Container>
    );
};

export default Messages;
