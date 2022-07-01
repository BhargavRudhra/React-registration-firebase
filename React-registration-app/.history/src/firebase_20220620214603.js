import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDZyFt4LdEombct3zozOfbmuPR8pjb_BAE",
  authDomain: "registration-firebase-8414d.firebaseapp.com",
  projectId: "registration-firebase-8414d",
  storageBucket: "registration-firebase-8414d.appspot.com",
  messagingSenderId: "264237998338",
  appId: "1:264237998338:web:94073d041fccbe0890621b"
};
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)
export default app



