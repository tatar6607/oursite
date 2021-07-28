import React, { useContext, useState, useEffect } from 'react';
import {store} from '../firebase';

import { useAuth } from './AuthContext';

const MessagesContext = React.createContext();

export function useMessages() {
  return useContext(MessagesContext);
}


export function MessagesProvider({ children }) {
  const [messages, setMessages] = useState([]);
  const {currentUser} = useAuth();

  const ref = store.collection('messages');

  function addMessage(message){
      ref.add(message);
  }

  useEffect(()=>{
    if(currentUser){
        ref.onSnapshot((querySnapshot)=>{
            const items =[];
            querySnapshot.forEach((doc)=>{
                items.push(doc.data());
            });
            setMessages(items);
        });
        // console.log(messages);
    }   
  }, [currentUser, ref])
  
  const value = {
    messages,
    addMessage
  }


  return (
    <MessagesContext.Provider value={value}>
      {children}
    </MessagesContext.Provider>
  )
}