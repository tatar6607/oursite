import React, {useState, useEffect} from 'react';
import { Button, Comment, Form, Header } from 'semantic-ui-react'

import { useChat } from "../contexts/ChatContext";

const Chat = ({chatMember, currentUser}) => {
    const {chats, addChat} = useChat();

    const [chatReplyMessage, setChatReplyMessage] = useState("");
    const [currentUserChats, setCurrentUserChats] = useState([]);

    useEffect(() => {
        setCurrentUserChats(
            chats.filter((chat) => (chat.toEmail === currentUser.email && chat.fromEmail === chatMember) ||
                                 (chat.toEmail === chatMember && chat.fromEmail === currentUser.email))
          );
          console.log(currentUserChats)
    }, [chats])

    const displayChat = ()=>{

        if(currentUserChats){
            return currentUserChats.map((chat, index)=>{
                const {text, from, to, dateString, fromEmail} = chat;
                return(
                    <Comment key={index}>
                        <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
                        <Comment.Content>
                        <Comment.Author as='a'>{
                            fromEmail === currentUser.email? 'you' : from
                        }</Comment.Author>
                        <Comment.Metadata>
                            <div>{dateString}</div>
                        </Comment.Metadata>
                        <Comment.Text>{text}</Comment.Text>
                        </Comment.Content>
                    </Comment>
                )
            });
        }
        
    }
    const handleReplyChange = (e) => {
        setChatReplyMessage(e.target.value);
      };

    const chatReply = ()=>{
        const {from, fromEmail, to, toEmail} = currentUserChats[0];

        const chatMessage = {
            text: chatReplyMessage,
            to: from,
            toEmail: fromEmail,
            from: to,
            fromEmail: toEmail
        }
        setChatReplyMessage("");
        addChat(chatMessage);
    }

    return (
        <Comment.Group style={{marginRight: "5px"}}>
            <Header as='h4' dividing>
            Chat
            </Header>
            {
                currentUserChats && displayChat()
            }
            <Form reply size="mini">
                <Form.TextArea style={{height:"10%"}} onChange={handleReplyChange} value={chatReplyMessage}/>
                <Button content='Add Reply' labelPosition='left' icon='edit' primary onClick={chatReply}/>
            </Form>
      </Comment.Group>
    )
}

export default Chat
