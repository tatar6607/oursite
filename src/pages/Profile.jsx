import React, { useState, useEffect } from "react";
import {  Header, Button, Label, Grid } from "semantic-ui-react";
import {useHistory} from 'react-router-dom';

import { useTeam } from "../contexts/TeamContext";
import { useAuth } from "../contexts/AuthContext";
import { useMessages } from "../contexts/MessagesContext";
import { useChat } from "../contexts/ChatContext";
import Messages from '../components/Messages';
import Chat from "../components/Chat";
import ProfileCard from "../components/ProfileCard";
import Members from "../components/Members";

const Profile = () => {
  const { teamMembers } = useTeam();
  const { currentUser } = useAuth();
  const { messages } = useMessages();
  const {chats} = useChat();

  const [messageButtonText, setMessageButtonText] = useState('Show Messages');
  const [chatButtonText, setChatButtonText] = useState('Show Chat');
  const [currentUserProfil, setCurrentUserProfil] = useState([]);
  const [currentUserMessages, setCurrentUserMessages] = useState([]);
  const [currentUserChats, setCurrentUserChats] = useState([]);
  const [showMessages, setShowMessages] = useState(false);
  const [showCHat, setShowCHat] = useState(false);
  const [chatMember, setChatMember] = useState(null);

  
  const history = useHistory();

  useEffect(() => {
    setCurrentUserProfil(
      teamMembers.filter((member) => member.email === currentUser.email)
    );

    setCurrentUserMessages(
      messages.filter((message) => message.personEmail === currentUser.email)
    );
    setCurrentUserChats(chats);
  }, [teamMembers, messages, chats]);

  const handleMessageButtonClick = (e)=>{
    if(showMessages){
      setShowMessages(false);
      setMessageButtonText('Show Messages');
    }else{
      setShowMessages(true);
      setMessageButtonText('Hide Messages');
    }
    
  };

  const handleChatButtonClick = (e)=>{
    if(showCHat){
      setShowCHat(false);
      setChatButtonText('Show Chat');
    }else{
      setShowCHat(true);
      setChatButtonText('Hide Chat');
    }
    
  };


  return (
    <div>
        <Header as="h1" style={{ padding: "15px" }} textAlign="center">
          Profile
        </Header>
        <Grid columns={3} >
          <Grid.Column width={3} textAlign="center">
            <ProfileCard currentUserProfil={currentUserProfil} currentUser={currentUser}/>
        </Grid.Column>
        <Grid.Column width={8} textAlign="center">
         
          <Button as='div' labelPosition='right' onClick={handleMessageButtonClick}>
            <Button color='red'>
              {messageButtonText}
            </Button>
            <Label as='a' basic color='red' pointing='left'>
              {currentUserMessages.length}
            </Label>
          </Button>
          {
            showMessages && <Messages data = {currentUserMessages} />
          }
          </Grid.Column>
          <Grid.Column width={5}>
            <Header as="h3" style={{ padding: "5px" }} textAlign="center">
              Members
            </Header>
          {/* <Button as='div' labelPosition='right' onClick={handleChatButtonClick}>
            <Button color='blue'>
              {chatButtonText}
            </Button>
            <Label as='a' basic color='red' pointing='left'>
              {currentUserChats.length}
            </Label>
          </Button>
          {
            showCHat && <Chat data = {currentUserChats} />
          } */}
          <Members 
            members={teamMembers}
            currentUser={currentUser}
            setShowCHat={setShowCHat}
            setChatMember={setChatMember}
            />
          {
            showCHat && <Chat data = {currentUserChats} chatMember={chatMember}/>
          }
          </Grid.Column>
          </Grid>
      {/* </Container> */}
    </div>
  );
};

export default Profile;
