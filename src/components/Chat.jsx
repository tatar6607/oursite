import React, {useState, useEffect} from 'react';
import { Button, Comment, Form, Header } from 'semantic-ui-react';


import { useChat } from "../contexts/ChatContext";


const Chat = ({chatMember, currentUserProfil}) => {
    const {chats, addChat} = useChat();

    const [chatReplyMessage, setChatReplyMessage] = useState("");
    const [currentUserChats, setCurrentUserChats] = useState([]);

    useEffect(() => {
        setCurrentUserChats(
            chats.filter((chat) => (chat.toEmail === currentUserProfil[0].email && chat.fromEmail === chatMember.email) ||
                                 (chat.toEmail === chatMember.email && chat.fromEmail === currentUserProfil[0].email))
          );
    }, [chats, chatMember])
    
    const displayChat = ()=>{
        if(currentUserChats.length > 0){
            var nextUser = currentUserChats[0].fromEmail;
            var start = true;

            return currentUserChats.map((chat, index)=>{
                const {text, from, dateString, fromEmail} = chat;
                
                if(fromEmail === nextUser && !start){
                    nextUser = fromEmail;
                    var margin = fromEmail === currentUserProfil[0].email? "50%" : "0%"
                    return(
                        <>
                            <Comment.Metadata key={dateString} style={{marginLeft: `${margin}`}}>
                                <div>{dateString}</div>
                            </Comment.Metadata>
                            <Comment.Text style={{marginLeft: `${margin}`}}>{text}</Comment.Text>
                        </>
                    )
                }else{
                    start = false;
                    nextUser = fromEmail;
                    var margin = fromEmail === currentUserProfil[0].email? "50%" : "0%"
                    return(
                        <Comment key={dateString} style={{marginLeft: `${margin}`}}>
                            <Comment.Avatar 
                                src={fromEmail === currentUserProfil[0].email? currentUserProfil[0].image : chatMember.image} />
                            <Comment.Content>
                            <Comment.Author as='a'>{
                                fromEmail === currentUserProfil[0].email? 'you' : from
                            }</Comment.Author>
                            <Comment.Metadata>
                                <div>{dateString}</div>
                            </Comment.Metadata>
                            <Comment.Text>{text}</Comment.Text>
                            </Comment.Content>
                        </Comment>
                    )
                }
            });
        }
        
    }
    const handleReplyChange = (e) => {
        setChatReplyMessage(e.target.value);
      };

    const chatReply = ()=>{
        const chatMessage = {
            text: chatReplyMessage,
            to: chatMember.header,
            toEmail: chatMember.email,
            from: currentUserProfil[0].header,
            fromEmail: currentUserProfil[0].email
        }
        setChatReplyMessage("");
        // console.log(chatMessage);
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

export default Chat;
