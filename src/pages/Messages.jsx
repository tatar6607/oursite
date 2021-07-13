import React, {useEffect, useState} from 'react'
import { Button, Card } from 'semantic-ui-react'

import {useMessages} from '../contexts/MessagesContext';
import { useAuth } from "../contexts/AuthContext";

const Messages = () => {

    const {messages} = useMessages();
    const { currentUser } = useAuth();
    const [filteredData, setFilteredData] = useState(messages);

      useEffect(() => {
        setFilteredData(messages.filter((message) => message.email === currentUser.email ))
        console.log(filteredData);
      }, [])

    function displayMessages(){
         
        return filteredData.map((message, index)=>{
            return(
                <Card key={index}>
                <Card.Content>
                    <Card.Header>{message.firstName} {message.lastName}</Card.Header>
                    <Card.Meta>
                        <span className='date'>{message.email}</span>
                    </Card.Meta>
                    <Card.Description>
                        {message.message}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                    <Button basic color='green'>
                        Respond
                    </Button>
                    </div>
                </Card.Content>
                </Card>
            )
        })
    }
    return(
        <Card.Group>
            {
                messages && displayMessages()
            }
        </Card.Group>
    )
}

export default Messages