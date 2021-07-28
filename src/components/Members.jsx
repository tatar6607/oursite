import React, {useEffect} from 'react';
import { Button, Image, List } from 'semantic-ui-react'

const Members = ({members, currentUser}) => {

    const showMembers = ()=>{
        const teamMembers = members.filter((member) => member.email !== currentUser.email) ;

        return teamMembers.map((member, index)=>{
            const {header, email, role, title, image} = member;
            return(
                <List.Item>
                    <List.Content floated='right'>
                        <Button>Chat</Button>
                    </List.Content>
                    <Image avatar src={image} />
                    <List.Content>{header}</List.Content>
                </List.Item>
            )
        });
    }
    return (
        <List divided verticalAlign='middle'>
            {
                showMembers()
            }
        </List>
    )
}

export default Members
