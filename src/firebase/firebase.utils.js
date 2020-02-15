import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
        apiKey: "AIzaSyDlnqRp6xdCp1abqSnNnFIqfNO7fpTe0Gk",
        authDomain: "larmoire-db.firebaseapp.com",
        databaseURL: "https://larmoire-db.firebaseio.com",
        projectId: "larmoire-db",
        storageBucket: "larmoire-db.appspot.com",
        messagingSenderId: "627931711794",
        appId: "1:627931711794:web:f512c898375a202c106f2b"
      };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;