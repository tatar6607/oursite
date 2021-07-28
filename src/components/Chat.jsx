import React from 'react';
import { Button, Comment, Form, Header } from 'semantic-ui-react'

const Chat = ({data, chatMember}) => {

    const displayChat = ()=>{
            const newChatData = data.filter((chat)=> chat.fromEmail === chatMember);

            return newChatData.map((chat, index)=>{
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
                        </Comment.Content>
                    </Comment>
                )
            })
    }

    return (
        <Comment.Group style={{marginRight: "5px"}}>
            <Header as='h4' dividing>
            Chat
            </Header>
            {
                data && displayChat()
            }
            <Form reply size="mini">
                <Form.TextArea style={{height:"10%"}}/>
                <Button content='Add Reply' labelPosition='left' icon='edit' primary />
            </Form>
      </Comment.Group>
    )
}

export default Chat
