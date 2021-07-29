import React, { useContext, useState, useEffect } from 'react';
import {store} from '../firebase';
import firebase from 'firebase';

import { useAuth } from './AuthContext';

const ChatContext = React.createContext();

export function useChat() {
  return useContext(ChatContext);
}


export function ChatProvider({ children }) {
  const [chats, setChats] = useState([]);
  const {currentUser} = useAuth();
  
  const ref = store.collection('chats');

  function getUserName() {
    return currentUser.displayName;
  }

  async function addChat(chat){
    var time = await firebase.firestore.FieldValue.serverTimestamp()
    var newChatData  = {...chat, time}
    ref.add(newChatData);
  }

  useEffect(()=>{
    if(currentUser){
      // Create the query to load the last 12 messages and listen for new ones.
      var query = ref.orderBy('time', 'asc').limit(50);

       // Start listening to the query.
      const unsub = query.onSnapshot(function(snapshot) {
        var newChats = [];
        snapshot.docs.forEach(function(doc) {
              try {
                var message = doc.data();
                const {time, text, from, fromEmail, to, toEmail} = message;
                var dateString = time === null? "" : time.toDate().toUTCString();
                newChats.push({id: doc.id, dateString, from, fromEmail, text, to, toEmail});
              } catch (error) {
                console.log(error)
                console.log(doc.data());
              }
        });
        // console.log(newChats);
        setChats(newChats);
      });
      return () =>{
        unsub();
      }
    }   
  }, [currentUser])

  
  const value = {
    chats,
    addChat
  }


  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  )
}