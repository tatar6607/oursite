import React, { useContext, useState, useEffect } from 'react';
import { store } from '../firebase';
import { storage } from "../firebase"



const TeamContext = React.createContext();

export function useTeam() {
  return useContext(TeamContext);
}


export function TeamProvider({ children }) {
  const [teamMembers, setTeamMembers] = useState([]);


  const ref = store.collection('team');

  function addTeamMember(member) {
    ref.add(member);
  }

  function updateTeamMember(updateObject, docId) {

    ref.doc(docId).update(updateObject);
  }

  useEffect(() => {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        data.docId = doc.id;
        var gsReference = storage.ref(`team_member_images/${data.image}`);
        gsReference.getDownloadURL()
          .then((url) => {
            data.image = url
          })
          .catch((error) => {
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
    addTeamMember,
    updateTeamMember
  }


  return (
    <TeamContext.Provider value={value}>
      {children}
    </TeamContext.Provider>
  )
}