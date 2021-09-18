import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD2ksv717on5cgU4A-Zp8Brma7cixghSHs",
  authDomain: "linkedin-clone-11028.firebaseapp.com",
  projectId: "linkedin-clone-11028",
  storageBucket: "linkedin-clone-11028.appspot.com",
  messagingSenderId: "37001604731",
  appId: "1:37001604731:web:55b8e44e6140e8e448fcde",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
