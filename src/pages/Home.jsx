import React from "react";
import { Container, Segment, Image } from "semantic-ui-react";

import HomeBanner from '../images/home_banner_3.jpg'
import Work from "../components/Work";
import Clients from "../components/Clients";

const Home = () => {
  
  return (
    <div>
      <Segment style={{padding:0}}>
        <Image src={HomeBanner} fluid></Image>
      </Segment>
      <Work />
      <Clients />
    </div>
  );
};

export default Home;
