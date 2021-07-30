import React, { useState, useEffect } from "react";
import {  Header, Button, Label, Grid } from "semantic-ui-react";
import {useHistory} from 'react-router-dom';

import { useTeam } from "../contexts/TeamContext";
import { useAuth } from "../contexts/AuthContext";
import { useMessages } from "../contexts/MessagesContext";

import Messages from '../components/Messages';
import Chat from "../components/Chat";
import ProfileCard from "../components/ProfileCard";
import Members from "../components/Members";
import RespondEmail from "../components/RespondEmail";

const Profile = () => {
  const { teamMembers } = useTeam();
  const { currentUser } = useAuth();
  const { messages } = useMessages();
  

  const [messageButtonText, setMessageButtonText] = useState('Show Messages');
  const [responseContact, setResponseContact] = useState(null);
  const [currentUserProfil, setCurrentUserProfil] = useState([]);
  const [currentUserMessages, setCurrentUserMessages] = useState([]);
  const [showMessages, setShowMessages] = useState(false);
  const [showResponseForm, setShowResponseForm] = useState(false);
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
  }, [teamMembers, messages]);

  const handleMessageButtonClick = (e)=>{
    if(showMessages){
      setShowMessages(false);
      setMessageButtonText('Show Messages');
      
    }else{
      setShowResponseForm(false);
      setShowMessages(true);
      setMessageButtonText('Hide Messages');
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
            (showMessages && !showResponseForm) &&
            <Messages data = {currentUserMessages} 
                setResponseContact={setResponseContact} 
                setShowResponseForm={setShowResponseForm}
                handleMessageButtonClick={handleMessageButtonClick}
                />
          }
          {
            (showResponseForm && !showMessages) && 
              <RespondEmail responseContact={responseContact}
               handleMessageButtonClick={handleMessageButtonClick}
              />
          }
          </Grid.Column>
          <Grid.Column width={5}>
            <Header as="h3" style={{ padding: "5px" }} textAlign="center">
              Members
            </Header>
          <Members 
            members={teamMembers}
            currentUser={currentUser}
            setShowCHat={setShowCHat}
            setChatMember={setChatMember}
            />
          {
            showCHat && <Chat chatMember={chatMember} currentUserProfil={currentUserProfil}/>
          }
          </Grid.Column>
          </Grid>
    </div>
  );
};

export default Profile;
