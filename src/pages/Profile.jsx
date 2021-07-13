import React, { useState, createRef, useEffect } from "react";
import { Container, Card, Header, Image, Button, Form, TextArea, Label } from "semantic-ui-react";
import {useHistory} from 'react-router-dom';

import "./Home.css";
// import team from "../data/team_data ";
import { useTeam } from "../contexts/TeamContext";
import { useAuth } from "../contexts/AuthContext";
import { useMessages } from "../contexts/MessagesContext";
// import TeamImage from '../images/team_4.jpeg'

const Profile = () => {
  const { teamMembers, updateTeamMember, uploadImage } = useTeam();
  const [cartDocId, setCartDocId] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [memberImage, setMemberImage] = useState(null);
  const [profil, setProfil] = useState({
    header: "",
    title: "",
    description: "",
  });
  const [currentUserProfil, setCurrentUserProfil] = useState([]);
  const [currentUserMessages, setCurrentUserMessages] = useState([]);
  const { currentUser } = useAuth();
  const { messages } = useMessages();
  const fileInputRef = createRef();
  const history = useHistory();

  useEffect(() => {
    setCurrentUserProfil(
      teamMembers.filter((member) => member.email === currentUser.email)
    );

    setCurrentUserMessages(
      messages.filter((message) => message.personEmail === currentUser.email)
    );

  }, [teamMembers, messages]);

  const handleButtonClick = (e, member) => {
    const { docId, header, title, description } = member;
    setProfil({ header, title, description });
    if (e.target.innerText === "Edit") {
      setEditMode(true);
      setCartDocId(docId);
      e.target.innerText = "Save";
    } else if (e.target.innerText === "Save") {
      setEditMode(false);
      e.target.innerText = "Edit";
      updateTeamMember(docId, profil);
    }
  };

  const onImageChange = (e, docId) => {
    const reader = new FileReader();
    let file = e.target.files[0];
    if (file) {
      reader.onload = () => {
        if (reader.readyState === 2) {
          setMemberImage(file);
          uploadImage(docId, memberImage, profil);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setMemberImage(null);
    }
  };

  const handleProfilChange = (e, name) => {
    setProfil({ ...profil, [name]: e.target.value });
  };

  return (
    <div>
      {/* <Segment style={{padding:0}}>
        <Image src={TeamImage} style={{height: '300px'}} fluid></Image>
      </Segment> */}
      <Container textAlign="center" className="body-card desc">
        <Header as="h1" style={{ padding: "15px" }}>
          Profile
        </Header>
        <Card.Group centered>
          {currentUserProfil && currentUserProfil.map((member, i, arr) => {
            const { header, description, image, title, docId } = member;
            return (
              <Card raised={true} key={docId}>
                <Card.Content>
                  <Card.Header className="icon-padding">
                    <Image src={image} alt="" size="small" circular />
                    {editMode && docId === cartDocId ? (
                      <>
                        <div className="ui one buttons mt-3">
                          <Button
                            basic
                            color="blue"
                            onClick={() => fileInputRef.current.click()}
                          >
                            Choose an image
                          </Button>
                        </div>
                        <input
                          ref={fileInputRef}
                          type="file"
                          hidden
                          onChange={(e) => onImageChange(e, docId)}
                        />
                      </>
                    ) : null}
                  </Card.Header>
                  {editMode && docId === cartDocId ? (
                    <Form.Input
                      fluid
                      required
                      onChange={(e) => handleProfilChange(e, "header")}
                      value={profil.header}
                    />
                  ) : (
                    <Card.Header content={header} />
                  )}
                  {editMode && docId === cartDocId ? (
                    <Form.Input
                      fluid
                      required
                      onChange={(e) => handleProfilChange(e, "title")}
                      value={profil.title}
                      className="mt-1"
                    />
                  ) : (
                    <Card.Meta>
                      <span>{title}</span>
                    </Card.Meta>
                  )}
                </Card.Content>
                {editMode && docId === cartDocId ? (
                  <Form.Input
                    id="form-textarea-control-opinion"
                    control={TextArea}
                    required
                    style={{ minHeight: "200px" }}
                    onChange={(e) => handleProfilChange(e, "description")}
                    value={profil.description}
                  />
                ) : (
                  <Card.Content description={description} />
                )}
                {currentUser ? (
                  <Card.Content extra>
                    <div className="ui two buttons">
                      <Button
                        basic
                        color="green"
                        onClick={(e) => handleButtonClick(e, member)}
                      >
                        Edit
                      </Button>
                    </div>
                  </Card.Content>
                ) : null}
              </Card>
            );
          })}
        </Card.Group>
          <Button as='div' labelPosition='right' onClick={()=>{history.push('/messages');}}>
            <Button color='red'>
              Messages
            </Button>
            <Label as='a' basic color='red' pointing='left'>
              {currentUserMessages.length}
            </Label>
          </Button>
      </Container>
    </div>
  );
};

export default Profile;
