import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Menu, Container, Segment, Grid, Image } from "semantic-ui-react";
import { useAuth } from "../contexts/AuthContext";
import Logo from "../images/logo.png";

function Header() {
  const [activeButton, setActiveButton] = useState({ activeItem: "home" });
  const history = useHistory();
  const { currentUser, logout } = useAuth();

  const handleItemClick = (e, { name }) => {
    setActiveButton({ activeItem: name });
    // console.log(currentUser)
    if (name === 'login' && currentUser) {
      logout()
      history.push(`/`);
    } else if (name === "home") {
      history.push(`/`);
    } else {
      history.push(`/${name}`);
    }
  };

  const { activeItem } = activeButton;

  return (
    <Segment inverted attached="top">
      <Container>
        <Grid columns={3}>
          <Grid.Row className="d-flex jusfify-content-between p-2 align-items-center">
            <Grid.Column width={3}>
              <Image
                src={Logo}
                alt=""
                style={{ height: "100px", width: "160px" }}
                fluid
              />
            </Grid.Column>
            <Grid.Column width={13}>
              <Menu inverted pointing secondary size="huge">
                <Menu.Item
                  name="home"
                  active={activeItem === "home"}
                  onClick={handleItemClick}
                />
                <Menu.Item
                  name="services"
                  active={activeItem === "services"}
                  onClick={handleItemClick}
                />
                <Menu.Item
                  name="team"
                  active={activeItem === "team"}
                  onClick={handleItemClick}
                />
                <Menu.Item
                  name="contact"
                  active={activeItem === "contact"}
                  onClick={handleItemClick}
                />
                {
                  currentUser && (
                    <Menu.Item
                      name="messages"
                      active={activeItem === "messages"}
                      onClick={handleItemClick}
                    />
                  )
                }
                <Menu.Menu position="right">
                  <Menu.Item
                    name="login"
                    active={activeItem === "login"}
                    onClick={handleItemClick}
                  >
                    {currentUser ? "Logout" : "Login"}
                  </Menu.Item>
                  {currentUser ? (
                    <Menu.Item
                      name={`${currentUser.email}`}
                      active={activeItem === currentUser.email}
                    ></Menu.Item>
                  ) : null}
                </Menu.Menu>
              </Menu>
            </Grid.Column>
            <Grid.Column></Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
}

export default Header;
