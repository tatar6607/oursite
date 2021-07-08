import firebase from 'firebase/app'
import 'firebase/firestore'
import "firebase/auth";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_appId,
  databaseURL: process.env.REACT_APP_databaseURL
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const store = app.firestore();
export const storage = app.storage();
// export default firebase;