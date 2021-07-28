import React, {useEffect} from 'react';
import { Button, Image, List } from 'semantic-ui-react'

const Members = ({members, currentUser, setShowCHat, setChatMember}) => {

    const handleChatButton = (e, memberEmail)=>{
        setShowCHat(true);
        setChatMember(memberEmail);
    }

    const showMembers = ()=>{
        const teamMembers = members.filter((member) => member.email !== currentUser.email) ;

        return teamMembers.map((member, index)=>{
            const {header, email, role, title, image} = member;
            return(
                <List.Item>
                    <List.Content floated='right'>
                        <Button onClick={(e)=>{handleChatButton(e, email)}}>Chat</Button>
                    </List.Content>
                    <Image avatar src={image} />
                    <List.Content>{header}</List.Content>
                </List.Item>
            )
        });
    }

    return (
        <List divided verticalAlign='middle' size="small" style={{marginRight: "5px"}}>
            {
                showMembers()
            }
        </List>
    )
}

export default Members
