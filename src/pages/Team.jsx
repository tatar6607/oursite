import React, {useState} from "react";
import { Container, Card, Header, Image, Button, Form, TextArea } from "semantic-ui-react";
import "./Home.css";
// import team from "../data/team_data ";
import { useTeam } from "../contexts/TeamContext";
import { useAuth } from "../contexts/AuthContext";

const Team = () => {
  
  const {teamMembers, updateTeamMember} = useTeam();

  const [editMode, setEditMode] = useState(false);
  const {currentUser} = useAuth();

  const handleButtonClick = (b)=>{
    if(b.target.innerText === 'Edit'){
      setEditMode(true);
      b.target.innerText = 'Save'
    }else{
      setEditMode(false);
      b.target.innerText = 'Edit'
    }
    
  }
  
  return (
    <div>
      <Container textAlign="center" className="body-card desc">
        <Header as="h1" style={{ padding: "15px" }}>
          Our Team
        </Header>
        <Card.Group centered>
          {teamMembers.map((info) => {
            const { header, description, image, title, docId } = info;
            return (
              <Card  raised={true} key={docId}>
                <Card.Content>
                  <Card.Header className="icon-padding">
                  <Image
                    src={image}
                    alt=""
                    size='small'
                    circular
                 />
                  </Card.Header>
                  {editMode?
                  <Form.Input
                  fluid
                  placeholder={header}
                  required
                  // onChange={handleFirstNameChange}
                  />
                  :
                  <Card.Header content={header} />
                  }
                  {editMode?
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
                {editMode?
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
                  currentUser?
                  (
                    <Card.Content extra>
                    <div className='ui two buttons'>
                    <Button basic color='green' onClick={handleButtonClick}>
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