import React from 'react'
import { Button, Card } from 'semantic-ui-react'

import {useMessages} from '../contexts/MessagesContext';

const Messages = () => {

    const {messages} = useMessages();

    function displayMessages(){
        return messages.map((message)=>{
            return(
                <Card>
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