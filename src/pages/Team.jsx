import React, { useState, createRef } from "react";
import { Container, Card, Header, Image, Button, Form, TextArea } from "semantic-ui-react";
import "./Home.css";
// import team from "../data/team_data ";
import { useTeam } from "../contexts/TeamContext";
import { useAuth } from "../contexts/AuthContext";

const Team = () => {

  const { teamMembers, updateTeamMember } = useTeam();
  const [cartDocId, setCartDocId] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [imagePath, setImagePath] = useState('');
  // const [header, setHeader] = useState("");
  // const [title, setTitle] = useState("");
  // const [descripton, setDescripton] = useState("");
  const [profil, setProfil] = useState({
    header: '', title: '', description: ''
  });
  const { currentUser } = useAuth();
  const fileInputRef = createRef();

  const handleButtonClick = (e, member) => {
    const { docId, header, title, description } = member;
    setProfil({ header, title, description });
    if (e.target.innerText === 'Edit') {
      setEditMode(true);
      setCartDocId(docId);
      e.target.innerText = 'Save'

    } else if (e.target.innerText === 'Save') {
      setEditMode(false);
      e.target.innerText = 'Edit'
      updateTeamMember(profil, docId);
    }
  }

  const fileChange = (e) => {
    console.log(e.target.files[0]);
    // setImagePath(e.target.files[0].name);
    // console.log(imagePath);
  };

  const handleProfilChange = (e, name) => {
    setProfil({ ...profil, [name]: e.target.value });
  }

  return (
    <div>
      <Container textAlign="center" className="body-card desc">
        <Header as="h1" style={{ padding: "15px" }}>
          Our Team
        </Header>
        <Card.Group centered>
          {teamMembers.map((member, i, arr) => {
            const { header, description, image, title, docId } = member;
            return (
              <Card raised={true} key={docId}>
                <Card.Content>
                  <Card.Header className="icon-padding">
                    <Image
                      src={image}
                      alt=""
                      size='small'
                      circular
                    />
                    {editMode && docId === cartDocId ?
                      <>
                        <div className='ui one buttons'>
                          <Button basic color='blue' onClick={() => fileInputRef.current.click()}>
                            Choose an image
                        </Button>
                        </div>
                        <input
                          ref={fileInputRef}
                          type="file"
                          hidden
                          onChange={fileChange}
                        />
                      </>
                      :
                      null
                    }
                  </Card.Header>
                  {editMode && docId === cartDocId ?
                    <Form.Input
                      fluid
                      required
                      onChange={(e) => handleProfilChange(e, 'header')}
                      value={profil.header}
                    />
                    :
                    <Card.Header content={header} />
                  }
                  {editMode && docId === cartDocId ?
                    <Form.Input
                      fluid
                      required
                      onChange={(e) => handleProfilChange(e, 'title')}
                      value={profil.title}
                    />
                    :
                    <Card.Meta>
                      <span>
                        {title}
                      </span>
                    </Card.Meta>
                  }
                </Card.Content>
                {editMode && docId === cartDocId ?
                  <Form.Field
                    id="form-textarea-control-opinion"
                    control={TextArea}
                    required
                    style={{ minHeight: "200px" }}
                    onChange={(e) => handleProfilChange(e, 'description')}
                    value={profil.description}
                  />
                  :
                  <Card.Content description={description} />
                }
                {
                  currentUser ?
                    (
                      <Card.Content extra>
                        <div className='ui two buttons'>
                          <Button basic color='green' onClick={(e) => handleButtonClick(e, member)}>
                            Edit
                          </Button>
                        </div>
                      </Card.Content>
                    )
                    :
                    null
                }
              </Card>
            );
          })}
        </Card.Group>
      </Container>
    </div>
  );
};

export default Team;