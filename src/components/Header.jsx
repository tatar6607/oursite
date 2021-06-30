import React, { useState } from "react";
import { Menu, Container, Segment, Grid, Image } from "semantic-ui-react";
import Logo from "../images/logo.png";

function Header() {
  const [activeButton, setActiveButton] = useState({ activeItem: "home" });

  const handleItemClick = (e, { name }) =>
    setActiveButton({ activeItem: name });

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
                  name="messages"
                  active={activeItem === "messages"}
                  onClick={handleItemClick}
                />
                <Menu.Item
                  name="friends"
                  active={activeItem === "friends"}
                  onClick={handleItemClick}
                />
                <Menu.Menu position="right">
                  <Menu.Item
                    name="login"
                    active={activeItem === "login"}
                    onClick={handleItemClick}
                  >
                    Login
                  </Menu.Item>
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
