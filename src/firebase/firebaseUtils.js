import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAcCBq3p5ZgoNY1_NUNt7FZxvK3H9x1vwk',
  authDomain: 'crowndb-499c5.firebaseapp.com',
  databaseURL: 'https://crowndb-499c5.firebaseio.com',
  projectId: 'crowndb-499c5',
  storageBucket: 'crowndb-499c5.appspot.com',
  messagingSenderId: '120039366445',
  appId: '1:120039366445:web:dff62ecb818ea270ccbda4',
  measurementId: 'G-XHN0X7GWHE'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  //console.log(snapShot);
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
