import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAM531c9ylDmZ3Rq0ZKAMl1u1mK5L4q3fE",
    authDomain: "crwn-db-fbf41.firebaseapp.com",
    projectId: "crwn-db-fbf41",
    storageBucket: "crwn-db-fbf41.appspot.com",
    messagingSenderId: "417245024773",
    appId: "1:417245024773:web:0a32b77fdfd99a10f5c26c"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;