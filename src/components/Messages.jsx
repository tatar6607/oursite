import React from "react";
import { Button, Card } from "semantic-ui-react";

const Messages = ({data, setResponseContact, setShowResponseForm, handleMessageButtonClick}) => {

  const handleResponseClick = (e, message)=>{
    setResponseContact(message);
    handleMessageButtonClick(e);
    setShowResponseForm(true);

  }


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
              <Button basic color="green" onClick={(e)=>handleResponseClick(e, message)}>
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
    );
};

export default Messages;
