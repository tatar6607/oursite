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

  function updateTeamMember(docId, updateObject) {

    ref.doc(docId).update(updateObject);
  }

  function uploadImage(docId, image, profil){
    console.log(docId)
    console.log(image)
    console.log(profil)
    if(image){
      console.log(image.name);
      const storageRef = storage.ref(`team_member_images`);
      const imageRef = storageRef.child(image.name);
      imageRef.put(image)
     //5.
     .then(() => {
        updateTeamMember(docId, {...profil, image: image.name})
        alert("Image uploaded successfully to Firebase.");
    });
    }else{
      alert("Please upload an image first.");
    }
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
    updateTeamMember,
    uploadImage
  }


  return (
    <TeamContext.Provider value={value}>
      {children}
    </TeamContext.Provider>
  )
}