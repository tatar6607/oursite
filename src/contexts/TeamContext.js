import React, { useContext, useState, useEffect } from 'react';
import {store} from '../firebase';
import { storage } from "../firebase"

// import { useAuth } from './AuthContext';

const TeamContext = React.createContext();

export function useTeam() {
  return useContext(TeamContext);
}


export function TeamProvider({ children }) {
  const [teamMembers, setTeamMembers] = useState([]);
  // const {currentUser} = useAuth();

  const ref = store.collection('team');

  function addTeamMember(member){
      ref.add(member);
  }

  useEffect(()=>{
        ref.onSnapshot((querySnapshot)=>{
            const items =[];
            querySnapshot.forEach((doc)=>{
                const data = doc.data();
                var gsReference = storage.ref(`team_member_images/${data.image}`);
                gsReference.getDownloadURL()
                  .then((url)=>{
                    data.image = url
                  })
                  .catch((error)=>{
                    console.log('Error geting url')
                  })
                items.push(data);
            });
            // console.log(items);
            setTeamMembers(items);
        }); 
  }, [])
  
  const value = {
    teamMembers,
    addTeamMember
  }


  return (
    <TeamContext.Provider value={value}>
      {children}
    </TeamContext.Provider>
  )
}