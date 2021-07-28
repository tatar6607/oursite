import React from 'react';
import { Button, Comment, Form, Header } from 'semantic-ui-react'

const Chat = ({data}) => {

    const displayChat = ()=>{
            return data.map((chat, index)=>{
                const {text, from, to, dateString} = chat;
                return(
                    <Comment key={index}>
                        <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
                        <Comment.Content>
                        <Comment.Author as='a'>{from}</Comment.Author>
                        <Comment.Metadata>
                            <div>{dateString}</div>
                        </Comment.Metadata>
                        <Comment.Text>{text}</Comment.Text>
                        <Comment.Actions>
                            <Comment.Action>Reply</Comment.Action>
                        </Comment.Actions>
                        </Comment.Content>
                    </Comment>
                )
            })
    }

    return (
        <Comment.Group>
            <Header as='h4' dividing>
            Chat
            </Header>
            {
                data && displayChat()
            }
            <Form reply>
                <Form.TextArea />
                <Button content='Add Reply' labelPosition='left' icon='edit' primary />
            </Form>
      </Comment.Group>
    )
}

export default Chat
