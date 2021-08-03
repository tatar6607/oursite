import React, { useState, useEffect } from "react";
import { Button, Comment, Form, Header, Segment } from "semantic-ui-react";

import { useChat } from "../contexts/ChatContext";
import { MatchExpression } from "../utils/Regex";
import './Chat.css';

const Chat = ({ chatMember, currentUserProfil }) => {
    const { chats, addChat } = useChat();

    const [chatReplyMessage, setChatReplyMessage] = useState(null);
    const [currentUserChats, setCurrentUserChats] = useState([]);

    useEffect(() => {
        setCurrentUserChats(
            chats.filter(
                (chat) =>
                    (chat.toEmail === currentUserProfil[0].email &&
                        chat.fromEmail === chatMember.email) ||
                    (chat.toEmail === chatMember.email &&
                        chat.fromEmail === currentUserProfil[0].email)
            )
        );
    }, [chats, chatMember]);

    

    const displayChat2 = () => {
        const elementsArray = [];
        if (currentUserChats.length > 0) {
            var index = 0
            var currentUser = currentUserChats[index].fromEmail;
            var nextUser = currentUserChats[index+1] ? currentUserChats[index+1].fromEmail : null;
            var start = true;

            const addNewComment = () =>{
                const moreComments = [];
                while(currentUser === nextUser &&  index < currentUserChats.length){
                    const chat = currentUserChats[index];
                    const { text, dateString, fromEmail } = chat;
                    var style = fromEmail === currentUserProfil[0].email ? "from-me" : "from-them";
                    moreComments.push(
                        <>
                            <Comment.Metadata>
                                <div>{dateString}</div>
                            </Comment.Metadata>
                            <Comment.Text className={`chatMessage ${style}`}>{text}</Comment.Text>
                        </>
                    )
                    currentUser = fromEmail
                    nextUser = index < currentUserChats.length -1 ? currentUserChats[index+1].fromEmail : null;
                    index++
                }
                index--
                return moreComments;
            }

            while (index < currentUserChats.length) {
                const chat = currentUserChats[index];
                const { text, from, dateString, fromEmail } = chat;

                if (currentUser === nextUser && !start) {
                    elementsArray.splice(-1);
                    const { text, from, dateString, fromEmail } = currentUserChats[index-1];
                    var margin = fromEmail === currentUserProfil[0].email ? "50%" : "0%";
                    var style = fromEmail === currentUserProfil[0].email ? "from-me" : "from-them";
                    elementsArray.push(
                       <Comment key={dateString} style={{ marginLeft: `${margin}`}}>
                            <Comment.Avatar
                                src={
                                    fromEmail === currentUserProfil[0].email
                                        ? currentUserProfil[0].image
                                        : chatMember.image
                                }
                                // style={{float:`${float}`}}
                            />
                            <Comment.Content>
                                <Comment.Author as="a" >
                                    {fromEmail === currentUserProfil[0].email ? "Me" : from}
                                </Comment.Author>
                                <br />
                                <Comment.Metadata>
                                    <div>{dateString}</div>
                                </Comment.Metadata>
                                <Comment.Text className={`chatMessage ${style}`}>{text}</Comment.Text>
                                {
                                    addNewComment()
                                }
                            </Comment.Content>
                        </Comment>
                    );
                    currentUser = fromEmail
                    nextUser = index < currentUserChats.length -1 ? currentUserChats[index+1].fromEmail : null;
                } else {
                    var margin = fromEmail === currentUserProfil[0].email ? "50%" : "0%";
                    var style = fromEmail === currentUserProfil[0].email ? "from-me" : "from-them";
                    elementsArray.push(
                        <Comment key={dateString} style={{ marginLeft: `${margin}` }}>
                            <Comment.Avatar
                                src={
                                    fromEmail === currentUserProfil[0].email
                                        ? currentUserProfil[0].image
                                        : chatMember.image
                                }
                            />
                            <Comment.Content>
                                <Comment.Author as="a">
                                    {fromEmail === currentUserProfil[0].email ? "you" : from}
                                </Comment.Author>
                                <Comment.Metadata>
                                    <div>{dateString}</div>
                                </Comment.Metadata>
                                <Comment.Text className={`chatMessage ${style}`}>{text}</Comment.Text>
                            </Comment.Content>
                        </Comment>
                    );
                }
                start = false;
                currentUser = fromEmail
                nextUser = index < currentUserChats.length -1 ? currentUserChats[index+1].fromEmail : null;
                index++
                
            }
        }

        return elementsArray;
    };
    const handleReplyChange = (e) => {
        setChatReplyMessage(e.target.value);
    };

    const chatReply = () => {
        const chatMessage = {
            text: chatReplyMessage,
            to: chatMember.header,
            toEmail: chatMember.email,
            from: currentUserProfil[0].header,
            fromEmail: currentUserProfil[0].email,
        };
        setChatReplyMessage("");
        // console.log(chatMessage);
        if (!MatchExpression(chatReplyMessage).onlyWhiteSpace && chatReplyMessage) {
            addChat(chatMessage);
        } else {
            alert("Please enter text to sent chat");
        }
    };

    const pressEnter = (event) => {
        console.log("message");
        console.log(chatReplyMessage);
        if (event.keyCode === 13) {
            chatReply();
        }
    };

    return (

        <Comment.Group style={{ marginRight: "5px" }}>
            <Header as="h4" dividing>
                Chat
                </Header>
            <Segment style={{ overflow: 'auto', maxHeight: '50vh' }}>
                {currentUserChats && displayChat2()}
            </Segment>
            <Form reply size="mini">
                <Form.TextArea
                    style={{ height: "10%" }}
                    onChange={handleReplyChange}
                    value={chatReplyMessage}
                    onKeyDown={(e) => pressEnter(e)}
                />
                <Button
                    type="submit"
                    content="Add Reply"
                    labelPosition="left"
                    icon="edit"
                    primary
                    onClick={chatReply}
                />
            </Form>
        </Comment.Group>
    );
};

export default Chat;
