import React, { useContext, useState, useEffect } from 'react';
import {store} from '../firebase';

import { useAuth } from './AuthContext';

const BodyCardDataContext = React.createContext();

export function useBodyCardData() {
  return useContext(BodyCardDataContext);
}


export function BodyCardDataProvider({ children }) {
  const [bodyCardData, setBodyCardData] = useState([]);
  const {currentUser} = useAuth();

  const ref = store.collection('body_card_data');

  function addBodyCardData(cardData){
      ref.add(cardData);
  }

  useEffect(()=>{
        ref.onSnapshot((querySnapshot)=>{
            const items =[];
            querySnapshot.forEach((doc)=>{
                items.push(doc.data());
            });
            setBodyCardData(items);
        });  
  }, [])
  
  const value = {
    bodyCardData,
    addBodyCardData
  }


  return (
    <BodyCardDataContext.Provider value={value}>
      {children}
    </BodyCardDataContext.Provider>
  )
}