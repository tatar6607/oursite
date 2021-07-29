import React, { useContext, useState, useEffect } from 'react';
import {store} from '../firebase';
import firebase from 'firebase/app'

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

  function addChat(chat){
       var newChatData  = {...chat, time: firebase.firestore.FieldValue.serverTimestamp()}
      ref.add(newChatData);
  }

  useEffect(()=>{
    if(currentUser){
      // Create the query to load the last 12 messages and listen for new ones.
      var query = ref.orderBy('time', 'desc').limit(12);

       // Start listening to the query.
      query.onSnapshot(function(snapshot) {
        var newChats = [];
        snapshot.docChanges().forEach(function(change) {
          if (change.type === 'removed') {
            // deleteMessage(change.doc.id);
          } else {
              try {
                var message = change.doc.data();
                const {time, text, from, fromEmail, to, toEmail} = message;
                var dateString = time.toDate().toDateString();
                newChats.push({id: change.doc.id, dateString, from, fromEmail, text, to, toEmail});
              } catch (error) {
                console.log(change.doc.data());
              }
              
          };
        });
        setChats(newChats);
      });
    }   
  }, [currentUser, ref])
  
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