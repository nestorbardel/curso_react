import 'firebase/firestore';
import 'firebase/auth';

import {initializeApp} from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBflRzA2DnvKE8tqJMOnwZ88ZQ-Glpjlic",
    authDomain: "react-app-cursos-27d28.firebaseapp.com",
    projectId: "react-app-cursos-27d28",
    storageBucket: "react-app-cursos-27d28.appspot.com",
    messagingSenderId: "911282577612",
    appId: "1:911282577612:web:32a4d83ec5e0e0938d6269"
  };
  
  initializeApp(firebaseConfig);

  const db = getFirestore();
  const googleAuthProvider = new GoogleAuthProvider();

  export {
      db,googleAuthProvider
  }