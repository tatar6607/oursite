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
  const { currentUser } = useAuth();
  const fileInputRef = createRef();

  const handleButtonClick = (e, docId) => {
    if (e.target.innerText === 'Edit') {
      setEditMode(true);
      setCartDocId(docId);
      e.target.innerText = 'Save'

    } else {
      setEditMode(false);
      e.target.innerText = 'Edit'
    }
  }

  const fileChange = (e) => {
    console.log(e.target.files[0]);
    // setImagePath(e.target.files[0].name);
    // console.log(imagePath);
  };

  return (
    <div>
      <Container textAlign="center" className="body-card desc">
        <Header as="h1" style={{ padding: "15px" }}>
          Our Team
        </Header>
        <Card.Group centered>
          {teamMembers.map((info, i, arr) => {
            const { header, description, image, title, docId } = info;
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
                      placeholder={header}
                      required
                    // onChange={handleFirstNameChange}
                    />
                    :
                    <Card.Header content={header} />
                  }
                  {editMode && docId === cartDocId ?
                    <Form.Input
                      fluid
                      placeholder={title}
                      required
                    // onChange={handleFirstNameChange}
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
                    placeholder={description}
                    style={{ minHeight: "200px" }}
                  // onChange={handleMessageChange}

                  />
                  :
                  <Card.Content description={description} />
                }
                {
                  currentUser ?
                    (
                      <Card.Content extra>
                        <div className='ui two buttons'>
                          <Button basic color='green' onClick={(e) => handleButtonClick(e, docId)}>
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