import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDteAAYy44fkI5CPzQfBBmEiqddJCpRnJs',
  authDomain: 'anushilon-bd.firebaseapp.com',
  databaseURL:
    'https://anushilon-bd-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'anushilon-bd',
  storageBucket: 'anushilon-bd.appspot.com',
  messagingSenderId: '659987306508',
  appId: '1:659987306508:web:16cf501fdde606f1fab629',
  measurementId: 'G-MZGERKL5LF',
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
