import React, { useState } from "react";
import { Menu, Container, Segment, Grid, Image } from "semantic-ui-react";
import Card from "./Card";

const Body = () => {
    return (
        <div>
            <Container>
            <h2 class="ui center aligned header">What DO We DO?</h2>
                <Grid columns={3}>
                    <Grid.Row className="d-flex jusfify-content-between align-items-center">
                        <div class="ui cards">
                            <Card header="Test Automation"
                            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a 
                            type specimen book. It has survived not only five centuries"
                            icon="code icon"
                            />

                            <Card header="Cloud Computing"
                            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a 
                            type specimen book. It has survived not only five centuries"
                            icon="cloud icon"
                            />

                            <Card header="Analytics"
                            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a 
                            type specimen book. It has survived not only five centuries"
                            icon="chart bar icon"
                            />

                            <Card header="AI/ML"
                            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a 
                            type specimen book. It has survived not only five centuries"
                            icon="desktop icon"
                            />

                            <Card header="DevOPs"
                            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a 
                            type specimen book. It has survived not only five centuries"
                            icon="server icon"
                            />

                            <Card header="Mobile Development"
                            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a 
                            type specimen book. It has survived not only five centuries"
                            icon="mobile alternate icon"
                            />
                        </div>
                    </Grid.Row>
                </Grid>
            </Container>
        </div>
    )
}

export default Body
