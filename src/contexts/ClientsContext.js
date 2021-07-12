import React, { useContext, useState, useEffect } from "react";
import { store } from "../firebase";
import { storage } from "../firebase";

// import { useAuth } from './AuthContext';

const ClientsContext = React.createContext();

export function useClients() {
  return useContext(ClientsContext);
}

export function ClientsProvider({ children }) {
  const [clients, setClients] = useState([]);
  // const {currentUser} = useAuth();

  const ref = store.collection("clients");

  function addClients(client) {
    ref.add(client);
  }

  useEffect(() => {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      const newItems = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        var gsReference = storage.ref(`clients_images/${data.image}`);
        gsReference
          .getDownloadURL()
          .then((url) => {
            // console.log(url);
            data.image = url;
          })
          .catch((error) => {
            console.log("Error geting url");
          });
        items.push(data);
      });

      while (items.length) newItems.push(items.splice(0, 4));
      // console.log(newItems)
      setClients(newItems);
    });
  }, []);

  const value = {
    clients,
    addClients,
  };

  return (
    <ClientsContext.Provider value={value}>{children}</ClientsContext.Provider>
  );
}
