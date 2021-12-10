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

export const createUserProfileDocument = async(userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  
  if(!snapShot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    }catch(err){
        console.log('error creating user', err.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;